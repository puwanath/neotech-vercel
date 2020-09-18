// react
import React from 'react';

// third-party
import { GetServerSideProps } from 'next';

// application
import HomePage, { InitData } from '../components/home/HomePage';
import shopApi from '../api/shop';

export interface PageProps {
    initData?: InitData;
}


function Page(props: PageProps) {
    const { initData } = props;

    return <HomePage initData={initData} />;
}

export default Page;
