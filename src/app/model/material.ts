export class Material {

    id:number;
    title: string;
    description: string;
    image: string;
    dateCreated: Date;
    dateUpdated: Date;
    createdBy: String;
    status: number;
    contents: Content[];

}

export class Content {

    id: number;
    title: string;
    explanation: string;
    image: string;
    status: number;
    order: number;
    keywords: Keyword[];
    questions: Question[];

}

export class Keyword {
    id: number;
    title: string;
    label: string;
    url: string;
    description: string;
}


export class Question {
    id:number;
    questionText: string;
    order: number;
    options: Option[];
}


export class Option {
    id:number;
    optionText: string;
    isAnswer: boolean= false;
    order: number;
    status: number;
}

export class Answer {
    questionId:number;
    optionId:number;

}
