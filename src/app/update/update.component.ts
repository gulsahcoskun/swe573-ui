import {Component, Inject, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {TeachService} from '../services/teach.service';
import {SearchService} from '../services/search.service';
import {Material} from '../model/material';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    info: any;
    createdMaterials:Array<Material>  = new Array<Material>();
    material : Material = new Material();


    constructor(private token: TokenStorageService,
                private teachService: TeachService,
                private searchService: SearchService,
                private router: Router,public dialog: MatDialog) {
    }

    ngOnInit() {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };

        this.searchService.getCreatedByMaterials().subscribe(
            data => {
                this.createdMaterials = data;
            },error => {
                console.log(error);
            }
        )
    }

    seeDetail(id:number){
        this.router.navigate(['update/material',id]);
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(MaterialAddDialog, {
            width: '500px',
            data: {username: this.info.username,
                material: this.material}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Material added');
            this.material = result;
        });
    }

    openEditDialog(material:Material): void {
        const dialogRef = this.dialog.open(MaterialUpdateDialog, {
            width: '500px',
            data: {username: this.info.username,
                material: material}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Material edited');
            this.material = result;
        });
    }

    openDeleteDialog(material:Material): void {
        const dialogRef = this.dialog.open(MaterialDeleteDialog, {
            width: '300px',
            data: {username: this.info.username,
                material: material}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Material deleted');
        });
    }
}



@Component({
    selector: 'material-add-dialog',
    templateUrl: 'material-add-dialog.html',
})
export class MaterialAddDialog {

    constructor(
        public dialogRef: MatDialogRef<MaterialAddDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData: MaterialDialogData,
        private teachService: TeachService) {}

    data: any = {};
    message : any;

    onNoClick(): void {
        this.dialogRef.close();
    }


    onSubmit() {
        this.data.createdBy = this.dialogData.username;
        this.teachService.createMaterial(this.data).subscribe(
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
    selector: 'material-update-dialog',
    templateUrl: 'material-update-dialog.html',
})
export class MaterialUpdateDialog {

    message : any;

    constructor(
        public dialogRef: MatDialogRef<MaterialUpdateDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData: MaterialDialogData,
        private teachService: TeachService) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit() {
        this.teachService.updateMaterial(this.dialogData.material,this.dialogData.material.id).subscribe(
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
    selector: 'material-delete-dialog',
    templateUrl: 'material-delete-dialog.html',
})
export class MaterialDeleteDialog {

    message : any;

    constructor(
        public dialogRef: MatDialogRef<MaterialDeleteDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData: MaterialDialogData,
        private teachService: TeachService) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    onDeleteClick(): void {
        this.teachService.deleteMaterial(this.dialogData.material.id).subscribe(
            data => {
                this.message = data.message;
                console.log(data);
            }, error => {
                console.log(error);
            }
        );
    }



}


export interface MaterialDialogData {
    material:Material;
    username:string;
}