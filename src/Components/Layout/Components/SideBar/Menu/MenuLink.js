import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuLink({title, link}) {
    return (
            <a className={cx("link")} href={link}>{title}</a>
    )
}

export default MenuLink