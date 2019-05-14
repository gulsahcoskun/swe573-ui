export class MaterialSummary {
    materialId: number;
    image: string;
    materialName: string;
    keywordList: string[];
    description: string;
    createdBy: string;
    detail: string;

    constructor(materialId: number, image: string, materialName: string, keywordList: string[],
                description: string, createdBy: string, detail: string) {
       this.materialId = materialId;
       this.materialName = materialName;
       this.createdBy = createdBy;
       this.description = description;
       this.image = image;
       this.keywordList = keywordList;
       this.detail = detail;
    }
}