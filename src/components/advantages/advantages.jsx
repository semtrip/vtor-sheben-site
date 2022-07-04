import React from 'react';

import './advantages.scss'
import './adaptive.scss'

const Advantages = () => {
    return ( 
        <React.Fragment>
            <div className="advantages">
                <div className="container">
                    <div className="content">
                        <div className="item">
                            <div className="ico cash"/>
                            <span>Любая форма оплаты</span>
                        </div>
                        <div className="item">
                            <div className="ico tfs"/>
                            <span>Доступная отгрузка 24/7</span>
                        </div>
                        <div className="item">
                            <div className="ico geo"/>
                            <span>Доставка и самовывоз</span>
                        </div>
                        <div className="item">
                            <div className="ico truck"/>
                            <span>Свой парк самосвалов</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> 
    );
}

export default Advantages;