import React from "react";
import Carousel from 'react-elastic-carousel'

import './cars.scss'
import './adaptive.scss'

function Cars() {
    return (
        <React.Fragment>
            <div className="cars">
                <div className="container">
                    <div className="content">
                        <div className="text">
                            <div className="title">
                                Наш автопарк
                                <span> <b>&gt; 50 автомобилей</b> с высокой грузоподъёмностью</span>
                            </div>
                            <div className="description">
                                Располагаем внушительным парком собственного автотранспорта и карьерной техники, что позволяет снизить расходы клиента на доставку.
                            </div>
                        </div>
                        <div className="slider">
                            <Carousel itemsToShow={1} showArrows={false}>
                                <img src="cars_img/man.png" alt="Самосвал MAN" />
                                <img src="cars_img/kamaz.png" alt="Самосвал KAMAZ" />
                                <img src="cars_img/arocs.png" alt="Самосвал AROCS" />
                                <img src="cars_img/axor.png" alt="Самосвал AXOR" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Cars;