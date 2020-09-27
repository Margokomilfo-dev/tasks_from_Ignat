import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import s from './Message.module.css'


export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const messageData: Array<MessageType> = [
    {
        avatar: "https://www.pngitem.com/pimgs/m/136-1364613_lisa-simpson-png-lisa-simpson-los-simpson-transparent.png",
        name: "Margo",
        message: "Hi there! nmp start нажимал?? Давай же, дружок!",
        time: "22:00",
    },
    {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyzA8t-K0EybMGsRdv1oVfTV2yLbiiJkaVOg&usqp=CAU",
        name: "Andry",
        message: "Нет! Сейчас попробую! Спасибо! ",
        time: "22:05",
    },
    {
        avatar: "",
        name: "",
        message: "Должно заработать! Летим, Andry",
        time: "22:06",
    },
    {
        avatar: "",
        name: "",
        message: "Все работает! ура!!! ",
        time: "22:07",
    }
];


function HW1() {
    return (
        <div>
            <span className={s.homework}>Homework №1</span>

            <Message
                avatar={messageData[0].avatar}
                name={messageData[0].name}
                message={messageData[0].message}
                time={messageData[0].time}/>
            <AlternativeMessage avatar={messageData[1].avatar}
                                name={messageData[1].name}
                                message={messageData[1].message}
                                time={messageData[1].time}/>
            <Message
                avatar={messageData[0].avatar}
                name={messageData[0].name}
                message={messageData[2].message}
                time={messageData[2].time}/>
            <AlternativeMessage avatar={messageData[1].avatar}
                                name={messageData[1].name}
                                message={messageData[3].message}
                                time={messageData[3].time}/>

        </div>

    );
}

export default HW1;
