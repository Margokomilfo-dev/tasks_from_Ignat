import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./Greeting.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
    onKeyPressInput: (e: KeyboardEvent<HTMLInputElement>) => void
}


const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers, onKeyPressInput}) => {
    const inputClass = {
        padding: "10px",
        fontSize: "18px",
        marginBottom: "12px"
    }

    return (
        <div>
            <div className={styles.mainField}>
                <div className={styles.inputField}>
                    <SuperInputText onChange={setNameCallback} value={name} onKeyPress={onKeyPressInput} error={error}
                                    style = {{borderRadius: '0'}}
                                    className={styles.addInputStyles}/>
                </div>

                <SuperButton onClick={() => {addUser(name)}} className={styles.addButtonClass}>add</SuperButton>

                <div><span className={styles.span}>{totalUsers}</span></div>
            </div>
            {/*<div> {error ? <span className={styles.error}>{error}</span> : ''} </div>*/}
        </div>
    );
}

export default Greeting;
