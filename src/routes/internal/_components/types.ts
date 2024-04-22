export type Item = {
    title: string;
    url: string;
    subItems?: Item[];
    icon?: any,
};

export type Items = Item[]