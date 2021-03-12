import React from 'react';

import s from './Header.module.css';

function Header() {
    return (
        <div className={s.header}>
           <div className={s.icon}><img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png'/></div>
          <div className={s.companyname}> PHOENIX </div>
        </div>
    );
}

export default Header;
