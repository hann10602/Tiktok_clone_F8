import Tippy from '@tippyjs/react';

import { Wrapper as PopperWrapper } from '~/Components/Popper';
import MenuItem from './MenuItem';
import MenuHeader from './MenuItem/Header';
import { useState } from 'react';

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

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
            placement='bottom-end'
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {current.title && (
                            <MenuHeader
                                title={current.title}
                                onBack={() => setHistory(history.splice(0, history.length - 1))}
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.splice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
