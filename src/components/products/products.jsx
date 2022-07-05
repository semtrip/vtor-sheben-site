import React from "react"
import './products.scss'
import './adaptive.scss'

import productsArray from "./productsArray";
import Marquiz from "../Marquiz";
import MarquizWifget from "../MarquizWidget";


const Products = (props) => {
    return (
        <React.Fragment>
            <div className="products">
                <div className="container">
                    <div className="quiz" id="quiz_block">
                        <Marquiz/>
                    </div>
                    <div className="title">
                        <h2>Наша продукция</h2>
                        <span><i>*</i>Минимальный заказ <b>от 20 м³</b></span>
                    </div>
                    <div className="content">
                    {
                        productsArray.map((item, i)=>{
                            return(
                                <div className="cart" key={i}>
                                    <img src={`img_products/id${i+1}.png`} alt={item.title}/>
                                    <span className="с-title">{item.title}</span>
                                    <span className="descriptor">{item.descriptor}</span>
                                    <span className="price">от {item.price}₽/м³</span>
                                    <div className="btn" onClick={()=>{props.modal(true, {title: 'Заказать', description: 'Минимальный заказ 20м³', inputs: ['product', 'volume', 'name', 'number', 'adress'], value: {product: item.title + " " + item.descriptor}})}}>Расчет стоимости</div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <span className="info">Выше приведены средние цены с НДС для заказчиков без доставки от 20м³ до 1000м³.</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Products;