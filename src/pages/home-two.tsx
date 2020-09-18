// react
import React from 'react';

// third-party
import { GetServerSideProps } from 'next';

// application
import HomePage, { InitData } from '../components/home/HomePage';
// import shopApi from '../api/shop';
import neoApi from '../api/neoapi';


export interface PageProps {
    initData?: InitData;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => ({
    props: {
        initData: {
            categoryLists: await neoApi.getCategoryLists({ limit:2 }),
            featuredProducts: await neoApi.getPopularProducts({ limit: 12 }),
        },
    },
})


function Page(props: PageProps) {
    const { initData } = props;
    
    return <HomePage initData={initData} />;
}

export default Page;
