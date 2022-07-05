import React from "react";
import './map.scss'
import './adaptive.scss'


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
                        <div id="map" className="mapBlock">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A52e31760726ea3b5d9fd344c9834489a171b626327c867249e6559ac6310a8df&amp;source=constructor" width="100%" height="600" frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
       </React.Fragment>
    );
}

export default Map;