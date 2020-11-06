import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react"
import './SuperRadio.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)

    }


    const mappedOptions: any[] = options
        ? options.map((o, i) => (

            <label key={name + "-" + i} className='control controlRadio'>

                <input
                    type={"radio"}
                    name="radio"
                    value={o}
                    checked={value === o}
                    // name, checked, value, onChange
                    onChange={onChangeCallback}
                />
                {o}
                <div className='control_indicator'> </div>
            </label>
        ))
        : [];

    return (

        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
