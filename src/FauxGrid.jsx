import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

export const FauxGrid = ({reloadDeps, extLoadFunc, data }) => {
    const reloadCount = useRef(0);
    const [internalFilter, setInternalFilter] = useState(false);

    const callExtLoadAndOtherThings = () => {
        console.log("other things");
        // passes internal filter to ext load func.
        extLoadFunc({internalFilter, reloadCount})
    }

    // run when external deps change, or internal state changes, and once initially.
    useEffect(() => {
        reloadCount.current++;
        callExtLoadAndOtherThings();
    }, [...reloadDeps, internalFilter]);

    return (
        <>
            <p>External Filter: {JSON.stringify(data?.externalFilter)}</p>
            <p>Internal Filter: {JSON.stringify(data?.internalFilter)}</p>
            <p>ReloadCount: {JSON.stringify(data?.reloadCount)}</p>
            <button onClick={() => setInternalFilter(!internalFilter)}>CHANGE INTERNAL FILTER</button>
        </>
    );
};

FauxGrid.propTypes = {
    reloadDeps: PropTypes.array.isRequired,
};