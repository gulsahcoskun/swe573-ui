import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {TeachService} from '../../../services/teach.service';
import {SearchService} from '../../../services/search.service';
import {Content, Keyword, Option, Question} from '../../../model/material';
import {MaterialSummary} from '../../../model/material-summary';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

    info: any;
    public question: Question = new Question();
    contents: Array<Content> = new Array<Content>();
    materials: Array<MaterialSummary> = new Array<MaterialSummary>();
    optionList: Array<Option> = new Array<Option>();
    selectedMaterial: number;
    selectedContent: number;
    selectedOption: Option = new Option();
    message : any;


    constructor(private token: TokenStorageService, private teachService: TeachService, private searchService: SearchService) {
    }

    ngOnInit() {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };

        this.searchService.getCreatedByMaterials().subscribe(
            data => {
                this.materials = data;
            }, error => {
                console.log(error);
            }
        )
    }

    onChange() : void{
        this.searchService.getContentsByMaterial(this.selectedMaterial).subscribe(
            data => {
                this.contents = data;
            }, error => {
                console.log(error);
            }
        )
    }


    createQuestion() {
        this.question.options = this.optionList;
        console.log(this.question);

        this.teachService.createQuestion(this.question,this.selectedContent).subscribe(
            data => {
                console.log(data);
                this.message = data.message;
            }, error => {
                console.log(error);
            }
        )
    }

    addOption() {
        console.log(this.selectedOption);
        this.optionList.push(this.selectedOption);
        this.selectedOption = new Option();
    }



}
