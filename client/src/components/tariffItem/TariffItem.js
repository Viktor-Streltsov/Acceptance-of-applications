import React from 'react'
import classes from "./tariffItem.module.css"
import group from "../../img/Group.png"
import carbon from "../../img/carbon.png"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {addUserTariff} from "../../axios/tariffApi"

function TariffItem({tariff}) {
    const dispatch = useDispatch()

    const {user, isAuth} = useSelector(state => state.userReducer)

    const id = tariff ? tariff.id : undefined
    const speed = tariff ? tariff.speed : undefined
    const price = tariff ? tariff.price : undefined
    const title = tariff ? tariff.title : undefined

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/tariff/${tariff.id}/`)
    }

    const addTariff = () => {
        if (!isAuth) {
            return alert("Авторизуйтесь")
        }
        dispatch(addUserTariff(tariff.id, user.id))
    }

    return (
        <li className={classes.cart_tariff_content_li}>
            <h3>{title}</h3>
            <p><img src={group} alt="icon"/>{speed} Мбит/с</p>
            <p className={classes.more_tariff} onClick={clickHandler}>Подробнее <img src={carbon} alt="icon"/></p>
            <div className="line"></div>
            <p>{price} сом/мес</p>
            <button
                className={classes.btn_go}
                onClick={addTariff}>Подключить</button>
        </li>
    )
}

export default TariffItem