export default class Account {
    public id: string;
    public userName: string;
    public email: string;
    public companyName: string;

    constructor(id: string) {
        this.id = id;
    }
}