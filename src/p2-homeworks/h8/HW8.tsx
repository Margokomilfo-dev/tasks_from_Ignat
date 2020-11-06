import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "../../p1-main/m1-ui/u1-app/myApp.module.css";
import style from './hw8.module.css'


export type UserType = {_id: number, name: string, age: number}

export const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
] as Array<UserType>

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id} className={style.people}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "SORT_UP"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "SORT_DOWN"}))

    return (
        <div className={s.hw}>
            <div className={s.hwTitle}>
                Homework №8
            </div>
            {/*should work (должно работать)*/}
            <div className={style.finalPeople}>
                {finalPeople}
            </div>

            <div>
                <SuperButton onClick={sortUp} className={style.button}>sort up</SuperButton>
                <SuperButton onClick={sortDown} className={style.button}>sort down</SuperButton>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}

        </div>
    );
}

export default HW8;
