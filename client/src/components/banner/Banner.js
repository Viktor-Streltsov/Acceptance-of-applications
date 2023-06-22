import React from 'react'
import classes from "./banner.module.css"
import {links} from "../../links/links"
import {Link} from "react-router-dom"
import earth from "../../img/earth.png"
import polelips from "../../img/polelips.png"
import tv from "../../img/tv.png"
import wifi from "../../img/wifi.png"
import Vector from "../../img/Vector.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import Vector3 from "../../img/Vector3.png"
import headgrin from "../../img/headgrin.png"
import what from "../../img/what.png"


function Banner() {
    return (
        <section className={classes.container_inet}>
            <div className={classes.ander_block_inet}>
                <div className={classes.block_title}>
                    <h1><img src={Vector} alt="@"/>КНЕТ</h1>
                    <Link
                        className={classes.btn_nav}
                        to={links.tariff}
                    >Выбрать тариф</Link>
                </div>
                <div className={classes.block_img}>
                    <img className={classes.earth} src={earth} alt="icon"/>
                    <img className={classes.ellipse} src={polelips} alt="icon"/>
                    <img className={classes.tv} src={tv} alt="icon"/>
                    <img className={classes.wifi} src={wifi} alt="icon"/>
                    <img className={classes.vec1} src={Vector1} alt="icon"/>
                    <img className={classes.vec2} src={Vector2} alt="icon"/>
                    <img className={classes.vec3} src={Vector3} alt="icon"/>
                    <img className={classes.vec4} src={headgrin} alt="icon"/>
                    <img className={classes.what} src={what} alt="icon"/>
                </div>
            </div>
        </section>
    )
}

export default Banner