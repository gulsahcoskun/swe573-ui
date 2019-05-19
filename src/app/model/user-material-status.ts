export class UserMaterialStatus {
    materialId: number;
    isCompleted:boolean;
    userContentStatusList:UserContentStatus[];
}


export class UserContentStatus {
    contentId: number;
    isCompleted: boolean;
}