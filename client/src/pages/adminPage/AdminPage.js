import React, {useEffect} from 'react'
import classes from "./adminPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {getUsers} from "../../axios/usersApi"
import {getApplicationApi, getApplicationHelpApi} from "../../axios/applicationApi"

function AdminPage() {
    const dispatch = useDispatch()

    const {application} = useSelector(state => state.applicationReducer)

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getApplicationApi())
        dispatch(getApplicationHelpApi())
    }, [dispatch])

    const {users} = useSelector(state => state.userReducer)

    return (
        <div className={classes.container_content}>
            <div className={classes.block_table}>
                <h1>Пользователи</h1>
                <table className={classes.table}>
                    <thead>
                    <tr>
                        <th>login</th>
                        <th>email</th>
                        <th>role</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(item => (
                        <tr key={item.id}>
                            <td>{item.login}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className={classes.block_table}>
                <h1>Заявка на инвентаризацию</h1>
                <table className={classes.table}>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>phone</th>
                        <th>address</th>
                        <th>time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {application.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminPage