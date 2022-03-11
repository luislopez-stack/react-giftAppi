import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import GifGirdItem from './GifGirdItem';
import { useEffectGift } from '../hooks/useEffectGift';

const GiftGrid = ({category}) => {


  const {loading, data} = useEffectGift(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading</p>}

      <div className='card-grid'>
          
            {
              data.map( img => (
                <GifGirdItem 
                key={img.id}
                {...img}
                />
                ))
              }
          
      </div>
    </>
  )
}

GiftGrid.propTypes = {}

export default GiftGrid 