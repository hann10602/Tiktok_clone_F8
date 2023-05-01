import classNames from "classnames/bind"
import { Link } from "react-router-dom";
import styles from "./Button.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Button({
    to, 
    href, 
    primary=false, 
    outline=false,
    small=false,
    large=false,
    normal=false,
    rounded=false,
    shadow=false,
    leftIcon=false,
    rightIcon=false,
    disabled=false,
    children, 
    onClick, 
    passProps}) {
    const Component = 'button';

    const props = {
        onClick,
        ...passProps,
    }

    if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith("on") && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if(to) {
        props.to = to;
        Component = Link;
    }else if(href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx("wrapper", {
        primary,
        outline,
        disabled,
        small,
        large,
        rounded,
        shadow,
        normal,
    });

    return (
        <>
            <Component className={classes} {...props}>
                {leftIcon && <span class={cx("icon")}>{leftIcon}</span>}
                <span>{children}</span>
                {rightIcon && <span class={cx("icon")}>{rightIcon}</span>}
            </Component>
        </>
    )
}

export default Button