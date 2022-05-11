import { isDisabled } from "@testing-library/user-event/dist/utils";
import {useEffect, useState } from "react"
import {useParams } from "react-router-dom";
import { IExtendedAnimal } from "../models/IExtendedAnimal";

export const Animal = () => {

    const [extendedAnimal, setExAnimal] = useState <IExtendedAnimal>();
    const [buttonDisable, setButtonDisable] = useState (false);
    const params = useParams();


    
    useEffect(() => {
        let animalsFromLS = JSON.parse(localStorage.getItem('myanimals') || '[]');
        animalsFromLS.forEach((animals : IExtendedAnimal) => {
            if(params.id == animals.id){
                setExAnimal(animals);}              
            });
        },[]);
        
        function timeLeft () {
            setButtonDisable(true);
            setTimeout(() => {
                setButtonDisable(false)},36000);
            }
            
            function handleClick() {
//            timeLeft();
            
            let animalsFromLS = JSON.parse(localStorage.getItem('myanimals') || '[]');
            animalsFromLS.forEach((animals : IExtendedAnimal) => {
                if(params.id == animals.id){
                    setExAnimal(animals);
                    animals.isFed = true;
                    let dateTime = new Date();
                    animals.lastFed = dateTime.toTimeString();                    
                       
                    localStorage.setItem('myanimals', JSON.stringify(animalsFromLS));
                
                }});
        }  
    return <>
    <h2>{extendedAnimal?.name}</h2>
    {/* <img src={extendedAnimal?.imageUrl} alt='pix'/> */}
        <div>{extendedAnimal?.shortDescription}</div>
    <h4>matad senast = {extendedAnimal?.lastFed}</h4>
    <button onClick={handleClick} disabled ={buttonDisable}>Mata mig</button>
    </> ;

    }
    
