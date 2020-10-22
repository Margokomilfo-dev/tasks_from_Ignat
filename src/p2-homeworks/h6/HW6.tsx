import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import s from './../../p1-main/m1-ui/u1-app/myApp.module.css'
import style from './hw6.module.css'

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        // setValue();
    };

    return (
        <div className={s.hw}>
            <div className={s.hwTitle}>
                Homework №6
            </div>

            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}
                />
            </div>
            <div className={style.buttons}>
                <SuperButton className={s.button} onClick={save}>save</SuperButton>
                <SuperButton className={s.button} onClick={restore}>restore</SuperButton>
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}

        </div>
    );
}

export default HW6;
