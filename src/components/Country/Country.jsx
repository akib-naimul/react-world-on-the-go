import React from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country)

    const handleVisited= ()=>{
        
    }

    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name  -  : {country.name.common} </h3>
            <p>Region :  {country.region.region} </p>
            <p>Area : {country.area.area} </p>
            <p>Capital: {country.capital.capital} </p>

            <button onClick={handleVisited}>Not Visited</button>
            
        </div>
    );
};

export default Country;