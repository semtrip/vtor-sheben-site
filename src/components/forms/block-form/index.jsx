import React, {useRef, useState} from "react";
import './style.scss'

function BlockForm() {
    const input = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);

    const handleClick = (id) => {
        switch (id) {
            case 1:
                input.current.focus();
                break;
            case 2: 
                input2.current.focus();
                break;
            case 3: 
                input3.current.focus();
                break;
            default:
                break;
        }
      };
    return (
    <React.Fragment>
       <div className="form">
            <div className="container">
                <div className="content">
                    <div className="text">
                        <div className="title">
                            <span>Остались вопросы?</span>
                            <span>Мы ответим в течение 15 минут.<br/> Поможем с оформлением!</span>
                        </div>
                        <div className="description">
                            Или позвоните по номеру
                            <a className="number" href="tel:+79262520390">+7 (926) 252 03 90</a>
                        </div>
                    </div>
                    <div className="inputs">
                        <div className="input" onClick={()=>{handleClick(1)}}>
                            <span>Имя <b>*</b></span>
                            <input type="text" ref={input}/>
                        </div>
                        <div className="input"  onClick={()=>{handleClick(2)}}>
                            <span>Имя <b>*</b></span>
                            <input type="text" ref={input2}/>
                        </div>
                        <div className="input area"  onClick={()=>{handleClick(3)}}>
                            <span>Сообщение</span>
                            <textarea name="" id="" cols="30" rows="10" ref={input3}/>
                        </div>
                        <input type="checkbox" class="custom-checkbox" id="politics" name="politics" value="yes"/>
                        <label for="politics">Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных *</label>
                        <div className="btn">Отправить</div>
                    </div>
                </div>
            </div>
       </div>
    </React.Fragment>
    );
}

export default BlockForm;