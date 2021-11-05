import React from "react";
import style from './FormsControls.module.css'

type PropsType = {
    input: any
    meta: any
    child: any
}
const FormControl:React.FC<PropsType>=({input, meta,  ...props})=> {
    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            {props.children}
            {hasError && <div>{meta.error}</div>}
        </div>
    )
}
export const Textarea: React.FC<PropsType> = (props) => {
    const{input, meta, child, ...restProps} = props

    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}


export const Input: React.FC<PropsType> = (props) => {
    const{input, meta, child, ...restProps} = props

    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}