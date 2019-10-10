import Category from './Category';
import Parameter from './Parameter';
import Template from './Template';

export default class Inspection {
    public id: string;
    public details: [Parameter];
    public template: Template;
    public categories: [Category];

    constructor(id: string, template: Template) {
        this.id = id;
        this.template = template;
    }

    
}