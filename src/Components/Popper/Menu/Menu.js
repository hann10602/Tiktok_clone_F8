import Tippy from '@tippyjs/react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/Components/Popper';
import MenuItem from './MenuItem';
import MenuHeader from './MenuItem';
import styles from './MenuItem/Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.splice(0, 1))
    }

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            offset={[12, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-popper')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {current.title && (
                            <MenuHeader
                                title={current.title}
                                onBack={() => setHistory(history.splice(0, history.length - 1))}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node,
    item: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
