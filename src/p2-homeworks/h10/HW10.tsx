import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import loadingImg from './img/Pulse.svg'
import {loadingAC, LoadingReducerType, useDispatch} from "./bll/loadingReducer";
import {useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import style from "../../p1-main/m1-ui/u1-app/myApp.module.css";
import s from './HW10.module.css'

function HW10() {

    const dispatch = useDispatch()
    let loading = useSelector<AppStoreType, LoadingReducerType>(state => state.loading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        const timeOutID = setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
        return () => {
            clearTimeout(timeOutID)
        }
    };

    return (
        <div className={style.hw}>
            <span className={style.hwTitle}>Homework №10</span>
            <div className={s.wrapper}>
                {loading.isLoading
                    ? (
                        <div><img src={loadingImg} alt=""/></div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading} className={s.button}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default HW10;
