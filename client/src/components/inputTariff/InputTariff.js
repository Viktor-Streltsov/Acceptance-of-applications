import React, {useState} from 'react'
import classes from "./InputTariff.module.css"
import {addApplicationHelpApi} from "../../axios/applicationApi"
import {useDispatch} from "react-redux"


function InputTariff() {
    const dispatch = useDispatch()

    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    const isFormValid = () => phone && name


    const submitHandler = (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            return alert("Введите все данные")
        }

        const formData = new FormData()
        formData.append('phone', phone)
        formData.append('name', name)
        dispatch(addApplicationHelpApi(formData))
    }

    return (
        <section className={classes.container_input}>
            <div className={classes.block_help}>
                <div className={classes.block1_input}>
                    <div className={classes.head_input1}>
                        <h2>Помощь в выборе тарифа</h2>
                    </div>
                    <div className={classes.inputs1}>
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="+996 (___) ___-__-__ *"/>
                        <input
                            type="text"
                            name="title"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Как Вас зовут?"/>
                        <p
                            className={classes.call}
                            onClick={submitHandler}>Жду звонка</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InputTariff