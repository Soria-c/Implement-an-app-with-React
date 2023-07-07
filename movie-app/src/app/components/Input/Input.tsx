// "use client"

import { ChangeEvent, ReactNode, useState } from "react";
import style from "./Input.module.css"
import { IconDefinition, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

config.autoAddCss = false
interface InputError {
    e: boolean,
    msg? : string
}

interface InputProps {
    label: string, 
    icon?: IconDefinition, 
    value: string | number
    setValue: React.Dispatch<React.SetStateAction<string | number>>
    error?: InputError,
    dark?: boolean
    type: boolean
    width: string
    eType?: string
}


export default function Input({label, icon, value, setValue, error, dark, type, width, eType}: InputProps) : ReactNode {

    const [show, setShow] = useState(type);

    // const uuid = crypto.randomUUID();
    const classes : {
    inputBaseClass: string
    iconColor: string
    labelClass: string
    inputError?: string
    } = {
        inputBaseClass: style["input-base-ligth"],
        iconColor: "black",
        labelClass: style["label"],
    }

    const handleInput = function (e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }

    if (dark) {
        classes.inputBaseClass = style["input-base-dark"]
        classes.labelClass = style['label-dark']
    }
    if (error && error.e) {
        classes.labelClass = style['label-error']
        classes.iconColor = "#E31C25"
        classes.inputError = style['input-error']
    }

    

    return (
        <>
        
            {icon? <FontAwesomeIcon icon={icon} opacity={.5} color={classes.iconColor}/> : undefined}
            <label  className={classes.labelClass}> {label}</label>
            <input  type={show? eType : "password"} style={{width: width}} className={`${classes.inputBaseClass} ${classes.inputError}`} value={value} onChange={handleInput}/>
            
            {!type ? 
                <div className={style['eye-container']}>
                    <FontAwesomeIcon icon={!show? faEye: faEyeSlash} className={style['eye']} onClick={() => setShow(!show)}/> 
                </div>
            : ""}

            
        </>
        )
}