import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import PropTypes from "prop-types"

const cx = classNames.bind(styles);

function Menu({children, borderDown = false, borderTop = false}) {
    return (
        <div className={cx("menu")}>
            {borderTop && <div className={cx("border-top")}></div>}
            {children}
            {borderDown && <div className={cx("border-down")}></div>}
        </div>
    )
}

Menu.propTypes = {
    children: PropTypes.node
}

export default Menu