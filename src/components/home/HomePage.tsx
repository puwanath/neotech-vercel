// react
import React, { useMemo } from 'react';
// third-party
import Head from 'next/head';
// blocks
import BlockBrands from '../blocks/BlockBrands';
import BlockSlideShow from '../blocks/BlockSlideShow';

// data stubs
import theme from '../../data/theme';


function HomePage() {


    return (
        <React.Fragment>
            <Head>
                <title>{`Home — ${theme.name}`}</title>
            </Head>

            {useMemo(() => <BlockSlideShow />, [])}

            {useMemo(() => <BlockBrands />, [])}
            

        </React.Fragment>
    );
}

export default HomePage;
