import React from "react";
import './footer.scss'
function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
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
            <div className="info">
                <div className="container">
                    <div className="content">
                        <span>2022 © ООО «Нерудная Компания»</span>
                        <span>ИНН 5003140340, ОГРН 1205000062321</span>
                        <span>Политика конфиденциальности</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;