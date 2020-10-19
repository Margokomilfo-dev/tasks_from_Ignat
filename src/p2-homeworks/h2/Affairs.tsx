import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import styles from './Affairs.module.css'
import s from '../../p1-main/m1-ui/u1-app/myApp.module.css'

type AffairsPropsType = {
    filteredAffairs: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (

        <div>
            <div className={styles.afTable}>{props.filteredAffairs.map((a: AffairType) => (
                <Affair key={a._id} affair={a} deleteAffairCallback={props.deleteAffairCallback}/>))}
            </div>

        <div className={styles.buttons}>
            <button className={s.button} onClick={setAll}>All</button>
            <button className={s.button} onClick={setHigh}>High</button>
            <button className={s.button} onClick={setMiddle}>Middle</button>
            <button className={s.button} onClick={setLow}>Low</button>
        </div>

        </div>
    );
}

export default Affairs;
