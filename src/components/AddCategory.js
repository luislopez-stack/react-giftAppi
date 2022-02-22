import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddCategory({ setCategories }) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setCategories(cats => [inputValue, ...cats]);
    }


  return (
      <>
        <form onSubmit={handleSubmit}>

            <h4>{inputValue}</h4>
            <input
                type="text"
                vaue={inputValue}
                onChange={handleInputChange}/>

        </form>
      </>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
