export interface AccountObj {
    id: string;
    userName?: string;
    email?: string;
    companyName?: string;
}

export default class Account {
    public id: string;
    public userName: string;
    public email: string;
    public companyName: string;

    constructor(account: AccountObj) {
        this.id = account.id;
        this.userName = account.userName ? account.userName : null;
        this.email = account.email ? account.email : null;
        this.companyName = account.companyName ? account.companyName : null;
    }
}