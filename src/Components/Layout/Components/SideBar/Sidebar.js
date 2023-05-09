import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu/Menu';
import { MenuItem } from './Menu';
import { CameraActiveIcon, CameraIcon, CompassActiveIcon, CompassIcon, HomeActiveIcon, HomeIcon, UsersActiveIcon, UsersIcon } from 'src/Components/Icon';
import config from '~/config';
import SuggestedAccount from './SuggestedAccount/SuggestedAccount';
import Button from 'src/Components/Button/Button';
import { MenuLink } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <>
            <div className={cx('wrapper')}>
                <Menu borderDown={true}>
                    <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>}/>
                    <MenuItem title="Following" to={config.routes.following} icon={<UsersIcon />} activeIcon={<UsersActiveIcon/>}/>
                    <MenuItem title="Explore" to={config.routes.explorer} icon={<CompassIcon />} lable="New" activeIcon={<CompassActiveIcon/>}/>
                    <MenuItem title="LIVE" to={config.routes.live} icon={<CameraIcon />} activeIcon={<CameraActiveIcon/>}/>
                </Menu>
                <Menu borderDown={true}>
                    <div className={cx('login')}>
                        <p className={cx('login-desc')}>Log in to follow creators, like videos, and view comments</p>
                        <Button outline large>Log in</Button>
                    </div>
                </Menu>
                <SuggestedAccount label="Suggested accounts"/>
                <Menu borderTop={true}>
                    <div className={cx('footer')}>
                        <div className={cx("link-container")}>
                            <MenuLink title="About"/>
                            <MenuLink title="Newsroom"/>
                            <MenuLink title="Contact"/>
                            <MenuLink title="Careers"/>
                            <MenuLink title="ByteDance"/>
                        </div>
                        <div className={cx("link-container")}>
                            <MenuLink title="TikTok for Good"/>
                            <MenuLink title="Advertise"/>
                            <MenuLink title="Developers"/>
                            <MenuLink title="Transparency"/>
                            <MenuLink title="TikTok Rewards"/>
                            <MenuLink title="TikTok Embeds"/>
                        </div>
                        <div className={cx("link-container")}>
                            <MenuLink title="Help"/>
                            <MenuLink title="Safety"/>
                            <MenuLink title="Terms"/>
                            <MenuLink title="Privacy"/>
                            <MenuLink title="Creator Portal"/>
                            <MenuLink title="Community Guidelines"/> 
                        </div>
                        <span className={cx("logo-name")}>© 2023 TikTok</span>
                    </div>
                </Menu>
            </div>
        </>
    );
}

export default Sidebar;
