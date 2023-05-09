import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, lable = false, activeIcon }) {
    const [activeItem, setActiveItem] = useState(false);
    return (
        <>
            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('activeIcon')}>{activeIcon}</span>
                <h3 className={cx('title')}>{title}</h3>
                {lable && <span className={cx('lable')}>{lable}</span>}
            </NavLink>
        </>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    activeIcon: PropTypes.object.isRequired,
    lable: PropTypes.string,
};

export default MenuItem;
