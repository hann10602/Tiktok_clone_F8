import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import AccountItems from './AccountItems';
import PropTypes from 'prop-types';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    const [suggestList, setSuggestList] = useState([]);

    useLayoutEffect(() => {
        const fetchApi = async () => {
            const result = await searchService.search("le");
            setSuggestList(result);
        };

        fetchApi();
    }, []);

    const handleSuggestList = useMemo(() => {
        return suggestList.map((data) => {
            return <AccountItems key={data.id} data={data}/>
        })
    });

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {handleSuggestList}
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string,
};

export default SuggestedAccount;
