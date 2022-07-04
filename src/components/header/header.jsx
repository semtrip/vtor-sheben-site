import React from 'react';

import { Link } from 'react-router-dom';

import './header.scss'
import './adaptive.scss'


import config from '../../config';

const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="container">
                <div className="content">
                        <Link className="logo" to={'/'}></Link>
                        <div className="contact">
                            <div className="social">
                                <a className="item telegram" href={"https://t.me/" + config.telegram} target="_blank" rel="noopener noreferrer"></a>
                                <a className="item whatsapp" href={"https://wa.me/"+ config.whatsapp +"?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C."} target="_blank" rel="noopener noreferrer"></a>
                            </div>
                            <div className="info">
                                <div className="time">
                                    <span className="marker">•</span> 
                                    Звони {config.time}
                                </div>
                                <a className="number" href={'tel:'+ config.phone}>{config.phone}</a>
                                <a className="email" href={'mailto:'+config.email}>{config.email}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>  
     );
}
 
export default Header;