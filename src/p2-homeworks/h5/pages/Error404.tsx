import React from "react"
import s from './Pages.module.css'

function Error404() {
    return (
        <div className={`${s.page} ${s.errorPage}`}>
            <div className={s.numberError}>404</div>
            <div className={s.errorText}>There isn't a GitHub Pages site here.</div>
            <div className={s.miau}><img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMdi3JaPrt463VEIJXdMmRy68h3h4z6HvfuQ&usqp=CAU'
                alt=""/></div>
        </div>
    );
}

export default Error404;
