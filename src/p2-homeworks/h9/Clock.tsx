import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };
    let twoSymbolsInClock = (num: number) => num < 10 ? '0' + num : num

    //const stringTime = twoSymbolsInClock(date.getHours())+':'+twoSymbolsInClock(date.getMinutes())+':'+twoSymbolsInClock(date.getSeconds())
    const stringDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

    return (
        <div className={s.container}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={s.forDate}
            >
                {/*{stringTime}*/}
                {show && (
                    <div className={s.mySpan}>{stringDate} </div>
                )}
                <div className={s.clockWrapper}>
                    <div className={s.clock}>
                        <span>{twoSymbolsInClock(date.getHours())}</span>
                        <span className={s.text}>hours</span>
                    </div>
                    :
                    <div className={s.clock}>
                        <span>{twoSymbolsInClock(date.getMinutes())}</span>
                        <span className={s.text}>minutes</span>
                    </div>
                    :
                    <div className={s.clock}>
                        <span>{twoSymbolsInClock(date.getSeconds())}</span>
                        <span className={s.text}>seconds</span>
                    </div>
                </div>
            </div>

            <div className={s.buttons}>
                <SuperButton onClick={start} className={s.button}>start</SuperButton>
                <SuperButton onClick={stop} className={s.button}>stop</SuperButton>
            </div>


        </div>
    );
}

export default Clock;
