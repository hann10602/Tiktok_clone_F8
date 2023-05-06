import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    normal = false,
    rounded = false,
    shadow = false,
    leftIcon = false,
    rightIcon = false,
    disabled = false,
    item = false,
    children,
    className,
    onClick,
    passProps,
}) {
    let Component = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx(
        'wrapper',
        {
            primary,
            outline,
            disabled,
            small,
            large,
            rounded,
            shadow,
            normal,
            item,
        },
        className,
    );

    return (
        <>
            <Component className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Component>
        </>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    normal: PropTypes.bool,
    rounded: PropTypes.bool,
    shadow: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    disabled: PropTypes.bool,
    item: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
