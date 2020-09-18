import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import AppLink from '../components/shared/AppLink';
import PageHeader from '../components/shared/PageHeader';
import StroykaSlick from '../components/shared/StroykaSlick';
import url from '../services/url';
import theme from '../data/theme';
import { FormattedMessage,useIntl } from 'react-intl';
import renderHTML from 'react-html-parser'; 

type Data = {
    pageid?: any;
    slug?: any;
    pagename_th?: any;
    pagename_en?: any;
    pagedetail_th: string;
    pagedetail_en: string;
    pageimg: string;
    pagenoimg: string;
    seo_title?: any;
    seo_desc?: any;
    showmenu?: any;
    rating?: any;
}


export const getServerSideProps: GetServerSideProps = async ({
    params,
    res
}) => {
    const id = 'privacy-policy';
    try{
    
        const result = await fetch(theme.apiurl+`/home?select=getpagesbyslug&slug=${id}`);
        const data: Data = await result.json();
        
        return {
            props : { data }
        };
    } catch {
        res.statusCode = 404
        return {
            props: {}
        }
    }

}


function SitePageTerms({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const breadcrumb = [
        { title: 'Home', url: '' },
        { title: 'Privacy and policy', url: '' },
    ];
    const intl = useIntl()
    return (
        <React.Fragment>
            <Head>
                <title>{`${data.seo_title}`}</title>
                <meta name="Description" content={data.seo_desc} />
                <meta http-equiv="content-script-type" content="text/javascript" />
            </Head>

            <PageHeader breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="document">
                        <div className="document__header">
                            <h2 className="document__title">{(intl.locale=='th'?data.pagename_th:data.pagename_en)}</h2>
                            <div className="document__subtitle"></div>
                        </div>
                        <div className="document__content typography">
                        {renderHTML((intl.locale=='th'?data.pagedetail_th:data.pagedetail_th))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SitePageTerms;
