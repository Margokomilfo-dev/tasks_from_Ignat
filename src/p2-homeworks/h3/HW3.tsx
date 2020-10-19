import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import AlternativeGreeting from "./AlternativeGreeting";
import s from "./Greeting.module.css"

// types
export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name:string) => {
        let newUser = {_id: v1(), name: name}
        let newAr = [...users, newUser]
        setUsers(newAr)
    }
    return (
        <div className={s.homework}>
            <div>
                <span className={s.hw}>Homework №3</span>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
                <AlternativeGreeting users={users}/>
            </div>
        </div>
    );
}

export default HW3;
