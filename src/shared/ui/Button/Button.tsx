import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";


export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    disabled?:boolean;
    size?: ButtonSize;
    children?: ReactNode;
}



export const Button = memo ((props: ButtonProps) => {
    const { children, className, theme = ButtonTheme.OUTLINE,disabled, square,size= ButtonSize.M, ...otherProps } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true, 
        [cls.disabled]: disabled,
    }

    return (
        <button 
            type="button" 
            className={classNames(cls.Button, mods, [className])}
            disabled ={disabled}
            {...otherProps} >
            {children}
        </button>
    );
});