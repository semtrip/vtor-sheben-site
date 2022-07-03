import React from "react"
import './products.scss'

import productsArray from "./productsArray";



const Products = () => {
    return (
        <React.Fragment>
            <div className="products">
                <div className="container">
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
                                    <span className="title">{item.title}</span>
                                    <span className="descriptor">{item.descriptor}</span>
                                    <span className="price">от {item.price}₽/м³</span>
                                    <div className="btn">Расчет стоимости</div>
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