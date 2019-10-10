export interface ParamObj {
    id: string;
    title: string;
    value?: string;
}

export default class Parameter {
    public id: string;
    public title: string;
    public value?: string;

    constructor(param: ParamObj) {
        this.id = param.id;
        this.title = param.title;
        this.value = param.value ? param.value : null;
    }

    public setValue(value: string): void {
        this.value = value;
    }

    public getValue(): string | null {
        if (this.value) {
            return this.value;
        } else {
            return null;
        }
    }

    public rename(title: string): void {
        this.title = title;
    }
}