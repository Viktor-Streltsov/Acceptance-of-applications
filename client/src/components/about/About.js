import React from 'react'
import classes from "./about.module.css"
import casual from "../../img/casual-meditation.png"
import star from "../../img/star.png"
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

function About() {

    const navigate = useNavigate()
    const {isAuth, user} = useSelector(state => state.userReducer)
    const btnApplication = () => {
        if (!isAuth) {
            return alert("Авторизуйтесь")
        }
        navigate(`/contact/${user.id}/`)
    }

    return (
        <div className={classes.container}>
            <section className={classes.content_application}>
                <div className={classes.application_head}>
                    <h1>Прием заявок на техническую инвертаризацию</h1>
                </div>
                <div className={classes.blocks}>
                    <div className={classes.block_applicat1}>
                        <div className={classes.block_text}>
                            <ul className={classes.spisok}>
                                <li>Техническая инвентаризация</li>
                                <li>Технический паспорт</li>
                                <li>Поэтажный план</li>
                                <li>Экспликация к поэтажному плану</li>
                                <li>Ситуационный план земельного участка</li>
                            </ul>
                            <p className={classes.text}>
                                Техническая инвентаризация объектов недвижимости- это комплекс работ по определению
                                конструкции,
                                положения на местности по отношению к постоянным ориентирам, материала, протяженности и
                                других характеристик
                                объекта учета. По результатам технической инвентаризации выдается Технический паспорт
                                объекта учета.
                            </p>
                            <button
                                className={classes.btn_nav}
                                onClick={btnApplication}>Заявка
                            </button>
                        </div>
                    </div>
                    <div className={classes.block_applicat2}>
                        <img className={classes.gerl} src={casual} alt="img"/>
                        <img className={classes.star} src={star} alt="star"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About