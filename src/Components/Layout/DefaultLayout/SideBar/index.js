import styles from "./Sider.module.scss"
import classNames from "classnames/bind"

function Sidebar() {
    const cx = classNames.bind(styles);

    return (
        <>
            <div className={cx("wrapper")}>
                side
            </div>
        </>
    )
}

export default Sidebar