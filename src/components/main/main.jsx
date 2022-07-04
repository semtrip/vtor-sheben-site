import React from "react";

import './main.scss'
import './adaptive.scss'

import config from "../../config";

const Main = (props) => {

    return (
        <React.Fragment>
            <div className="main">
                <div className="container content">
                    <h1 className="title">{config.title}</h1>
                    <h2 className="descriptor">{config.descriptor}</h2>
                    <span className="offer">{config.offer}</span>
                    <div className="btns">
                        <div className="btn" onClick={()=>{window.Marquiz.showModal('61115c5c12e050003e77c479')}}>Расчитать стоимость</div>
                        <div className="btn" onClick={()=>{props.modal(true,{title: 'Обратная связь', description: 'Оставьте свой номер и мы Вам перезвоним', inputs: ['name', 'number']})}}>Заказать звонок</div>
                    </div>
                </div>
            </div>
        </React.Fragment> 
    );
}
 
export default Main;