import { useEffect, useState } from "react"
import {useParams } from "react-router-dom";
import { IExtendedAnimal } from "../models/IExtendedAnimal";
 
export const Animal = () => {

    const [extendedAnimal, setExAnimal] = useState <IExtendedAnimal>();
    const params = useParams();
    
    useEffect(() => {
        let animalsFromLS : IExtendedAnimal[] = JSON.parse(localStorage.getItem('myanimals') || '[]');
        animalsFromLS.map((animals : IExtendedAnimal) => {
            if(params.id == animals.id){
                setExAnimal(animals);}              
            });
        },[]);

       
    function handleClick() {
        const date = new Date().toLocaleString();
        
        let animalsFromLS = JSON.parse(localStorage.getItem('myanimals') || '[]');
        animalsFromLS.map((animals : IExtendedAnimal) => {
            if(params.id == animals.id){
                
                setExAnimal(animals);
                
                animals.isFed = true;    
                animals.lastFed = date; 
                
                // Date.parse(Date()) - Date.parse(animals.lastFed) > 4000 * 60 * 60;
                
                localStorage.setItem('myanimals', JSON.stringify(animalsFromLS));
                
                //Har satt timer på 10 sek bara för att testa
                setTimeout(() => {
                    console.log(animals.name + ' behöver mer käk');
                    animals.isFed = false;
                    localStorage.setItem('myanimals', JSON.stringify(animalsFromLS));
                    alert(animals.name + ' är mer hungrig');
                    },10000);
                
                }}) }
            
        return (<> <div key={extendedAnimal?.id}>
    <h2>{extendedAnimal?.name}</h2>
    {<img src={extendedAnimal?.imageUrl} alt='pix'/>}
        <div>{extendedAnimal?.longDescription}</div>
    <h4>matad senast = {extendedAnimal?.lastFed}</h4>
    <button disabled ={extendedAnimal?.isFed} onClick={()=>handleClick()}>Mata mig</button>
    </div>
    </> );
    }

