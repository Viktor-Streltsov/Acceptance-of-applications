import React, {useEffect} from 'react'
import classes from "./header.module.css"
import {links} from "./../../links/links"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getTariffsApi} from "../../axios/tariffApi"
import {setIsAuth} from "../../store/slices/userSlice"
import {getUsers} from "../../axios/usersApi"
import logo from "../../img/logo.png"


function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth, user} = useSelector(state => state.userReducer)

    const logOut = () => {
        dispatch(setIsAuth(false))
    }
    const admin = () => {
        navigate(links.admin)
    }
    const userCabinet = () => {
        navigate(`/user/${user.id}/`)
    }

    const btnApplication = () => {
        if (!isAuth) {
            return alert("Авторизуйтесь")
        }
        navigate(`/contact/${user.id}/`)
    }

    useEffect(() => {
        dispatch(getTariffsApi())
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div className={classes.container}>
            <header className={classes.content_head}>
                <ul className={classes.head}>
                    <li>
                        <img className={classes.logo} src={logo} alt="logo"/>
                        <Link className={classes.btn_nav} to={links.base}>Главная</Link>
                        <button
                            className={classes.btn_nav}
                            onClick={btnApplication}>Заявка
                        </button>
                    </li>
                    <li>
                        {isAuth
                            ?
                            <p>Вы вошли как: "{user.login}"</p>
                            :
                            ""
                        }
                    </li>
                    <li>
                        {isAuth
                            ?
                            <div className={classes.nav}>
                                <button
                                    className={classes.btn_nav}
                                    onClick={userCabinet}>Кабинет
                                </button>
                                {user.role === "ADMIN"
                                    ?
                                    <button
                                        className={classes.btn_nav}
                                        onClick={admin}>Admin
                                    </button>
                                    :
                                    ''
                                }
                                <button
                                    className={classes.btn_nav}
                                    onClick={logOut}>Выход
                                </button>
                            </div>
                            :
                            <>
                                <Link className={classes.btn_nav} to={links.signup}>Регистрация</Link>
                                <Link className={classes.btn_nav} to={links.login}>Вход</Link>
                            </>
                        }
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header