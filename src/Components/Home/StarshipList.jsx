
import { StarWarsContext } from '../../Context/StarWarsContext';
import OneStarship from './OneStarship';
import React, { useContext } from 'react';

function StarshipList() {
  const {handleClick, count, handleClickBack}=useContext(StarWarsContext);

    return (
    <div>
        <div className='vehicles'>
          <OneStarship/>
        </div>
        <div className='flex'>
          <button className='more' onClick={handleClick} disabled={count===4}>
            More Starships...
          </button>
          <button className='more' onClick={handleClickBack} style={{marginLeft: '5px'}}>Turn Back</button>
        </div>
    </div>
  )
}
export default StarshipList
