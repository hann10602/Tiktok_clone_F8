import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import Button from '~/Components/Button/Button';
import AccountItemPreview from './AccountItemPreview/AccountItemPreview';

const cx = classNames.bind(styles);

function AccountItems({ data }) {
    const AccountItemRender = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountItemPreview data={data}/>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 500]} placement="bottom-start" render={(attrs) => AccountItemRender(attrs)}>
                <Link to={`/profile`} className={cx('account')}>
                    <img
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.full_name}
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>{data.nickname}</span>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </h4>
                        <span className={cx('username')}>{data.full_name}</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItems.propTypes = {
    data: PropTypes.object,
};

export default AccountItems;
