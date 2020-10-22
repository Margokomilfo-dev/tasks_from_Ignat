import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./Greeting.module.css";
import s from './../../p1-main/m1-ui/u1-app/myApp.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
    onKeyPressInput: (e:KeyboardEvent<HTMLInputElement>) => void
}


const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers, onKeyPressInput}) => {
    const inputClass = {
        padding: "10px",
        fontSize: "18px",
        marginBottom: "12px"
    }

    return (
        <div >
            <div className={styles.mainField}>
                <div> <input value={name} onChange={setNameCallback} style={inputClass} className={!name ? s.errorInput : s.input} onKeyPress={onKeyPressInput}/> </div>
                <div> <button onClick={() => {addUser(name)}} className={`${s.button} ${styles.button}`}>add</button> </div>
                <div> <span className={styles.span}>{totalUsers}</span> </div>
            </div>
            <div> {error ? <span className={styles.error}>{error}</span> : ''} </div>
        </div>
    );
}

export default Greeting;
