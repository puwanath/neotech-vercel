import React, { FunctionComponent } from 'react';

// application
import FooterContacts from './FooterContacts';
import FooterNewsletter from './FooterNewsletter';
import ToTop from './ToTop';

// third-party
import { FormattedMessage } from 'react-intl';

// data stubs
import theme from '../../data/theme';

import AppLink from '../shared/AppLink';
import { ILink } from '../../interfaces/menus/link';

const Footer: FunctionComponent = () => {
    const informationLinks = [
        { title: <FormattedMessage id="topbar.aboutUs" defaultMessage="About Us" />, url: '/about-us' },
        { title: <FormattedMessage id="topbar.privacy" defaultMessage="Privacy Policy" />, url: '/privacy-policy' },
        { title: <FormattedMessage id="topbar.suppliers" defaultMessage="Suppliers" />, url: '/products/suppliers' },
        { title: <FormattedMessage id="topbar.categories" defaultMessage="Categories" />, url: '/products/categories' },
        { title: <FormattedMessage id="topbar.knowledge" defaultMessage="Knowledge" />, url: '/knowledge' },
        { title: <FormattedMessage id="topbar.news" defaultMessage="News" />, url: '/news' },
        { title: <FormattedMessage id="topbar.contacts" defaultMessage="Contact us" />, url: '/contact-us' }
    ];


    const linksList = informationLinks && informationLinks.map((item, index) => (
        <li key={index} className="footer-links__item">
            <AppLink href={item.url} className="footer-links__link">
                {item.title}
            </AppLink>
        </li>
    ));

    return (
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__widgets">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <FooterContacts />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="site-footer__widget footer-links">
                                <h5 className="footer-links__title"><FormattedMessage id="topbar.information" defaultMessage="Information" /></h5>
                                <ul className="footer-links__list">
                                    {linksList}
                                </ul>
                            </div>
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
