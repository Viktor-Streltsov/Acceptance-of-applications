import React, {useState} from 'react'
import classes from "./application.module.css"
import {links} from "../../links/links"
import close from "../../img/close.png"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {addApplicationApi} from "../../axios/applicationApi"

function Application() {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.userReducer)
    console.log(user)
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [time, setTime] = useState('')

    const isFormValid = () => phone && address && time


    const submitHandler = (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            return alert("Введите все данные")
        }

        const formData = new FormData()
        formData.append('phone', phone)
        formData.append('name', user.login)
        formData.append('address', address)
        formData.append('time', time)
        formData.append('userId', user.id)
        dispatch(addApplicationApi(formData))
        setPhone("")
        setAddress("")
        setTime("")
    }

    return (
        <div className={classes.container_modal}>
            <div className={classes.block_head}>
                <h2 className={classes.head_modal}>Прием заявок для отдела технической инвентаризации предприятия</h2>
                <Link to={links.base}><img src={close} alt="close"/></Link>
            </div>
            <label htmlFor="name">Как Вас зовут? </label>
            <input
                id="name"
                type="text"
                name="name"
                value={user.login}
                placeholder="Как Вас зовут?"
                disabled
            />
            <label htmlFor="phone">Ваш номер телефона </label>
            <input
                id="phone"
                type="text"
                name="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+996 (___) ___-__-__ *"/>

            <label htmlFor="address">Адрес предприятия </label>
            <input
                id="address"
                type="text"
                name="address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Адрес предприятия"/>
            <label htmlFor="udob">Удобное время для звонка </label>
            <input
                id="udob"
                type="text"
                name="name"
                value={time}
                onChange={e => setTime(e.target.value)}
                placeholder="Удобное время для звонка"/>
            <p
                className={classes.call}
                onClick={submitHandler}>Жду звонка</p>
        </div>
    )
}

export default Application