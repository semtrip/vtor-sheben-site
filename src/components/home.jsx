import React, {useEffect} from "react";

import Main from "./main/main";
import Advantages from "./advantages/advantages";
import Products from "./products/products";
import About from "./about/about";
import Partners from "./about/modules/partners/partners";
import BlockForm from "./forms/block-form";
import Links from "./links/links";

function Home(props) {
    useEffect(() => {
        document.title = "Вторичный щебень (рецикл) с доставкой по Москве и МО - 24/7"
    });
    return (
        <>
            <Main modal={props.modal}/>
            <Advantages/>
            <Products modal={props.modal}/>
            <About/>
            <Partners/>
            <BlockForm/>
            <Links/>
        </>
    );
}

export default Home;