import PropTypes from "prop-types"

import classNames from "classnames/bind"
import Header from "~/Components/Layout/Components/Header"
import Sidebar from "~/Components/Layout/Components/SideBar/Sidebar"
import styles from "./DefaultLayout.module.scss"

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return (
        <>
            <Header />
            <div className={cx("wrapper")}>
                <div className={cx("container")}>
                    <Sidebar />
                    <div className={cx("content")}>{children}</div>
                </div>
            </div>
        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultLayout