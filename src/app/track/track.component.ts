import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {StudentTrackData, TeacherTrackData} from '../model/track-data';
import {TrackService} from '../services/track.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

    info: any;
    isLoggedIn = false;
    studentTrackData : Array<StudentTrackData> = new Array<StudentTrackData>();
    teacherTrackData : Array<TeacherTrackData> = new Array<TeacherTrackData>();
    studentMaterialNames : string[] = [];
    studentCompletionRatio :number[] = [];
    teacherMaterialNames : string[] = [];
    teacherStudentCounts :number[] = [];
    public pieChartType:string = 'pie';
    public colors = [
        {
            backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
        },
    ];

    constructor(private token: TokenStorageService, private trackService : TrackService,
                private router: Router) {
    }

    ngOnInit() {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
        if (this.token.getToken()) {
            this.isLoggedIn = true;
        }

        this.trackService.getStudentTrackData(this.info.username).subscribe(
            data => {
                this.studentTrackData = data;
                for(let trackData of this.studentTrackData){
                    this.studentMaterialNames.push(trackData.materialName);
                    this.studentCompletionRatio.push(trackData.completionRatio);
                }
            }, error => {
                console.log(error);
            }
        )

        this.trackService.getTeacherTrackData(this.info.username).subscribe(
            data => {
                this.teacherTrackData = data;
                for(let trackData of this.teacherTrackData){
                    this.teacherMaterialNames.push(trackData.materialName);
                    this.teacherStudentCounts.push(trackData.numberOfStudents);
                }
            }, error => {
                console.log(error);
            }
        )

    }



}
