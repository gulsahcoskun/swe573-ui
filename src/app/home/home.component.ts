import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {SearchService} from '../services/search.service';
import {MaterialSummary} from '../model/material-summary';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    info: any;
    materials: Array<MaterialSummary> = new Array<MaterialSummary>();
    searchKey: string;
    searchMessage: string = 'Material you are looking for cannot be found.';

    constructor(private token: TokenStorageService, private searchService: SearchService, private router: Router) {
    }

    ngOnInit() {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };

        this.searchService.getAllMaterialSummaries(this.info.username).subscribe(
            data => {
                console.log(data);
                this.materials = data;
            }, error => {
                console.log(error);
            }
        );

    }

    searchMaterialsByKeyword() {
        if (this.searchKey != null) {
            this.searchService.searchMaterials(this.searchKey).subscribe(
                data => {
                    this.materials = data;
                }, error => {
                    console.log(error);
                }
            );
        }
    }


    seeDetail(id:number){
        this.router.navigate(['detail',id]);
    }


}
