import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";
import style from '../../../../p1-main/m1-ui/u1-app/myApp.module.css'


// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red,
        className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? style.button : s.default} ${className}`;

    return (
        <div className={s.buttonComp}>
            <button
                className={finalClassName}
                {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
            />
        </div>

    );
}

export default SuperButton;
