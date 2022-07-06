import React, {useEffect, useState} from "react";

import {
  withRouter
} from "react-router-dom"


import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import './assets/scss/global.scss'
import Home from "./components/home";
import Privacy from "./components/privacy/privacy";
import FormModal from "./components/forms/modal";

function App(props) {
  const { history } = props
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState({})

  function modal(active, data) {
    setModalActive(active)
    setModalData(data)
  }
  return (
    
      <React.Fragment>
        <Header/>
        {
          history.location.pathname === '/privacy' ?
            <Privacy/>
            :
            <>
              <Home modal={modal}/>
              <FormModal active={modalActive} setActive={setModalActive} data={modalData}/>  
            </>
        }
        <Footer/> 
      </React.Fragment>
    
  )
}



export default withRouter(App);
