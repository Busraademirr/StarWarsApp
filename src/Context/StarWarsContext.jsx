
import { createContext, useState, useEffect, useMemo } from "react";
import axios from 'axios';

export const StarWarsContext =  createContext();

export const StarWarsProvider = ({children}) =>{

    const BASE_URL = " https://swapi.dev/api/starships/?page="

    const [starshipData, setStarshipData] = useState([]);

    const [count, setCount]= useState(1);

    const [combinedData, setCombinedData] = useState([]);
    

    const handleClick=()=>{
      if(count<=3){
        setCount(count+1);
      }
    }
    const handleClickBack =()=>{
      if (count>0){
        setCount(count-1);
      }
    }

    useEffect(() => {
      const getData = async (nmbr) => {
        const response = await axios.get(BASE_URL+nmbr);
        setStarshipData(response.data.results);
      };
      getData(count);
    }, [count]);

    
      async function getAllData() {
        const [response1, response2, response3] = await Promise.all([
          axios.get('https://swapi.dev/api/starships/?page=1'),
          axios.get('https://swapi.dev/api/starships/?page=2'),
          axios.get('https://swapi.dev/api/starships/?page=3')
        ]);
        const combinedData = [
           ...response1.data.results,
           ...response2.data.results,
           ...response3.data.results
        ];
        setCombinedData(combinedData);
      }
      getAllData();
   



    const [inputValue, setInputValue] = useState('');


    const handleFilter=(e)=>{
      const value= e.target.value;
      setInputValue(value);
    }

    const filteredData = ()=>{
      return combinedData.filter(item =>
        (item.name.toLowerCase().includes(inputValue.toLowerCase()) || item.model.toLowerCase().includes(inputValue.toLowerCase())));
    }

  
  const data = {starshipData, setStarshipData, count, handleClick, inputValue, setInputValue, handleFilter, filteredData, getAllData, combinedData, setCombinedData, handleClickBack};

  return (
    <StarWarsContext.Provider value={data}>
      {children}
    </StarWarsContext.Provider>
  );
}