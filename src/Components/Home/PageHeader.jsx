import React, { useContext, useState } from 'react'
import { StarWarsContext } from '../../Context/StarWarsContext';

export default function PageHeader() {

  const {handleFilter, inputValue, setInputValue} = useContext(StarWarsContext);

  

  return (
    <div>
        <div className='header'>
          <div className="logo">
            <img src='/logo.png' alt="" />
          </div>
          <div className="search">
            <span>Name/Model: </span>
            <input type="text" placeholder='Name/Model' 
            onChange={handleFilter}
            value= {inputValue}
            />
            <button>Filter</button>
          </div>
        </div>
    </div>
  );
}
