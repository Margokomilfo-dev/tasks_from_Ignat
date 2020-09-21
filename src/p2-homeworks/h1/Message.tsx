import React from "react";
import s from './Message.module.css'


export type MessageProsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageProsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}><img className={s.image} src={props.avatar} alt="avatar"/></div>
            <div className={s.message_content}>
                <div className={s.message_body}>
                    <div className={s.user_name}>{props.name}</div>
                    <div className={s.user_message}>{props.message}</div>
                </div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
