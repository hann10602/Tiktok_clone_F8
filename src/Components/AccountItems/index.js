import classNames from "classnames/bind"
import styles from "./AccountItems.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <>
            <div className={cx("wrapper")}>
                <img className={cx("avatar")} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8d949261a3949b3e49ecce00f6f147c2~c5_100x100.jpeg?x-expires=1683093600&amp;x-signature=o5RlKT6ZVMaurmTRM618YX%2BUN4k%3D"/>
                <div className={cx("info")}>
                    <h4 className={cx("name")}>
                        <span>nguyenngocha</span>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx("check")}/>
                    </h4>
                    <span className={cx("username")}>Nguyễn Ngọc Hà</span>
                </div>
            </div>
        </>
    )
}

export default AccountItems