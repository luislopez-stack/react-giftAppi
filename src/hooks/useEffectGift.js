import React, {useEffect, useState} from 'react';
import {getGifsAsync} from '../helpers/getGifsURL';

export const useEffectGift = (category) => {
 
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifsAsync(category)
            .then( imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            })
    }, [category])

    return state;
}

