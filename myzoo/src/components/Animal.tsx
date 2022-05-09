import {useState } from "react"
import {useParams } from "react-router-dom";
import { IExtendedAnimal } from "../models/IExtendedAnimal";

export const Animal = () => {
    const [extendedAnimal, setExAnimal] = useState <IExtendedAnimal>();
    const [buttonDisabled, setButtonDisabled] = useState (false);
    let params = useParams(); 
    
            // useEffect(() => {
        //         const animalsFromLS = JSON.parse(localStorage.getItem('myanimals') || '[]');
        //         animalsFromLS.map((animal : IExtendedAnimal) => 
        //     { if(params.id === animal.id.toString())
        //         { setExAnimal(animal); 
        //     }
        // {
        // return <>{extendedAnimal?.name}</>
        // }   
    function handleClick() {
    let animalsFromLS = JSON.parse(localStorage.getItem('myanimals') || '[]');
    
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);
    
    animalsFromLS.map((animal : IExtendedAnimal) => 
    {
        if(params.id === animal.id.toString())
        {  
            setExAnimal(animal); 
            // uppdaterar om djuret är matat
            animal.isFed = true; 
            animal.lastFed = dateTime;
            localStorage.setItem('myanimals', JSON.stringify(animalsFromLS));
            console.log(animal.name +' har nu blivit matat, tackar');
            console.log('är matat ' + animal.isFed);
            
        }

        setButtonDisabled(true);
        setTimeout(() => {
           setButtonDisabled(false)},2000); 
        });
    }
 
 
    return ( <div>
        <button onClick={handleClick} id='buttonStyle'>feed me</button>
        <p>last fed time: {extendedAnimal?.lastFed}</p>
        <p>latin name: {extendedAnimal?.latinName}</p>
         <p>short description: {extendedAnimal?.shortDescription}</p>
         <img src={extendedAnimal?.imageUrl} alt="image"/>
        </div> 
        );
    }
    
                
                
    
        
 

