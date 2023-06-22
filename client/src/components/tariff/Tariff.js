import React, {useEffect} from 'react'
import classes from "./tariff.module.css"
import TariffItem from "../tariffItem/TariffItem"
import {useDispatch, useSelector} from "react-redux"
import {getTariffsApi} from "../../axios/tariffApi"


function Tariff() {

    const dispatch = useDispatch()

    const {tariffs} = useSelector(state => state.tariffReducer)

    const {preloader} = useSelector(state => state.preloaderReducer)

    useEffect(() => {
        dispatch(getTariffsApi())
    }, [dispatch])

    return (
        <section className={classes.container_tariff}>
            <div className={classes.head_tariff}>
                <h2 className={classes.h2}>тарифы для дома</h2>
            </div>
            <div className={classes.block_tariff}>
                <div className={classes.cart_tariff}>
                    {preloader ?
                        <h1 >Loading......</h1>
                        :
                        <ul className={classes.cart_tariff_content}>
                            {
                                tariffs.map(tariff => <TariffItem key={tariff.id} tariff={tariff}/>)
                            }
                        </ul>
                    }
                </div>
            </div>
        </section>
    )
}

export default Tariff