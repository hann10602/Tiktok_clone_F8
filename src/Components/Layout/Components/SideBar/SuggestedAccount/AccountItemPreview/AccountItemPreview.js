import classNames from 'classnames/bind';

import styles from './AccountItemPreview.module.scss';
import Button from '~/Components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItemPreview({ data }) {
    return (
        <div className={cx('preview')}>
            <div className={cx('preview-header')}>
                <img className={cx('preview-avatar')} src={data.avatar} alt={data.full_name} />
                <button className={cx('preview-btn')}>Follow</button>
            </div>
            <h3 className={cx('preview-name')}>
                <span>{data.nickname}</span>
                <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
            </h3>
            <span className={cx('preview-username')}>{data.full_name}</span>
            <div className={cx('preview-stat')}>
                <b>{data.followers_count}</b>
                <span>Followers</span>
                <b>{data.likes_count}</b>
                <span>Likes</span>
            </div>
        </div>
    );
}

export default AccountItemPreview;
