import { useEffect, useState } from "react"
import {useParams } from "react-router-dom";
import { IExtendedAnimal } from "../models/IExtendedAnimal";
import { StyledButton } from "./StyledButton";
import { StyledHeader1, StyledImg, StyledLayoutDiv } from "./Layout";


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
    <StyledHeader1 color='bisque'>{extendedAnimal?.name}!</StyledHeader1>
    {<StyledImg src={extendedAnimal?.imageUrl} alt='pix'/>}
        <StyledLayoutDiv>{extendedAnimal?.longDescription}</StyledLayoutDiv>
    <h4>matad senast = {extendedAnimal?.lastFed}</h4>
    <StyledButton color='cadetblue'  disabled ={extendedAnimal?.isFed} onClick={()=>handleClick()}>Mata mig</StyledButton>
    </div>
    </> );
    }

