import axios from "axios"
import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal";
import { IAnimalResponse } from "../models/IAnimalResponse";


export function Animals () {
    const [animal, setAnimals] = useState<IAnimal[]>([]);
    
    useEffect(() => {
        
        axios.get<IAnimalResponse>('https://animals.azurewebsites.net/api/animals/')
        .then((response) => {
            setAnimals(response.data.Search);  
        });
    }); 

return<></>
}

    // let animalHTML = animal.map((animal => {
    //     return (
    //     <div key={animal.id}>
    //         <p>{animal.name}</p>
    //     </div>    );
    // }))

    // return <>{<div>{animalHTML}</div>}</> }