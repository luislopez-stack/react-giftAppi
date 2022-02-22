import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import GifGirdItem from './GifGirdItem';
import {getGifsAsync} from '../helpers/getGifsURL'

const GiftGrid = ({category}) => {

  useEffect( () => {
    getGifsAsync(category)
      .then(setImages);
  }, [category])


  const [images, setImages] = useState([]);

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
          
            {
              images.map( img => (
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