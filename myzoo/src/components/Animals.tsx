import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

export function AnimalsList (animals : IAnimal[]){
    localStorage.setItem('myanimals', JSON.stringify(animals));
}

   export const Animals = () => { const [animals, setAnimals] = useState<IAnimal[]>([])    
   
   useEffect (() => {
    //kollar om djur finns från localstorage?
     if (localStorage.getItem('myanimals')){
     setAnimals(JSON.parse(localStorage.getItem('myanimals') || '[]'))} 
      else {

    //annars hämta från API´t nedanför 
    axios
    .get<IAnimal[]>('https://animals.azurewebsites.net/api/animals/')
    .then((response) => {setAnimals(response.data); }
    );
}}, [])   

return (<>    
    {animals.map((animals) => {
    return ( <>
            <div key={animals.id}></div>
            <Link to={'/animal/' + animals.id}>
            <div className="animalcard"><p>{animals.id}. ({animals.latinName}). Namn = {animals.name}</p>
            </div></Link>
            <h6>senast matad = {animals.lastFed} </h6>
        </> ) 
})}
</>) 
}