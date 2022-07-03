import React from 'react';

import './header.scss'

const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="container">
                <div className="content">
                    <div className="logo"/>
                        <div className="contact">
                            <div className="social">
                                <div className="item telegram"></div>
                                <div className="item whatsapp"></div>
                            </div>
                            <div className="info">
                                <div className="time"><span className="marker">•</span> Звони Пн-Вс 8:00 — 23:00</div>
                                <a className="number" href="tel:+79262520390">+7 (926) 252 03 90</a>
                                <a className="email" href="mailto:info@nk-granit.ru">info@втор-щебень.рф</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>  
     );
}
 
export default Header;