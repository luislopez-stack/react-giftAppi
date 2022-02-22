import React from 'react'
import PropTypes from 'prop-types'

function GifGirdItem({id,title,url}) {
  return (
    <div className='card'>
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}

GifGirdItem.propTypes = {}

export default GifGirdItem
