// react
import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import PageHeader from '../components/shared/PageHeader';
import BlockMap from '../components/blocks/BlockMap';
import theme from '../data/theme';
import { FormattedMessage,useIntl } from 'react-intl';


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




function SitePageContactUs({ dataaddr }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const breadcrumb = [
        { title: 'Home', url: '/' },
        { title: 'Contacts', url: '' },
    ];

    const intl = useIntl()

    return (
        <React.Fragment>
            <Head>
                <title>{`Contact Us — ${(intl.locale=='th'?dataaddr.contact_name_th:dataaddr.contact_name_en)}`}</title>
            </Head>

            <BlockMap />

            <PageHeader header="Contact Us" breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="card mb-0">
                        <div className="card-body contact-us">
                            <div className="contact-us__container">
                                <div className="row">
                                    <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                                        <h4 className="contact-us__header card-title"><FormattedMessage id="topbar.ouraddress" defaultMessage="Our Address" /></h4>

                                        <div className="contact-us__address">
                                            <p>
                                                {(intl.locale=='th'?dataaddr.contact_name_th:dataaddr.contact_name_en)}
                                                <br />
                                                {(intl.locale=='th'?dataaddr.contact_address_th:dataaddr.contact_address_en)}
                                                <br />
                                                <FormattedMessage id="topbar.email" defaultMessage="Email" />: {dataaddr.contact_email}
                                                <br />
                                                <FormattedMessage id="topbar.phone" defaultMessage="Phone Namber" />: {(intl.locale=='th'?dataaddr.contact_tel_th:dataaddr.contact_tel_en)}
                                                <br />
                                                <FormattedMessage id="topbar.fax" defaultMessage="Fax" />: {dataaddr.contact_fax}
                                                <br />
                                                <FormattedMessage id="topbar.lineid" defaultMessage="Line ID" />: {dataaddr.contact_lineid}
                                                <br />
                                                <FormattedMessage id="topbar.website" defaultMessage="Website" />: {dataaddr.contact_website}
                                            </p>

                                            <p>
                                                {/* <strong>Opening Hours</strong>
                                                <br />
                                                Monday to Friday: 8am-8pm
                                                <br />
                                                Saturday: 8am-6pm
                                                <br />
                                                Sunday: 10am-4pm */}
                                            </p>

                                            <p>

                                                {/* <strong>Comment</strong>
                                                <br />
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Curabitur suscipit suscipit mi, non tempor
                                                nulla finibus eget. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. */}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <h4 className="contact-us__header card-title"><FormattedMessage id="topbar.leaveusamessage" defaultMessage="Leave us a Message" /></h4>

                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-name"><FormattedMessage id="topbar.yourname" defaultMessage="Your Name" /></label>
                                                    <input type="text" id="form-name" className="form-control" placeholder="Your Name" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email"><FormattedMessage id="topbar.email" defaultMessage="Email" /></label>
                                                    <input
                                                        type="email"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-subject"><FormattedMessage id="topbar.subject" defaultMessage="Subject" /></label>
                                                <input type="text" id="form-subject" className="form-control" placeholder="Subject" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-message"><FormattedMessage id="topbar.message" defaultMessage="Message" /></label>
                                                <textarea id="form-message" className="form-control" rows={4} />
                                            </div>
                                            <button type="submit" className="btn btn-primary"><FormattedMessage id="topbar.sendmessage" defaultMessage="Send Message" /></button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SitePageContactUs;

