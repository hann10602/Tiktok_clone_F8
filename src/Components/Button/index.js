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
    item=false,
    children, 
    onClick, 
    passProps,
    className}) {
    let Component = 'button';
    

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
        item,
    }, className);

    return (
        <>
            <Component className={classes} {...props}>
                {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
                <span>{children}</span>
                {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
            </Component>
        </>
    )
}

export default Button