import React from "react"
import {AffairType} from "./HW2"
import styles from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(props.affair._id)
    };
    let style = {
        borderRadius: '0',
        width: '30px',
        border: '1px solid yellowgreen',
        background: 'none'
    }
    return (
        <div className={styles.affairs}>
            <div className={styles.affairBlock}>
                <div className={styles.affairId}>{props.affair._id}</div>
                <div className={styles.affairName}> {props.affair.name} </div>
                <div className={styles.affairPriority}>{props.affair.priority}</div>

                <SuperButton onClick={() => deleteCallback(props.affair._id)}
                             style={style}>X</SuperButton>
            </div>

        </div>
    );
}

export default Affair
