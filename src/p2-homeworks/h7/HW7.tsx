import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import s from "../../p1-main/m1-ui/u1-app/myApp.module.css";

const arr: string[] = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState<string>(arr[0]);

    return (
        <div className={s.hw}>
            <div className={s.hwTitle}>
                Homework №7
            </div>
            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}

        </div>
    );
}

export default HW7;
