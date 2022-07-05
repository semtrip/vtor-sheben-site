import React, {useRef, useState, useEffect} from "react";
import InputMask from 'react-input-mask';

import config from "../../../config";
import '../style.scss'

function PhoneInput(props) {
    return (
      <InputMask 
        mask='+7(999)999-99-99' 
        value={props.value} 
        onChange={props.onChange}
        type={'phone'}
        autocomplete={"off"}>
      </InputMask>
    );
}

function FormModal(props) {
    const active = props.active
    const setActive = props.setActive
    const data = props.data
    useEffect(() => {
        if(props.data.value && props.data.value.product) {
            setProduct(data.value.product)
        }
    });

    const input = {
        0: useRef(null),
        1: useRef(null),
        2: useRef(null),
        3: useRef(null),
        4: useRef(null)
    }

    const handleInput = ({ target: { value } }) => setNumber(value);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [product, setProduct] = useState('');
    const [volume, setVolume] = useState('');
    const [address, setAddress] = useState('');

    const [checkBox, setChekBox] = useState(true);

    const [errorName, setErrorName] = useState(false);
    const [errorNumber, setErrorNumber] = useState(false);
    const [errorProduct, setErrorProduct] = useState(false);

    const [contactId, setContactId] = useState(0);

    const [success, setSuccess] = useState(false)
  
    const checkForm = () => {

        setErrorName(false)
        setErrorNumber(false)
        setErrorProduct(false)

        function check() {
            let flag = true
            if (data.inputs.find(item => item === 'name')) {
                if (name === '' && name.length === 0) {
                    console.log('name: error')
                    setErrorName(true)
                    flag = false
                } else {
                    setErrorName(false)
                }
            }
            if (data.inputs.find(item => item === 'number')) {
                if (number === '' && number.length === 0) {
                    console.log('number: error')
                    setErrorNumber(true)
                    flag = false
                } else {
                    setErrorNumber(false)
                }
            }
            if (data.inputs.find(item => item === 'product')) {
                if (product === '' && product.length === 0) {
                    console.log('product: error')
                    setErrorProduct(true)
                    flag = false
                } else {
                    setErrorProduct(false)
                }
            }
            return flag
        }

        if(check()) {
            if (checkBox) {
                if(data.title === 'Обратная связь') {
                    console.log(name, number)
                    if(contactId !== 0) {
                        dealCreate(`FIELDS[CONTACT_ID]=${contactId}&FIELDS[CATEGORY_ID]=${config.CATEGORY_ID}&FIELDS[TITLE]=${'Форма заказать звонок: ' + config.sitiName}&FIELDS[${config.pole_name}]=${name}&FIELDS[${config.pole_phone}]=${number}`)
                    } else {
                        contactCreate(`FIELDS[NAME]=${name}&FIELDS[PHONE][0][VALUE]=${number}&FIELDS[PHONE][0][VALUE_TYPE]=WORK`, `FIELDS[CATEGORY_ID]=${config.CATEGORY_ID}&FIELDS[TITLE]=${'Форма заказать звонок: ' + config.sitiName}&FIELDS[${config.pole_name}]=${name}&FIELDS[${config.pole_phone}]=${number}`)
                    }
                }
                if(data.title === 'Заказать') {
                    console.log(name, number, product, volume, address)
                    if(contactId !== 0) {
                        dealCreate(`FIELDS[CONTACT_ID]=${contactId}&FIELDS[CATEGORY_ID]=${config.CATEGORY_ID}&FIELDS[TITLE]=${'Форма расчет стоимости: ' + product + ' ' + config.sitiName}&FIELDS[${config.pole_name}]=${name}&FIELDS[${config.pole_phone}]=${number}&FIELDS[${config.pole_value}]=${volume}&FIELDS[${config.pole_address}]=${address}&FIELDS[PHONE][0][VALUE]=${number}&FIELDS[EMAIL][0][VALUE_TYPE]=WORK`)
                    } else {
                        contactCreate(`FIELDS[NAME]=${name}&FIELDS[PHONE][0][VALUE]=${number}&FIELDS[PHONE][0][VALUE_TYPE]=WORK`, `FIELDS[CATEGORY_ID]=${config.CATEGORY_ID}&FIELDS[TITLE]=${'Форма расчет стоимости: ' + product + ' ' + config.sitiName}&FIELDS[${config.pole_name}]=${name}&FIELDS[${config.pole_phone}]=${number}&FIELDS[${config.pole_value}]=${volume}&FIELDS[${config.pole_address}]=${address}&FIELDS[PHONE][0][VALUE]=${number}&FIELDS[EMAIL][0][VALUE_TYPE]=WORK`)
                    }
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

    const handleClick = (id) => {
        input[id].current.focus();
      };
    return active ? (
        
        <React.Fragment>
            <div className="form">
                <div className="formModal" onClick={()=>{setActive(false)}}>
                    <div className="block" onClick={e => e.stopPropagation()}>
                    <div className="close" onClick={()=>{setActive(false)}}/>
                    <div className="content">
                    <div className="text">
                        <div className="title">
                            <span>{data.title}</span>
                            <span>{data.description}</span>
                        </div>
                    </div>
                    <div className="inputs">
                    { !success ?
                        <>
                            {
                                data.inputs.map((item, i) => {
                                    switch (item) {
                                        case 'name':
                                            return (
                                                <div className={errorName ? 'input error': 'input'} onClick={()=>{handleClick(i)}} key={i}>
                                                <span>Имя <b>*</b></span>
                                                <input type="text" autocomplete={"off"} ref={input[i]} value={name} onChange={event => {setName(event.target.value)}}/>
                                                </div>
                                            )

                                        case 'number': 
                                            return (
                                                <div className={errorNumber ? 'input error': 'input'} key={i}>
                                                <span>Телефон <b>*</b></span>
                                                <PhoneInput 
                                                    value={number} 
                                                    onChange={handleInput}>
                                                </PhoneInput>
                                                {/* <input type="phone" autocomplete={"off"} ref={input[i]} value={number} onChange={event => {setNumber(event.target.value)}}/> */}
                                                </div>
                                            )
                                        case 'product': 
                                            return (
                                                    <div className={errorProduct ? 'input error': 'input'} onClick={()=>{handleClick(i)}} key={i}>
                                                    <span>Название <b>*</b></span>
                                                    <input type="text" autocomplete={"off"} ref={input[i]} value={product} onChange={event => {setProduct(event.target.value)}}/>
                                                    </div>
                                                )
                                        case 'volume': 
                                            return (
                                                    <div className="input" onClick={()=>{handleClick(i)}} key={i}>
                                                    <span>Объем</span>
                                                    <input type="number" autocomplete={"off"} ref={input[i]} value={volume} onChange={event => {setVolume(event.target.value)}}/>
                                                    </div>
                                                )
                                        case 'adress': 
                                            return (
                                                    <div className="input" onClick={()=>{handleClick(i)}} key={i}>
                                                    <span>Адрес</span>
                                                    <input type="text" autocomplete={"off"} ref={input[i]} value={address} onChange={event => {setAddress(event.target.value)}}/>
                                                    </div>
                                                )
                                        default:
                                            break;
                                    }

                                })
                            }
                            <input type="checkbox" className="custom-checkbox" id="politics-modal" name="politics-modal" value="yes" defaultChecked onChange={()=>{setChekBox(!checkBox)}}/>
                            <label htmlFor="politics-modal">Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных *</label>
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
    ): null;
}

export default FormModal;