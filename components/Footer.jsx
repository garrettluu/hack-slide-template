import React from 'react';
import {Footer} from 'mdx-deck';
import hackLogo from '../images/logo-with-text.svg';

const FooterHack = () => {
    return (
        <Footer>
            <img style={{width: 256, height: 'auto', float: 'right'}} src={hackLogo}/>
        </Footer>
    )
};

export default FooterHack;