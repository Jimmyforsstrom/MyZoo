import axios from "axios";
import { useEffect, useState } from "react";
import { IExtendedAnimal } from "../models/IExtendedAnimal";
import './../Layout/about.css';



export function About () {

    const [about, setAbout] = useState<IExtendedAnimal[]>([])

   

    useEffect(() => {
        axios.get('https://animals.azurewebsites.net/api/animals')
        .then((response) => {setAbout(response.data);
        });
    }, []);

    let listofAnimal = about.map((about) => {
        return ( <>
        <div key={about.id} className='about-container'>id: {about.id} {about.latinName}
        <p>{about.shortDescription}</p>
        {/* <div className="img-container">
            <img src={about.imageUrl} alt={about.name} />
            </div>  */}
        </div>
         
        </>)
    });

return (
<div>
    {listofAnimal}
    </div>
   )
}