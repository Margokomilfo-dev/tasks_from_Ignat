import React from "react"
import Affair from "./Affair"
import {AffairType, FilterType} from "./HW2"
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"

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
            <div className={s.afTable}>{props.filteredAffairs.map((a: AffairType) => (
                <Affair key={a._id} affair={a} deleteAffairCallback={props.deleteAffairCallback}/>))}
            </div>

        <div className={s.buttons}>
            <SuperButton onClick={setAll} className={s.sortButtonStyles}>All</SuperButton>
            <SuperButton onClick={setHigh} className={s.sortButtonStyles}>High</SuperButton>
            <SuperButton onClick={setMiddle} className={s.sortButtonStyles}>Middle</SuperButton>
            <SuperButton onClick={setLow} className={s.sortButtonStyles}>Low</SuperButton>
        </div>

        </div>
    );
}

export default Affairs
