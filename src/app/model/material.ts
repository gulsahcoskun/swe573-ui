export class Material {
    public title: string;
    public description: string;
    public image: string;
    public dateCreated: string;
    public dateUpdated: string;
    public createdBy: number;
    public status: string;
    public contents: Content[];

}

export class Content {
    title: string;
    explanation: string;
    image: string;
    status: number;
    order: number;
    keywords: Keyword[];
    questions: Question[];

}

export class Keyword {
    semantigTag: string;
    name: string;
    image: string;
    instanceOf: string;
    instanceId: string;
    status: number;


}


export class Question {
    questionText: string;
    order: number;
    options: Option[];

}


export class Option {
    optionText: string;
    isAnswer: boolean;
    order: number;
    status: number;

}
