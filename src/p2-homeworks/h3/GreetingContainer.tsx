import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        setError('')
    };

    let commonPart = () => {
        alert(`Hello ${name} !`)
        addUserCallback(name)
        setName('')
        setError('')
    }
    let onKeyPressInput = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.currentTarget.value && e.key === 'Enter') {
            commonPart()
        }
    }
    const addUser = (name: string) => {
        if (name.length) {
            commonPart()
        } else {setError('no name')}

    };
    const totalUsers = users.length
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressInput={onKeyPressInput}
        />
    );
}

export default GreetingContainer;
