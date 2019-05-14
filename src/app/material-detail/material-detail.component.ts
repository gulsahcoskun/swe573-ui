import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {Answer, Keyword, Material, Option, Question} from '../model/material';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../services/search.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatHorizontalStepper} from '@angular/material';
import {LearnService} from '../services/learn.service';
import {UserProgressControl} from '../model/user-progress-control';

@Component({
    selector: 'app-material-detail',
    templateUrl: './material-detail.component.html',
    styleUrls: ['./material-detail.component.css']
})
export class MaterialDetailComponent implements OnInit {

    info: any;
    material: Material;
    private sub: any;
    id: number;
    answerList: Array<Answer> = new Array<Answer>();
    answer: Answer;
    progress: UserProgressControl;
    status: boolean;
    isContentCompleted: boolean = false;

    @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

    constructor(private token: TokenStorageService, private route: ActivatedRoute,
                private searchService: SearchService, public dialog: MatDialog,
                private learnService: LearnService) {
    }

    ngOnInit() {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        this.material = this.searchService.getMaterialDetail(this.id).subscribe(
            data => {
                this.material = data;
            }, error => {
                console.log(error);
            }
        );


    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    complete(materialId: number, contentId: number) {
        if (this.isCompleted(materialId, contentId)) {
            console.log('Already completed');
        } else {
            this.progress = {
                username: this.token.getUsername(),
                materialId: materialId,
                contentId: contentId,
                answerList: this.answerList
            };

            this.learnService.createProgress(this.progress).subscribe(data => {
                this.status = data.isSuccess;
            }, error => {
                console.log(error);
            });
        }

        this.stepper.selected.completed = true;
        this.stepper.next();
    }

    openKeywordDialog(keyword): void {
        const dialogRef = this.dialog.open(KeywordDetailDialog, {
            width: '300px',
            data: {keyword}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    onSelectionChange(selectedQuestion: number, selectedOption: number) {
        let found: Boolean = false;

        for (let a of this.answerList) {
            if (a.questionId == selectedQuestion) {
                a.optionId = selectedOption;
                found = true;
            }
        }

        if (!found) {
            this.answer = {
                questionId: selectedQuestion,
                optionId: selectedOption
            };
            this.answerList.push(this.answer);
        }

        console.log(selectedOption + 'selected');
        console.log(this.answerList);
    }


    async isCompleted(materialId: number, contentId: number) {

        this.progress = {
            username: this.token.getUsername(),
            materialId: materialId,
            contentId: contentId,
            answerList: this.answerList
        };


        //return await this.learnService.checkIsCompleted(this.progress).toPromise();


        await this.learnService.checkIsCompleted(this.progress)
            .toPromise()
            .then(
                data => {
                    this.isContentCompleted = data.isSuccess;
                }, error => {
                    console.log(error);
                    this.isContentCompleted = false;
                });

        return this.isContentCompleted;
    }

}


export interface DialogData {
    keyword: Keyword;
}

@Component({
    selector: 'keyword-detail-dialog',
    templateUrl: 'keyword-detail-dialog.html',
})
export class KeywordDetailDialog {

    constructor(
        public dialogRef: MatDialogRef<KeywordDetailDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}