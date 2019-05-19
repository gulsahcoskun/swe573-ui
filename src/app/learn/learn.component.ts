import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {Material} from '../model/material';
import {SearchService} from '../services/search.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  info: any;
  completedMaterials : Array<Material>  = new Array<Material>();
  inProgressMaterials : Array<Material> = new Array<Material>();

    constructor(private token: TokenStorageService,private searchService: SearchService, private router: Router) {
    }

    ngOnInit() {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };

        this.searchService.getCompletedMaterials().subscribe(
            data => {
                this.completedMaterials = data;
            } , error => {
                console.log(error);
            }
        )

        this.searchService.getInProgressMaterials().subscribe(
            data => {
                this.inProgressMaterials = data;
            } , error => {
                console.log(error);
            }
        )

    }


    seeDetail(id:number){
        this.router.navigate(['detail',id]);
    }





}
