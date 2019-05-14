import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';

@Component({
    selector: 'app-create-multi-steps',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
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

}