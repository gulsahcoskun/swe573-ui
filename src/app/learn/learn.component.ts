import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';


@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

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
