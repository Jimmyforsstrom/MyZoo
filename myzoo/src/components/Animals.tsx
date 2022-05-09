import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import './../Layout/Animals.css';

export function AnimalsList (animals : IAnimal[]){
    localStorage.setItem('myanimals', JSON.stringify(animals));
}

   export const Animals = () => { const [animals, setAnimals] = useState<IAnimal[]>([])    
   
   useEffect (() => {
    if(animals.length !==0) return;

    axios
    .get<IAnimal[]>('https://animals.azurewebsites.net/api/animals/')
    .then((response) => {setAnimals(response.data);
    });

})   

// function handleRestore() {
//     AnimalsList (animals);   

return (<> 
         {/*
          restoreKnapp för eventuella reset tryckningar
         <button onClick={handleRestore}>restore list</button> */}

    {animals.map((animals) => {
    return ( <>
            <div key={animals.id}></div>
        <Link to={'/animal/' + animals.id}>
        <p>{animals.id} {animals.name}</p>
       </Link> </> )
       
})}
</>) 
}