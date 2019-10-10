export interface AccountObj {
    id: string;
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
}

export default class Account {
    public id: string;
    public name: string;
    public email: string;
    public company: string;
    public phone: string;

    constructor(account: AccountObj) {
        this.id = account.id;
        this.name = account.name ? account.name : null;
        this.email = account.email ? account.email : null;
        this.company = account.company ? account.company : null;
        this.phone = account.phone ? account.phone : null;
    }
}