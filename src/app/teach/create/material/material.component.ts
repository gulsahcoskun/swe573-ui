import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {TeachService} from '../../../services/teach.service';

@Component({
    selector: 'app-material',
    templateUrl: './material.component.html',
    styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
    data: any = {};
    info: any;
    message : any;

    constructor(private token: TokenStorageService,private teachService: TeachService) {
    }

    ngOnInit() {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    }


    onSubmit() {
        this.data.createdBy = this.info.username;
        this.teachService.createMaterial(this.data).subscribe(
            data => {
                console.log(data);
                this.message = data.message;
            }, error => {
                console.log(error);
            }
        );
        //this.cleanFields();
    }

    cleanFields() : void{
        this.data.title = null;
        this.data.description = null;
        this.data.image = null;
    }

}
