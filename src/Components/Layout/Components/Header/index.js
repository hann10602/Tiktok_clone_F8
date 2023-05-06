import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisH,
    faEllipsisVertical,
    faGear,
    faMoon,
    faPlus,
    faRightToBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images/index.js';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu';
import { faHandPointer, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { MessagesIcon, InboxIcon } from '~/Components/Icon';
import Image from '~/Components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const currentUser = true;

const menu_item = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faEllipsisH} />,
        title: 'Keyboard shortcuts',
    },
];

const menu_user = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@user',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faEllipsisH} />,
        title: 'Keyboard and shortcut',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
    {
        icon: <FontAwesomeIcon icon={faRightToBracket} />,
        title: 'Settings',
        separate: true,
    },
];

const handleMenu = (children) => {};

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000);
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="TikTok" />
                    </div>
                    <Search/>
                    <div className={cx('action')}>
                        <Button normal leftIcon={<FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />}>
                            Upload
                        </Button>
                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 500]} content="Messages" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessagesIcon />
                                    </button>
                                </Tippy>
                                <Tippy trigger="click" content="Upload" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button primary>Log In</Button>
                            </>
                        )}
                        <Menu items={currentUser ? menu_user : menu_item} onChange={(item) => handleMenu(item)}>
                            {currentUser ? (
                                <Image
                                    className={cx('avatar')}
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8d949261a3949b3e49ecce00f6f147c2~c5_100x100.jpeg?x-expires=1683093600&amp;x-signature=o5RlKT6ZVMaurmTRM618YX%2BUN4k%3D"
                                    alt="asd"
                                    fallback="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
