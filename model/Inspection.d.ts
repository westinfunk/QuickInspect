declare interface Inspection {
    id: string;
    general?: Array<Parameter>
    template?: Template;
    categories?: Array<Category>
}

declare interface Category {
    id: string;
    title: string;
    params?: Array<Parameter>;
    subcategories?: Array<Subcategory>;
}

declare interface Subcategory {
    id: string;
    title: string;
    description?: string;
    status?: string;
    params?: Array<Parameter>;
}

declare interface Parameter {
    id: string;
    title: string;
    value?: string;
}