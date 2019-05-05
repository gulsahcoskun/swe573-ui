import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {SearchService} from '../services/search.service';
import {MaterialSummary} from '../model/material-summary';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    info: any;
    materials: Array<MaterialSummary>;

    constructor(private token: TokenStorageService, private searchService: SearchService) {
    }

    ngOnInit() {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };

        this.searchService.getAllMaterialSummaries().subscribe(
            data => {
                console.log(data);
                this.materials = data;
            }, error => {
                console.log(error);
            }
        );

    }


}
