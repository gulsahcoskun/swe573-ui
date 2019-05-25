export class StudentTrackData {
    materialName : string;
    completionRatio : number;
    detailedTrackDataList: Array<DetailedTrackData>;
}

export class TeacherTrackData {
    materialName : string;
    numberOfStudents:number;
    detailedTrackDataList: Array<DetailedTrackData>;
}

export class DetailedTrackData{
    contentName: string;
    numberOfTry : number;
}

export class TrackElement {
    position: number;
    materialName: string;
    contentName: string;
    numberOfTry: number;
    successRatio : string;
}