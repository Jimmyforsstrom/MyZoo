
import { useEffect, useState } from "react"
import {useParams } from "react-router-dom";
import { IExtendedAnimal } from "../models/IExtendedAnimal";
 
export const Animal = () => {

    const [extendedAnimal, setExAnimal] = useState <IExtendedAnimal>();
    const [buttonDisable, setButtonDisable] = useState (false);
    const params = useParams();
    
    useEffect(() => {
        let animalsFromLS : IExtendedAnimal[] = JSON.parse(localStorage.getItem('myanimals') || '[]');
        animalsFromLS.map((animals : IExtendedAnimal) => {
            if(params.id == animals.id){
                setExAnimal(animals);}              
            });
        },[]);
        //Timer med alert efter att man tryck på (mata mig) knappen
        function timeLeft () {
            setButtonDisable(true);
            setTimeout(() => {
                
                alert('tack, nästa tid för mat är om 3timmar tack');
                setButtonDisable(false)},3000);
            }
            
            
            function handleClick() {
                const date = new Date().toLocaleString();
                
                let animalsFromLS = JSON.parse(localStorage.getItem('myanimals') || '[]');
                animalsFromLS.map((animals : IExtendedAnimal) => {
                    if(params.id == animals.id){

                        setExAnimal(animals);
                         
                    animals.isFed = true;    
                    animals.lastFed = date;                                  

                    // if (Date.parse(Date()) - Date.parse(animals.lastFed) > 4000 * 60 * 60) {
                    localStorage.setItem('myanimals', JSON.stringify(animalsFromLS));
                    // }
                    timeLeft();
                       
                }}) }
            
        return (<>
    <h2>{extendedAnimal?.name}</h2>
    {<img src={extendedAnimal?.imageUrl} alt='pix'/>}
        <div>{extendedAnimal?.longDescription}</div>
    <h4>matad senast = {extendedAnimal?.lastFed}</h4>
    <button onClick={() =>handleClick()} disabled ={buttonDisable}>Mata mig</button>

    </> );
    
    }

