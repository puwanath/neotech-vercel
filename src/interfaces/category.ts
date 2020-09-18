import { ICustomFields } from './custom-fields';

// export interface IBaseCategory {
//     type: string;
//     id: number;
//     slug: string;
//     name: string;
//     image?: string;
//     items?: number;
//     parent?: this;
//     children?: this[];
//     customFields: ICustomFields;
// }


export interface IBaseCategory {
    cat_id: string;
    cat_id_main: string;
    cat_name_th: string;
    cat_name_en: string;
    cat_detail_th: string;
    cat_detail_en: string;
    cat_slug: string;
    cat_img?: string;
    cat_noimg?: string;
    seo_title?: string;
    seo_desc?: string;
    seo_keyword?: string;
    parent?: this;
    children?: this[];
    customFields: ICustomFields;
}



export interface IShopCategory extends IBaseCategory {
    type: 'shop';
}

export interface IBlogCategory extends IBaseCategory {
    type: 'blog';
}

export type ICategory = IShopCategory | IBlogCategory;
