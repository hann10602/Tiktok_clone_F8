import Button from "~/Components/Button";
import classNames from "classnames/bind"
import PropTypes from "prop-types"

import styles from "./Menu.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
    return (
        <div className={cx("menu-header")}>
            <button className={cx("menu-header-btn")} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <h4 className={cx("menu-header-title")}>{title}</h4>
        </div>
    )
}

MenuHeader.propTypes = {
    title: PropTypes.string, 
    onBack: PropTypes.func
}

export default MenuHeader