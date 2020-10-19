import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const error = text ? "" : "введите текст...";
    const showAlert = () => {
        if (error) {
            alert("введите текст...");
        } else {
            alert(text); // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = () => {}

    return (
        <div>
            <hr/>
            homeworks 4
            <div className={s.column}>

                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    className={s.blue} // проверьте, рабоет ли смешивание классов
                    //spanClassName={s.errorText}
                />

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    click me :) {/*// название кнопки попадёт в children*/}
                </SuperButton>

                {/*should work (должно работать)*/}
                <SuperCheckbox checked={checked} onChangeChecked={setChecked}>
                    сегодня ты лучше чем вчера?  {/*// этот текст попадёт в children*/}
                </SuperCheckbox>
                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange= {testOnChange}  />
            </div>
            <hr/>
        </div>
    );
}

export default HW4;
