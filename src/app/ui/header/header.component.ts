import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public roles: string[];
    public name: string;
    public authority: string;

    constructor(private tokenStorage: TokenStorageService) { }

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.name = this.tokenStorage.getUsername();
            this.roles.every(role => {
                this.authority = 'user';
                return true;
            });
        }
    }

    logout() {
        this.tokenStorage.signOut();
        window.location.reload();
    }

}
