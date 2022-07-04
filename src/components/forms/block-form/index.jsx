import React, {useRef, useState} from "react";
import config from "../../../config";
import '../style.scss'
import '../adaptive.scss'

function BlockForm() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const [checkBox, setChekBox] = useState(true);

    const [errorName, setErrorName] = useState(false);
    const [errorNumber, setErrorNumber] = useState(false);


    const [contactId, setContactId] = useState(0);

    const [success, setSuccess] = useState(false)


    const checkForm = () => {

        setErrorName(false)
        setErrorNumber(false)

        function check() {
            let flag = true

            if (name === '' && name.length === 0) {
                console.log('name: error')
                setErrorName(true)
                flag = false
            } else {
                setErrorName(false)
            }
        
            if (number === '' && number.length === 0) {
                console.log('number: error')
                setErrorNumber(true)
                flag = false
            } else {
                setErrorNumber(false)
            }
            
            return flag
        }

        if(check()) {
            if (checkBox) {
                console.log(name, number, message)
                    if(contactId !== 0) {
                        dealCreate(`FIELDS[CONTACT_ID]=${contactId}&FIELDS[CATEGORY_ID]=${config.CATEGORY_ID}&FIELDS[TITLE]=${'Форма задать вопрос: ' + config.sitiName}&FIELDS[${config.pole_name}]=${name}&FIELDS[${config.pole_phone}]=${number}`)
                    } else {
                        contactCreate(`FIELDS[NAME]=${name}&FIELDS[PHONE][0][VALUE]=${number}&FIELDS[PHONE][0][VALUE_TYPE]=WORK`, `FIELDS[CATEGORY_ID]=${config.CATEGORY_ID}&FIELDS[TITLE]=${'ФФорма задать вопрос: ' + config.sitiName}&FIELDS[${config.pole_name}]=${name}&FIELDS[${config.pole_phone}]=${number}&FIELDS[COMMENTS]=${message}`)
                    }
                
            }
        }
    }

    const dealCreate = (params) => {
        fetch(`${config.bitrix24WebHook}/crm.deal.add.json?${params}`)
        .then(res => res.json())
        .then(
            (result) => {
                if(result) {
                    setSuccess(true)
                }
            },
            (error) => {
            }
        )
}
    const contactCreate = (params, params2) => {
        fetch(`${config.bitrix24WebHook}/crm.contact.add.json?${params}`)
        .then(res => res.json())
        .then(
            (result) => {
                setContactId(result.result)
                dealCreate(`FIELDS[CONTACT_ID]=${result.result}&` + params2)
            },
            (error) => {
            }
        )
    }


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
    <div className="formBlock">
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
                    {
                        !success ?
                        <>
                            <div className={errorName ? 'input error': 'input'} onClick={()=>{handleClick(1)}}>
                                <span>Имя <b>*</b></span>
                                <input type="text" ref={input} value={name} onChange={event => {setName(event.target.value)}}/>
                            </div>
                            <div className={errorNumber ? 'input error': 'input'}  onClick={()=>{handleClick(2)}}>
                                <span>Телефон <b>*</b></span>
                                <input type="phone" ref={input2} value={number} onChange={event => {setNumber(event.target.value)}}/>
                            </div>
                            <div className="input area"  onClick={()=>{handleClick(3)}}>
                                <span>Сообщение</span>
                                <textarea name="" id="" cols="30" rows="10" ref={input3} value={message} onChange={event => {setMessage(event.target.value)}}/>
                            </div>
                            <input type="checkbox" className="custom-checkbox" id="politics" name="politics" value="yes" defaultChecked onChange={()=>{setChekBox(!checkBox)}}/>
                            <label htmlFor="politics">Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных *</label>
                            {
                                !checkBox ?
                                <div className="checkBoxError">Потвердите согласие на отправку данных</div>
                                :null
                            }
                            <div className="btn" onClick={checkForm}>Отправить</div>
                        </>
                        : 
                        <div className="success">
                            <div className="ico"/>
                            <span>Мы приняли вашу заявку!</span>
                            <p>Скоро наш менеджер свяжится с вами.</p>
                        </div>
                    }

                    </div>
                </div>
            </div>
       </div>
    </div>
    </React.Fragment>
    );
}

export default BlockForm;