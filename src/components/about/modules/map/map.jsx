import React from "react";
import './map.scss'


function Map() {
    return (
       <React.Fragment>
            <div className="map">
                <div className="container">
                    <div className="content">
                        <div className="text">
                            <span className="title">Площадки для самовывоза вторичного бетонного щебня</span>
                            <div className="description">
                                <p>У нашей компании более 52 производственных площадок, находящимися в разных местах Москвы и Московской области, благодаря этому мы можем подобрать Вам любой объём вторичного щебня с наиболее быстрым способом доставки за минимальные цены.</p>
                                <p>Если же Вы хотите забрать вторичный щебень самовывозом, то ниже представлены карта Москвы и Московской области с расположением складов продукции.</p>
                            </div>
                        </div>
                        <div id="map"></div>
                    </div>
                </div>
            </div>
       </React.Fragment>
    );
}

export default Map;