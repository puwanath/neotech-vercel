import React, { FunctionComponent } from 'react';

// application
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';
import ToTop from './ToTop';

// data stubs
import theme from '../../data/theme';

const Footer: FunctionComponent = () => {
    const informationLinks = [
        { title: 'About Us', url: '' },
        { title: 'Delivery Information', url: '' },
        { title: 'Privacy Policy', url: '' },
        { title: 'Brands', url: '' },
        { title: 'Contact Us', url: '' },
        { title: 'Returns', url: '' },
        { title: 'Site Map', url: '' },
    ];


    return (
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__widgets">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <FooterContacts />
                        </div>
                        <div className="col-12 col-md-6 col-lg-2">
                            <FooterLinks title="Information" items={informationLinks} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <FooterNewsletter />
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__copyright">
                        Powered by
                        {' '}
                        <a href="" rel="noopener noreferrer" target="_blank">Neo Tech</a>
                        {' '}
                        — Design by
                        {' '}
                        <a href={theme.author.profile_url} target="_blank" rel="noopener noreferrer">
                            {theme.author.name}
                        </a>
                    </div>
                    <div className="site-footer__payments">
                    </div>
                </div>
            </div>
            <ToTop />
        </div>
    );
};

export default Footer;
