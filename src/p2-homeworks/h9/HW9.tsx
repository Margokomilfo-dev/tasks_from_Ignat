import React from "react";
import Clock from "./Clock";
import s from "../../p1-main/m1-ui/u1-app/myApp.module.css";

function HW9() {
    return (
        <div className={s.hw}>
            <div className={s.hwTitle}>
                Homework №6
            </div>
            {/*should work (должно работать)*/}
            <Clock/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
        </div>
    );
}

export default HW9;
