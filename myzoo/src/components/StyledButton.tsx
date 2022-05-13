import styled from "styled-components";

interface IstyledButton {
    color : string;
}
export const StyledButton = styled.button.attrs({type:'button'})`
margin : 1.5rem;
border-radius : 5px;

color: ${(props: IstyledButton) => props.color || 'cadetblue'};
`;


 function Button() {
    return (<>
    
    <StyledButton color="green" >Mata mig</StyledButton>
    <StyledButton color="red">Mata mig</StyledButton>

    </>)
}