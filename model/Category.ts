import Subcategory from './Subcategory';

export default class Category {
    public id: string;
    public name: string;
    public subcategories: [Subcategory];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}