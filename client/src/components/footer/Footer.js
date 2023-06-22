import React from 'react'
import classes from "./footer.module.css"
import phone from "../../img/phone.png"
import logo from "../../img/logo.png"

function Footer() {
    return (
        <div className={classes.container}>
        <footer className={classes.footer}>
            <div className={classes.block_footer1}>
                <ul className={classes.footer_nav}>
                    <li>TWITTER</li>
                    <li>FACEBOOK</li>
                    <li>INSTAGRAM</li>
                </ul>
                <ul className={classes.footer_link}>
                    <li>
                        <a href="#"><img src={phone} alt="phone"/>
                            <span>+996 700 12 34 56</span>
                        </a>
                    </li>
                    <li>                        
                        <a href="#"><img src={phone} alt="phone"/>
                            <span>+996 700 12 34 56</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={classes.block_footer2}>
                <img src={logo} alt="ligo-footer"/>
            </div>
        </footer>
</div>
    )
}

export default Footer