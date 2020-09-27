import React from "react";
import s from './Message.module.css'
import Message, {MessageProsType} from "./Message";

function AlternativeMessage(props: MessageProsType) {
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
