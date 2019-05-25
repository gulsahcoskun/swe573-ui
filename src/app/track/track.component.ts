import {Component, OnInit, ViewChild} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {StudentTrackData, TeacherTrackData, TrackElement} from '../model/track-data';
import {TrackService} from '../services/track.service';
import {Router} from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';


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
    studentDisplayedColumns : string[] = ['position','materialName','contentName','numberOfTry', 'successRatio'];
    studentDetailedList : TrackElement[] = [];
    teacherDetailedList : TrackElement[] = [];
    studentDataSource : any;
    teacherDataSource : any;

    public pieChartType:string = 'pie';
    public colors = [
        {
            backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
        },
    ];


    @ViewChild(MatPaginator) paginator: MatPaginator;


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
                let position : number  = 1;
                for(let trackData of this.studentTrackData){
                    this.studentMaterialNames.push(trackData.materialName);
                    this.studentCompletionRatio.push(trackData.completionRatio);
                    for(let detailedData of trackData.detailedTrackDataList){
                        let trackElement : TrackElement = new TrackElement();
                        trackElement.materialName = trackData.materialName;
                        trackElement.contentName = detailedData.contentName;
                        trackElement.numberOfTry = detailedData.numberOfTry;
                        trackElement.position = position;
                        if(detailedData.numberOfTry != 0){
                            trackElement.successRatio = (100 / detailedData.numberOfTry).toFixed(2) + '%';

                        }
                        this.studentDetailedList.push(trackElement);
                        position ++;
                    }
                }
                this.studentDataSource = new MatTableDataSource<TrackElement>(this.studentDetailedList);
            }, error => {
                console.log(error);
            }
        )

        this.trackService.getTeacherTrackData(this.info.username).subscribe(
            data => {
                this.teacherTrackData = data;
                let position : number  = 1;
                for(let trackData of this.teacherTrackData){
                    this.teacherMaterialNames.push(trackData.materialName);
                    this.teacherStudentCounts.push(trackData.numberOfStudents);

                    for(let detailedData of trackData.detailedTrackDataList){
                        let trackElement : TrackElement = new TrackElement();
                        trackElement.materialName = trackData.materialName;
                        trackElement.contentName = detailedData.contentName;
                        trackElement.position = position;
                        if(detailedData.numberOfTry != null && detailedData.numberOfTry != 0){
                            trackElement.numberOfTry = detailedData.numberOfTry;
                            trackElement.successRatio = (100 / detailedData.numberOfTry).toFixed(2) + '%';
                        } else {
                            trackElement.numberOfTry = 0;
                            trackElement.successRatio = '0%';
                        }
                        this.teacherDetailedList.push(trackElement);
                        position ++;
                    }
                }
                this.teacherDataSource = new MatTableDataSource<TrackElement>(this.teacherDetailedList);
                this.teacherDataSource.paginator = this.paginator;
            }, error => {
                console.log(error);
            }
        )

    }

    applyFilter(filterValue: string) {
        this.studentDataSource.filter = filterValue.trim().toLowerCase();
        this.teacherDataSource.filter = filterValue.trim().toLowerCase();
    }



}
