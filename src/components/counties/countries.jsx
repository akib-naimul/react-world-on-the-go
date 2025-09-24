
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries =(country)=>{
        console.log(country)
    }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    console.log(countries)
    return (
        <div >
            <h1>Counties List : {countries.length} </h1>
            <h2>Total Country Visited :   </h2>
            <div className='countries'>
                {
                  countries.map(country => <Country country={country}  handleVisitedCountries ={handleVisitedCountries } ></Country>)
                }

            </div>
            
        </div>
    );
};

export default Countries;