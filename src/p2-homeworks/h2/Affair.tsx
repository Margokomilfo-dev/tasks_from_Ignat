import React from "react";
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(props.affair._id)
    };

    return (
        <div className={s.affairs}>
            <div className={s.affairBlock}>
                <div className={s.affairId}>{props.affair._id}</div>
                <div className={s.affairName}> {props.affair.name} </div>
                <div className={s.affairPriority}>{props.affair.priority}</div>

                <button onClick={() => deleteCallback(props.affair._id)}>X</button>
            </div>

        </div>
    );
}

export default Affair;
