import React from "react";
import {NavLink} from "react-router-dom"
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.headerComp}>
            <div className={s.container}>
                <div className={s.navLinks}>
                    <NavLink to={'/PRE_JUNIOR'} className={s.navLink} activeClassName={s.active}> mainPage </NavLink>
                    <NavLink to={'/student1'} className={s.navLink} activeClassName={s.active}> student 1</NavLink>
                    <NavLink to={'/student2'} className={s.navLink} activeClassName={s.active}> students</NavLink>
                </div>

            </div>
        </div>

    );
}

export default Header;
