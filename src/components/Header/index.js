import React from 'react';

import myLogo from '../../assets/images/about/logo.svg'


function Header () {
    return (
        <a href="/">
         <img src={myLogo} className="my-2" style={{ width: "20%" }} alt="logo" />
    </a>

    );
}

export default Header;