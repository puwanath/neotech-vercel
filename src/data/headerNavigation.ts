import { INav } from '../interfaces/menus/nav';

import languages from '../i18n';
console.log(languages[0].locale);
// data stubs

const dataHeaderNavigation: INav = [
    {
        title: (languages[0].locale=='en'?'Home':'หน้าแรก'),
        url: '/',
    },
    {
        title: 'Products',
        url: '/products',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Categories', url: '/products/categories' },
                { title: 'Process', url: '/products/process' },
                { title: 'Application', url: '/products/application' },
                { title: 'Suppliers', url: '/products/suppliers' },
            ],
        },
    },
    { 
        title: 'Knowledge',
        url: '/knowledge',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Process', url: '/knowledge/process' },
                { title: 'Application', url: '/knowledge/application' },
            ],
        },
    },
    {
        title: 'News/Update',
        url: '/news-update',
    },
    {
        title: 'Suppliers',
        url: '',
        submenu:{
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 12,
                        links: []
                    }
                ]
            }
        }
    },
    {
        title: 'About us',
        url: '/about-us',
    },
    {
        title: 'Contact us',
        url: '/contact-us'
    },
];


export default dataHeaderNavigation;