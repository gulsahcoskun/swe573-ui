import {Component, Inject, OnInit} from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {Content, Keyword, Material} from '../../model/material';
import {TeachService} from '../../services/teach.service';
import {MaterialAddDialog, MaterialDeleteDialog, MaterialUpdateDialog} from '../update.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {MaterialSummary} from '../../model/material-summary';

@Component({
    selector: 'app-update-content',
    templateUrl: './update-content.component.html',
    styleUrls: ['./update-content.component.css']
})
export class UpdateContentComponent implements OnInit {

    info: any;
    private sub: any;
    id: number;
    material: Material = new Material();
    public content: Content = new Content();

    constructor(private token: TokenStorageService, private route: ActivatedRoute,
                private searchService: SearchService, private router: Router,
                private teachService: TeachService,public dialog: MatDialog) {
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
            }, error => {
                console.log(error);
            }
        );
    }


    seeDetail(id:number){
        this.router.navigate(['update/content',id]);
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(ContentAddDialog, {
            width: '95%',
            height: '80%',
            data: {username: this.info.username,
                content: this.content,
                materialId: this.id}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Content added');
            this.content = result;
        });
    }

    openEditDialog(content:Content): void {
        const dialogRef = this.dialog.open(ContentUpdateDialog, {
            width: '500px',
            data: {username: this.info.username,
                content: content,
                materialId: this.id}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Content edited');
            this.material = result;
        });
    }

    openDeleteDialog(content: Content): void {
        const dialogRef = this.dialog.open(ContentDeleteDialog, {
            width: '300px',
            data: {username: this.info.username,
                content:content,
                materialId: this.id}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Content deleted');
        });
    }

}



@Component({
    selector: 'content-add-dialog',
    templateUrl: 'content-add-dialog.html',
})
export class ContentAddDialog {

    constructor(
        public dialogRef: MatDialogRef<ContentAddDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData: ContentDialogData,
        private teachService: TeachService) {}

    message : any;
    content: Content = new Content();
    wikis: Array<Keyword> = new Array<Keyword>();
    selectedKeyword: Keyword = new Keyword();
    keywordList: Array<Keyword> = new Array<Keyword>();
    keyword: any;

    onNoClick(): void {
        this.dialogRef.close();
    }


    createNewContent() {
        this.content.keywords = this.keywordList;
        this.content.status = 1;
        console.log(this.content);

        this.teachService.createContent(this.content,this.dialogData.materialId).subscribe(
            data => {
                console.log(data);
                this.message = data.message;
            }, error => {
                console.log(error);
            }
        )
    }

    searchWiki(keyword: string) {
        this.teachService.searchWiki(keyword).subscribe(
            data => {
                console.log(data);
                this.wikis = data;
            }, error => {
                console.log(error);
            }
        );
        console.log(keyword + ' selected');
    }

    addKeyword() {
        console.log(this.selectedKeyword);
        this.keywordList.push(this.selectedKeyword);
    }


}

@Component({
    selector: 'content-update-dialog',
    templateUrl: 'content-update-dialog.html',
})
export class ContentUpdateDialog {

    message : any;

    constructor(
        public dialogRef: MatDialogRef<ContentUpdateDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData: ContentDialogData,
        private teachService: TeachService) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    updateContent() {
        this.teachService.updateContent(this.dialogData.content,this.dialogData.content.id).subscribe(
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
    selector: 'content-delete-dialog',
    templateUrl: 'content-delete-dialog.html',
})
export class ContentDeleteDialog {

    message : any;

    constructor(
        public dialogRef: MatDialogRef<ContentDeleteDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData: ContentDialogData,
        private teachService: TeachService) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    onDeleteClick(): void {
        this.teachService.deleteContent(this.dialogData.content.id).subscribe(
            data => {
                this.message = data.message;
                console.log(data);
            }, error => {
                console.log(error);
            }
        );
    }



}


export interface ContentDialogData {
    content:Content;
    username:string;
    materialId:number;
}

