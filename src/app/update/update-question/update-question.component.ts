import {Component, Inject, OnInit} from '@angular/core';
import {Content, Keyword, Material, Option, Question} from '../../model/material';
import {TokenStorageService} from '../../auth/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {TeachService} from '../../services/teach.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ContentAddDialog, ContentDeleteDialog, ContentUpdateDialog} from '../update-content/update-content.component';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

    info: any;
    private sub: any;
    id: number;
    isLoggedIn = false;
    questions: Array<Question> = new Array<Question>();
    question: Question = new Question();

    constructor(private token: TokenStorageService, private route: ActivatedRoute,
                private teachService:TeachService, private router: Router,
                public dialog: MatDialog) {
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

        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }


        this.teachService.getQuestions(this.id).subscribe(
            data => {
                this.questions = data;
            }, error => {
                console.log(error);
            }
        )
    }


    openAddDialog(): void {
        const dialogRef = this.dialog.open(QuestionAddDialog, {
            width: '50%',
            data: {username: this.info.username,
                question: this.question,
                contentId: this.id}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Question added');
            this.question = result;
        });
    }

    openEditDialog(question: Question): void {
        const dialogRef = this.dialog.open(QuestionUpdateDialog, {
            width: '50%',
            data: {username: this.info.username,
                question: question,
                contentId: this.id}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Question edited');
            this.question = result;
        });
    }

    openDeleteDialog(question: Question): void {
        const dialogRef = this.dialog.open(QuestionDeleteDialog, {
            width: '300px',
            data: {username: this.info.username,
                question: question,
                contentId: this.id}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Question deleted');
        });
    }

}



@Component({
    selector: 'question-add-dialog',
    templateUrl: 'question-add-dialog.html',
})
export class QuestionAddDialog {

    constructor(
        public dialogRef: MatDialogRef<QuestionAddDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData: QuestionDialogData,
        private teachService: TeachService) {}

    public question: Question = new Question();
    optionList: Array<Option> = new Array<Option>();
    selectedOption: Option = new Option();
    message : any;

    createQuestion() {
        this.question.options = this.optionList;
        console.log(this.question);

        this.teachService.createQuestion(this.question,this.dialogData.contentId).subscribe(
            data => {
                console.log(data);
                this.message = data.message;
            }, error => {
                console.log(error);
            }
        )
    }

    addOption() {
        console.log(this.selectedOption);
        this.optionList.push(this.selectedOption);
        this.selectedOption = new Option();
    }

    onNoClick(): void {
        this.dialogRef.close();
        window.location.reload();
    }

    onDeleteClick(){
        this.optionList.pop();
    }

}

@Component({
    selector: 'question-update-dialog',
    templateUrl: 'question-update-dialog.html',
})
export class QuestionUpdateDialog {

    message : any;

    constructor(
        public dialogRef: MatDialogRef<QuestionUpdateDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData: QuestionDialogData,
        private teachService: TeachService) {}

    onNoClick(): void {
        this.dialogRef.close();
        window.location.reload();
    }

    updateQuestion() {
        this.teachService.updateQuestion(this.dialogData.question,this.dialogData.question.id).subscribe(
            data => {
                console.log(data);
                this.message = data.message;
            }, error => {
                console.log(error);
            }
        );
    }

}


@Component({
    selector: 'question-delete-dialog',
    templateUrl: 'question-delete-dialog.html',
})
export class QuestionDeleteDialog {

    message : any;

    constructor(
        public dialogRef: MatDialogRef<QuestionDeleteDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData: QuestionDialogData,
        private teachService: TeachService) {}

    onNoClick(): void {
        this.dialogRef.close();
        window.location.reload();
    }

    onDeleteClick(): void {
        this.teachService.deleteQuestion(this.dialogData.question.id).subscribe(
            data => {
                this.message = data.message;
                console.log(data);
            }, error => {
                console.log(error);
            }
        );
    }



}


export interface QuestionDialogData {
    question:Question;
    username:string;
    contentId:number;
}

