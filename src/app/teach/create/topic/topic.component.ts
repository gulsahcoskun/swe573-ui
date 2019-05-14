import {Component, Inject, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {Content, Keyword, Material, Option, Question} from '../../../model/material';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {SearchService} from '../../../services/search.service';
import {TeachService} from '../../../services/teach.service';
import {MaterialSummary} from '../../../model/material-summary';

@Component({
    selector: 'app-topic',
    templateUrl: './topic.component.html',
    styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

    private content: Content = new Content();
    info: any;
    wikis: Array<Keyword> = new Array<Keyword>();
    selectedKeyword: Keyword = new Keyword();
    keywordList: Array<Keyword> = new Array<Keyword>();
    materials: Array<MaterialSummary> = new Array<MaterialSummary>();
    selectedMaterial: number;
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

    createTopic() {
        this.content.keywords = this.keywordList;
        this.content.status = 1;
        console.log(this.content);

        this.teachService.createContent(this.content,this.selectedMaterial).subscribe(
            data => {
                console.log(data);
                this.message = data.message;
            }, error => {
                console.log(error);
            }
        )
    }

    searchWiki(keyword: string) {
        this.teachService.searchWiki(keyword).subscribe(
            data => {
                console.log(data);
                this.wikis = data;
            }, error => {
                console.log(error);
            }
        );
        console.log(keyword + ' selected');
    }

    addKeyword() {
        console.log(this.selectedKeyword);
        this.keywordList.push(this.selectedKeyword);
    }

}