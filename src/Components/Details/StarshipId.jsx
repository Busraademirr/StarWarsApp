import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import DetailedPage from './DetailedPage';
import { StarWarsContext } from '../../Context/StarWarsContext';

function StarshipId() {

  const navigate = useNavigate();
  const {created} = useParams();
  console.log(created);
  
  const { starshipData} = useContext(StarWarsContext);

  return (
    <div>
      <div className='icon flex nav' onClick={()=>navigate(("/"))}>
        <RiArrowGoBackFill />
      </div>
      <div>
      {starshipData.map((item)=>{
        if (item.created==created) {
          return(
            <DetailedPage key={item.created} item={item}/>);
        }
        
      })}
      </div>
      
    </div>
  )
}

export default StarshipId