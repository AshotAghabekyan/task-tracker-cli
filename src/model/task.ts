

export class Task {
    static idCount: number = 0;
    public title: string;
    public status: number = 0
    public id: number = Date.now();

    constructor(title: string) {
        this.title = title;
    }
}