import React from "react";
import s from './Message.module.css'
import Message from "./Message";
import {MessageDataType} from "./HW1";

function AlternativeMessage(props: MessageDataType) {
    return (
        <div className={s.alt_mess}>
            <Message avatar={props.avatar}
                     name={props.name}
                     message ={props.message}
                     time={props.time} />
        </div>
    )
}

export default AlternativeMessage;
