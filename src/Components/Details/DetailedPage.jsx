import React from 'react'

function DetailedPage({index, item}) {
    
  return (
    <div>
            <div className='frame' key={index}>
            <div className='starshipDetail flex' style={{flexDirection: 'column'}}>
              <div >
                <h1 className='card-header'>{item.name}</h1>
              </div>
              <div className='image-con flex'>
                <img src="/starship.jpg" alt="" />
              </div>
              <div className='card-info'>
                <div>
                  <p><b>Model: </b><span>{item.model}</span></p>
                  <p><b>Hyperdrive Rating: </b><span>{item.hyperdrive_rating}</span></p>
                  <p><b>Passengers: </b><span>{item.passengers}</span></p>
                  <p><b>Max Atmosphering Speed: </b><span>{item.max_atmosphering_speed}</span></p>
                  <p><b>Manufacturer: </b><span>{item.manufacturer}</span></p>
                  <p><b>Crew: </b><span>{item.crew}</span> </p>
                  <p><b>Cargo Capacity: </b><span>{item.cargo_capacity}</span></p>
                </div>
              </div>
            </div>   
          </div>
        
        
    </div>
  )
}

export default DetailedPage