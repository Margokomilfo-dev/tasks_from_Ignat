import React from "react";
import {UserType} from "./HW3";
import s from './Greeting.module.css'

type AlternativeGreetingPropsType = {
    users: Array<UserType>
}

const AlternativeGreeting: React.FC<AlternativeGreetingPropsType> = ({users}) => {
    return (
        <div className={s.alt}>
            <div className={s.title}>Array checking</div>
            <div className={s.array}>{users.map(u => <span key={u._id}>{u.name}, </span>)}</div>
            <div className={s.totalCount}>Total count: {users.length}</div>
        </div>
    );
}

export default AlternativeGreeting;
