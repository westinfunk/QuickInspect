import _ from 'lodash';
import Parameter, { ParamObj } from './Parameter';

export interface SubcategoryObj {
    id: string;
    name: string;
    params: Array<ParamObj>;
}

export default class Subcategory {
    public id: string;
    public name: string;
    public params: Array<Parameter>;

    constructor(subcategory: SubcategoryObj) {
        this.id = subcategory.id;
        this.name = subcategory.name;
        this.params = subcategory.params.map(param => new Parameter(param));
    }

    public removeParam(paramId: string): void {
        _.remove(this.params, (param) => paramId == param.id);
    }

    public addParam(title: string): void {
        const id = "Parameter-" + Date.now();
        const param = new Parameter({id, title});
        this.params.push(param);
    }
}