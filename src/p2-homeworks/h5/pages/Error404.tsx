import React from "react"
import s from './Pages.module.css'

function Error404() {
    return (
        <div className={s.errorPage}>
            <div className={s.numberError}>404</div>
            <div className={s.errorText}>Page not found!</div>
            <div className={s.miau}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
