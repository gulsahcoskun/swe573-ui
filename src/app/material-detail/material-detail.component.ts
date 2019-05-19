import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {Answer, Content, Keyword, Material, Option, Question} from '../model/material';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../services/search.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatHorizontalStepper, MatSnackBar} from '@angular/material';
import {LearnService} from '../services/learn.service';
import {UserProgressControl} from '../model/user-progress-control';
import {UserContentStatus, UserMaterialStatus} from '../model/user-material-status';

@Component({
    selector: 'app-material-detail',
    templateUrl: './material-detail.component.html',
    styleUrls: ['./material-detail.component.css']
})
export class MaterialDetailComponent implements OnInit {

    info: any;
    material: Material = new Material();
    private sub: any;
    id: number;
    answerList: Array<Answer> = new Array<Answer>();
    answer: Answer;
    progress: UserProgressControl;
    status: boolean;
    userMaterialStatus: UserMaterialStatus = new UserMaterialStatus();
    userContentStatus: UserContentStatus = new UserContentStatus();
    orderedStatus : Array<Boolean> = new Array<Boolean>();
    orderedContents: Array<Content> = new Array<Content>();
    durationInSeconds = 2;

    @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

    constructor(private token: TokenStorageService, private route: ActivatedRoute,
                private searchService: SearchService, public dialog: MatDialog,
                private learnService: LearnService,
                private snackBar: MatSnackBar) {
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
                this.material.contents.sort((a,b) => (a.order > b.order) ? 1 : -1);
                this.orderedContents = this.material.contents;
            }, error => {
                console.log(error);
            }
        );


        this.getUserMaterialStatus(this.info.username,this.id);
        this.orderContentStatus();
        console.log(this.userMaterialStatus)
        console.log(this.orderedStatus)
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    complete(materialId: number, contentId: number) {
        this.userContentStatus = this.findContentStatus(contentId);
        if (this.userContentStatus.isCompleted) {
            this.openCompletedSnackBar();
        } else {
            this.progress = {
                username: this.token.getUsername(),
                materialId: materialId,
                contentId: contentId,
                answerList: this.answerList
            };

            this.learnService.createProgress(this.progress).subscribe(data => {
                this.status = data.success;
                if(this.status){
                    this.openSuccessSnackBar();
                } else{
                    this.openFailSnackBar();
                }
            }, error => {
                console.log(error);
            });
        }

        this.getUserMaterialStatus(this.info.username,materialId);
        this.orderContentStatus();

        this.stepper.selected.completed = true;
        this.stepper.selected.editable = false;
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

    getUserMaterialStatus(username:string,materialId:number){
        this.learnService.getUserStatus(username,materialId).subscribe(
            data => {
                this.userMaterialStatus = data;
            }, error => {
                console.log(error);
            }
        );
    }

    public findContentStatus(contentId:number) : UserContentStatus{
        this.userContentStatus = this.userMaterialStatus.userContentStatusList.find(c => c.contentId == contentId)
        return this.userContentStatus;
    }


    orderContentStatus(){
        if(this.orderedStatus.length > 0){
            this.orderedStatus = new Array<Boolean>();
        }
        for(let content of this.orderedContents){
            for(let contentStatus of this.userMaterialStatus.userContentStatusList){
                if(content.id == contentStatus.contentId){
                    this.orderedStatus.push(contentStatus.isCompleted);
                }
            }
        }
    }

    openSuccessSnackBar() {
        this.snackBar.openFromComponent(ContentResultSuccessComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }

    openFailSnackBar() {
        this.snackBar.openFromComponent(ContentResultFailComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }

    openCompletedSnackBar() {
        this.snackBar.openFromComponent(ContentResultCompletedComponent, {
            duration: this.durationInSeconds * 1000,
        });
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

@Component({
    selector: 'snack-bar-component-content-result-success',
    templateUrl: 'snack-bar-component-content-result-success.html',
    styles: [`
    .content-result {
      color: white;
    }
  `],
})
export class ContentResultSuccessComponent {}

@Component({
    selector: 'snack-bar-component-content-result-fail',
    templateUrl: 'snack-bar-component-content-result-fail.html',
    styles: [`
    .content-result {
      color: white;
    }
  `],
})
export class ContentResultFailComponent {}

@Component({
    selector: 'snack-bar-component-content-result-completed',
    templateUrl: 'snack-bar-component-content-result-completed.html',
    styles: [`
    .content-result {
      color: white;
    }
  `],
})
export class ContentResultCompletedComponent {}