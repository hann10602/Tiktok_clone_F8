import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);

function AccountItems({ data }) {
    return (
        <>
            <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
                <img className={cx('avatar')} src={data.avatar} aly={data.full_name} />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.nickname}</span>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                    </h4>
                    <span className={cx('username')}>{data.full_name}</span>
                </div>
            </Link>
        </>
    );
}

AccountItems.propTypes = {
    data: PropTypes.object,
};

export default AccountItems;
