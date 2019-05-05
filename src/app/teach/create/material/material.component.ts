import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../auth/token-storage.service';

@Component({
    selector: 'app-material',
    templateUrl: './material.component.html',
    styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
    data: any = {};
    info: any;

    constructor(private token: TokenStorageService) {
    }

    ngOnInit() {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    }


    onSubmit() {
        alert(JSON.stringify(this.data));
    }

}
