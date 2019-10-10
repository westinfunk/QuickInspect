import Parameter from './Parameter';

export default class Subcategory {
    public id: string;
    public name: string;
    public params: [Parameter];

    constructor(id: string, name: string) {
        this.id = id;
    }
}