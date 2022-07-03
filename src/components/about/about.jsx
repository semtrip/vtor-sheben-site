import React from "react";
import Benefit from "./modules/benefit/benefit";
import Map from "./modules/map/map";
import Cars from "./modules/cars/cars";
import Us from "./modules/us/us";

function About() {
    return (
        <React.Fragment>
            <Benefit/>
            <Map/>
            <Cars/>
            <Us/>
        </React.Fragment>
    );
}

export default About;