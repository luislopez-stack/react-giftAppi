import React, {useState} from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GiftGrid from './components/GiftGrid';

const GiftExpertApp = props => {


  const [categories, setCategories] = useState(['']);

  const handleAdd = () => {
    //setCategories([...categories,'Otras']);
    //callback donde cats tiene el estado anterior
    setCategories( cats => [...cats,'Otras']);
  }

  return (
    <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
          {
            categories.map((category) =>
              //<li key={category}>{ category }</li>
              <GiftGrid 
                category={category}
                key={ category }/>
            )
          }
        </ol>
    </>
  )
}

GiftExpertApp.propTypes = {}

export default GiftExpertApp