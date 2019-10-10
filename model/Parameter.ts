export default class Parameter {
    public id: string;
    public title: string;
    public value?: string;

    constructor(id: string, title: string) {
        this.id = id;
        this.title = title;
        this.value = null;
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

    public rename(name: string): void {
        this.title = name;
    }
}