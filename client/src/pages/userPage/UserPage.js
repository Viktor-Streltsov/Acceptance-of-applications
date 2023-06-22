import React, {useEffect} from 'react'
import classes from "./userPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {getUserApplicationApi} from "../../axios/applicationApi"

function UserPage() {

    const dispatch = useDispatch()

    const {id} = useParams()

    const {userApplication} = useSelector(state => state.applicationReducer)
    const {user} = useSelector(state => state.userReducer)
    console.log(user)
    useEffect(() => {
        dispatch(getUserApplicationApi(id))
    }, [dispatch, id])


    return (
        <div className={classes.container_content}>
            <section className={classes.container_tarif}>
                <div className={classes.head_tarif}>
                    <h2>{user.login} ваши заявки</h2>
                </div>
                <div className={classes.block_tarif}>
                    <div className={classes.cart_tarif}>
                        <table className={classes.table}>
                            <thead>
                            <tr>
                                <th>name</th>
                                <th>role</th>
                                <th>phone</th>
                                <th>address</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userApplication.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.user.role}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserPage