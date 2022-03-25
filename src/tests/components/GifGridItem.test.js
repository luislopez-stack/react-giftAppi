import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import {GifGirdItem} from '../../components/GifGirdItem';


describe('Pruebas en GiftGridItem', () => {
    
    const title = 'Titulo';
    const url = 'http:localhost';
    const wrapper = shallow(<GifGirdItem title={title} url={url}/>)

    test('should mostrar componente correctamente', () => { 
        
        expect(wrapper).toMatchSnapshot();
     })


     test('should tener parrafo con titlo', () => { 
         const p = wrapper.find('p');
         expect(p.text().trim()).toBe(title);
      })

    
      test('should tener imagen', () => { 
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
     })


     test('should tener la clase el div', () => { 
         const div = wrapper.find('div');
         //console.log(div.props().className);
         expect(div.props().className.includes('animate__fadeIn')).toBe(true)
      })
})
