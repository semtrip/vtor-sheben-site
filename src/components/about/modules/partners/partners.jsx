import React from "react";
import './partners.scss'

function Partners() {
    return (
        <React.Fragment>
            <div className="partners">
                <div className="container">
                    <div className="content">
                        <div className="text">
                            <span className="title">Наши клиенты</span>
                            <span className="description">Ежемесячно мы поставляем более 50 000 тонн материалов для частных клиентов, бизнеса и государственных заказчиков</span>
                        </div>
                        <div className="items">
                            <div className="item">
                                <img src="partners_img/gazprom-logo-1-1536x755.png" alt="" />
                                <span>ОАО «Газпром»</span>
                            </div>
                            <div className="item">
                                <img src="partners_img/logo-lsr-1536x755.png" alt="" />
                                <span>ООО «ЛСР ГРУПП»</span>
                            </div>
                            <div className="item">
                                <img src="partners_img/scale_1200-1536x755.png" alt="" />
                                <span>ООО «МСУ-1»</span>
                            </div>
                            <div className="item">
                                <img src="partners_img/SLAVBETOM-1536x755.png" alt="" />
                                <span>ООО «СЛАВБЕТОН»</span>
                            </div>
                            <div className="item">
                                <img src="partners_img/WORLF-1536x755.png" alt="" />
                                <span>ООО «ВЛ КОРП»</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Partners;