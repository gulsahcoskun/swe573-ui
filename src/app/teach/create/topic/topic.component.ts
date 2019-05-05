import {Component, Inject, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {Content, Option, Question} from '../../../model/material';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

    content: Content = {};
    info: any;
    wikis: Array<any>;
    selectedKeyword: string;
    keywordList: Array<any>;
    questionList: Array<any>;
    optionList: Array<any>;
    newQuestion: Question = {};

    constructor(private token: TokenStorageService,public dialog: MatDialog) {
    }

    ngOnInit() {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    }

    onSubmit() {
        alert(JSON.stringify(this.content));
    }

    searchWiki(keyword: string){
        console.log(keyword + ' selected');
    }

    addKeyword(){
        console.log(this.selectedKeyword);
        this.keywordList.push(this.selectedKeyword);
    }


    openDialog(): void {
        const dialogRef = this.dialog.open(ContentQuestionDialog, {
            width: '400px',
            data: {question: this.newQuestion}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.newQuestion = result;
        });
    }

}



export interface DialogData {
    question: Question;
}


@Component({
    selector: 'content-question-dialog',
    templateUrl: 'content-question-dialog.html',
})
export class ContentQuestionDialog {

    constructor(
        public dialogRef: MatDialogRef<ContentQuestionDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}