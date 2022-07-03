import React from "react";

import './main.scss'

const Main = () => {
    return (
        <React.Fragment>
            <div className="main">
                <div className="container content">
                    <span className="title">Вторичный бетонный щебень</span>
                    <span className="descriptor">напрямую от производителя</span>
                    <span className="offer">Мы поставляем качественный вторичный щебень разных фракций по низким ценам</span>
                    <div className="btns">
                        <div className="btn">Расчитать стоимость</div>
                        <div className="btn">Заказать звонок</div>
                    </div>
                </div>
            </div>
        </React.Fragment> 
    );
}
 
export default Main;