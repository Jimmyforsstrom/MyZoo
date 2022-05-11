import {useCallback, useEffect, useState } from "react"
import {useParams } from "react-router-dom";
import { IExtendedAnimal } from "../models/IExtendedAnimal";

export const Animal = () => {

    const [extendedAnimal, setExAnimal] = useState <IExtendedAnimal>();
    const [buttonDisable, setButtonDisable] = useState (false);
    const params = useParams();
    let oldTime = new Date();
    
    
    useEffect(() => {
        let animalsFromLS = JSON.parse(localStorage.getItem('myanimals') || '[]');
        animalsFromLS.map((animals : IExtendedAnimal) => {
            if(params.id == animals.id){
                setExAnimal(animals);}              
            });
        },[]);
        
        function timeLeft () {
            setButtonDisable(true);
            setTimeout(() => {
                alert('hungrig');
                setButtonDisable(false)},3000);
            }
            

            
            function handleClick() {
                
                let animalsFromLS = JSON.parse(localStorage.getItem('myanimals') || '[]');
                animalsFromLS.map((animals : IExtendedAnimal) => {
                    if(params.id == animals.id){
                        setExAnimal(animals);
                        
                        animals.isFed = true;

                        let newTime = new Date();
                        if(newTime )
                        animals.lastFed = oldTime.toLocaleTimeString();                    
                   
                        
                        localStorage.setItem('myanimals', JSON.stringify(animalsFromLS));
                        // timeLeft();
                
                }}) }
            
        return (<>
    <h2>{extendedAnimal?.name}</h2>
    {/* <img src={extendedAnimal?.imageUrl} alt='pix'/> */}
        <div>{extendedAnimal?.shortDescription}</div>
    <h4>matad senast = {extendedAnimal?.lastFed}</h4>
    <button onClick={() =>handleClick()} disabled ={buttonDisable}>Mata mig</button>
    </> );
    
    }

