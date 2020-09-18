// react
import React, { useMemo } from 'react';

// third-party
import Head from 'next/head';

// application
import shopApi from '../../api/shop';
import { IProduct } from '../../interfaces/product';
import { useDeferredData, useProductColumns, useProductTabs } from '../../services/hooks';

// blocks
import BlockBanner from '../blocks/BlockBanner';
import BlockBrands from '../blocks/BlockBrands';
import BlockCategories from '../blocks/BlockCategories';
import BlockFeatures from '../blocks/BlockFeatures';
import BlockPosts from '../blocks/BlockPosts';
import BlockProductColumns, { BlockProductColumnsItem } from '../blocks/BlockProductColumns';
import BlockProducts from '../blocks/BlockProducts';
import BlockProductsCarousel from '../blocks/BlockProductsCarousel';
import BlockSlideShow from '../blocks/BlockSlideShow';

// data stubs
import dataBlogPosts from '../../data/blogPosts';
import dataShopBlockCategories from '../../data/shopBlockCategories';
import theme from '../../data/theme';

export interface InitData {
    featuredProducts?: IProduct[];
    bestsellers?: IProduct[];
    latestProducts?: IProduct[];
    productColumns?: BlockProductColumnsItem[];
}

export interface HomePageProps {
    initData?: InitData;
}

function HomePage(props: HomePageProps) {
    const { initData } = props;


    return (
        <React.Fragment>
            <Head>
                <title>{`Home — ${theme.name}`}</title>
            </Head>

            {useMemo(() => <BlockSlideShow />, [])}

            {useMemo(() => <BlockBrands />, [])}

            {/* {useMemo(() => (
                <BlockCategories
                    title="Popular Categories"
                    layout="compact"
                    categories={dataShopBlockCategories}
                />
            ), [])}


            {useMemo(() => <BlockPosts title="Latest News" layout="grid-nl" posts={dataBlogPosts} />, [])} */}

            

        </React.Fragment>
    );
}

export default HomePage;
