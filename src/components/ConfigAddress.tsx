import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import theme from '../data/theme';
import { FormattedMessage,useIntl } from 'react-intl';
import Head from 'next/head';

type Data = {
    contact_name_th: string;
    contact_name_en: string;
    contact_address_th: string;
    contact_address_en: string;
    contact_tel_th: string;
    contact_tel_en: string;
    contact_fax: string;
    contact_email: string;
    contact_lineid: string;
    contact_facebook: string;
    contact_facebook_chat: string;
    contact_website: string;
    contact_location_name: string;
}

export const getServerSideProps: GetServerSideProps = async ({
    params,
    res
}) => {
// const {id} = params;
    try{
    
        const result = await fetch(theme.apiurl+`/home?select=getcontactinfo&lang=th`);
        const dataaddr: Data = await result.json();
        
        return {
            props : { dataaddr }
        };
    } catch {
        res.statusCode = 404
        return {
            props: {}
        }
    }

}

function ConfigAddress({ dataaddr }: InferGetServerSidePropsType<typeof getServerSideProps>){

    return {dataaddr}

}

export default ConfigAddress;