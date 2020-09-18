import qs from 'query-string';
import { getCategories, getCategoryBySlug } from '../fake-server/endpoints/categories';
import { IShopCategory } from '../interfaces/category';
import { IProduct, IProductsList } from '../interfaces/product';
import { IFilterValues, IListOptions } from '../interfaces/list';
import {
    getPopularProducts,
    getProductBySlug,
    getProductsList,
    getSuggestions,
    getCategoryLists,
} from '../fake-server/endpoints/products';
import theme from '../data/theme';

export interface GetCategoriesOptions {
    depth?: number;
}

export interface GetCategoryBySlugOptions {
    depth?: number;
}

export interface GetProductsOptions {
    limit?: number;
    category?: string;
}

export type GetSuggestionsOptions = {
    limit?: number;
    category?: string;
};

export type GetCategoryLists = {
    limit?: number;
    category?: string;
};

const neoApi = {
    /**
     * Returns array of categories.
     */
    getCategories: (options: GetCategoriesOptions = {}): Promise<IShopCategory[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/categories.json?depth=2
         *
         * where:
         * - 2 = options.depth
         */
        return fetch(theme.apiurl+`/home/?select=getcategory&${qs.stringify(options)}`)
            .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        // return getCategories(options);
    },
    getCategoryLists: (options: GetCategoryLists = {}): Promise<IShopCategory[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/categories.json?depth=2
         *
         * where:
         * - 2 = options.depth
         */
        return fetch(theme.apiurl+`/home/?select=getcategory&${qs.stringify(options)}`)
            .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        // return getCategories(options);
    },
    getPopularProducts: (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/popular-products.json?limit=3&category=power-tools
         *
         * where:
         * - 3           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/popular-products.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getPopularProducts(options);
    },
}


export default neoApi;