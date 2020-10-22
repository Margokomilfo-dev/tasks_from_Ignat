import React, {useState} from "react";
import Affairs from "./Affairs";
import style from './../../p1-main/m1-ui/u1-app/myApp.module.css'

// types
export type AffairPriorityType = "high" | "middle" | "low";
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = "all" | AffairPriorityType;

// constants

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === "all") return affairs
    if (filter === "high") return affairs.filter(a => a.priority === "high")
    if (filter === "low") return affairs.filter(a => a.priority === "low")
    if (filter === "middle") return affairs.filter(a => a.priority === "middle")
    else return affairs
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => affairs.filter(a => a._id !== _id)


//==============================================================================================================
function HW2() {

    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    const [filter, setFilter] = useState<FilterType>("all");
    const filteredAffairs = filterAffairs(affairs, filter);

    return (
        <div className={style.hw}>
            <span className={style.hwTitle}>Homework №2</span>
            <Affairs
                filteredAffairs={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    );
}

export default HW2;
