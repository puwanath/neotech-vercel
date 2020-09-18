// react
import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import AppLink from '../components/shared/AppLink';
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
    const id = 'about-us';
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

const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 379,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function SitePageAboutUs({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    
    const intl = useIntl()
    return (
        <div className="block about-us">
            <Head>
                <title>{`${data.seo_title}`}</title>
                <meta name="Description" content={data.seo_desc} />
                <meta http-equiv="content-script-type" content="text/javascript" />
            </Head>

            <div className="about-us__image" style={{ backgroundImage: 'url("/images/aboutus.jpg")' }} />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                        <div className="about-us__body">
                             <h2 className="about-us__title">{(intl.locale=='th'?data.pagename_th:data.pagename_en)}</h2>
                            <div className="typography">
                            {renderHTML((intl.locale=='th'?data.pagedetail_th:data.pagedetail_th))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SitePageAboutUs;
