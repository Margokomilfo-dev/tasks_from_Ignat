import React from "react";
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <div>
            <NavLink to={'/student1'}> student 1</NavLink>
            <NavLink to={'/student2'}> student 2</NavLink>
            <NavLink to={'/PRE_JUNIOR'}> mainPage </NavLink>
        </div>
    );
}

export default Header;
