import React from "react"
import './benefit.scss'



const Benefit = () => {
    return (
        <React.Fragment>
        <div className="benefit">
            <div className="container">
                <div className="content">
                    <div className="text">
                        <div className="title">
                            Почему с нами выгодно
                            <span>Отличаемся от конкурентов отличным сервисом</span>
                        </div>
                        <p className="description">
                        Мы постоянно работаем над тем, чтобы отличаться от<br/>
                        конкурентов, для того чтобы давать своим клиентам большую<br/>
                        ценность за меньшую цену, а так же обеспечивать отличный сервис,<br/>
                        основанный на доверии и компетентности<br/>
                        </p>
                    </div>
                    <div className="items">
                        <div className="item">
                            <div className="ico distribution"/>
                            <span>Мы работаем  напрямую с более чем 40 производителями вторичного щебня</span>
                        </div>
                        <div className="item">
                            <div className="ico support"/>
                            <span>Доставка вторичного щебня от 3 часов в любую точку Москвы и Московской области после оплаты</span>
                        </div>
                        <div className="item">
                            <div className="ico handshake"/>
                            <span>Работаем как с частными клиентами, так и с юридическими лицами</span>
                        </div>
                        <div className="item">
                            <div className="ico accounting"/>
                            <span>Предоставляем все бухгалтерские документ</span>
                        </div>
                        <div className="item">
                            <div className="ico certificate"/>
                            <span>Сертификаты и паспорта качества на продукцию</span>
                        </div>
                        <div className="item">
                            <div className="ico id-card"/>
                            <span>Пропуска МКАД, ТТК, СД</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Benefit;