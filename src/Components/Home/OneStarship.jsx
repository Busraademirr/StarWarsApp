import React, { useContext } from 'react';
import { StarWarsContext } from '../../Context/StarWarsContext';
import { useNavigate } from 'react-router-dom';

function OneStarship() {
    const { starshipData, filteredData, inputValue  } = useContext(StarWarsContext);
    const navigate = useNavigate();
    
    const renderStarships = (data) => {
        
        if (!Array.isArray(data)) {
            return <p>No data available</p>;
        }
        return (
            <div className='flex' style={{flexWrap: 'wrap'}}>
            {data.map((item, index) => (
            <div key={index} onClick={()=> navigate("/starships/"+item.created)}>
                <div className="card">
                    <div className="vehicle-img">
                        <img src='/public/starhip.jpg' alt="" />
                    </div>
                    <div className="info">
                        <h1><strong>{item.name}</strong></h1>
                        <div>
                            <p><strong>Model: </strong> <span>{item.model}</span></p>
                            <p><strong>Hyperdrive Rating Rate: </strong> <span>{item.hyperdrive_rating}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        ))} 
        </div>
            
        );
    };
        return (
            <>
                {inputValue ? renderStarships(filteredData()) : renderStarships(starshipData)}
            </>
        );
}

export default OneStarship;