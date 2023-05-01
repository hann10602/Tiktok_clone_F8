import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import { faCircleXmark, faClipboardUser, faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import styles from "./Header.module.scss"
import images from "~/assets/images/index.js"
import { Wrapper as PopperWrapper } from "~/Components/Popper";
import AccountItems from "~/Components/AccountItems";
import Button from "~/Components/Button";

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000)
    }, [])

    return (
        <>
            <div className={cx("wrapper")}>
                <div className={cx("inner")}>
                    <div className={cx("logo")}>
                        <img src={images.logo} alt="TikTok"/>
                    </div>
                    <Tippy 
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItems/>
                                <AccountItems/>
                                <AccountItems/>
                                <AccountItems/>
                            </PopperWrapper>
                        </div>
                    )}>
                        <div className={cx("search")}>
                            <input placeholder="Search"/>
                            <button className={cx("clear-btn")}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx("load-btn")} icon={faSpinner} />
                            <button className={cx("search-btn")} >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                    <div className={cx("action")}>
                        <Button normal leftIcon={<FontAwesomeIcon className={cx("plus-icon")} icon={faPlus}/>}>Upload</Button>
                        <Button primary>Log In</Button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header