// react
import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// application
import AppLink from '../shared/AppLink';
import LogoSvg from '../../svg/logo.svg';
import NavPanel from './NavPanel';
import Search from './Search';
import Topbar from './Topbar';

export type HeaderLayout = 'compact';

export interface HeaderProps {
    layout?: HeaderLayout;
}

function Header(props: HeaderProps) {
    const { layout = 'compact' } = props;

    return (
        <div className="site-header">
            <Topbar />
            <div className="site-header__nav-panel">
                <NavPanel layout={layout} />
            </div>
        </div>
    );
}

export default React.memo(Header);
