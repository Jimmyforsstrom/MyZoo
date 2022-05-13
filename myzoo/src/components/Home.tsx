import zoopic from '../images/zooPix.jpg';
import { StyledButton } from './StyledButton';
import {StyledImg, StyledLayoutDiv} from './Layout';

    export const Home = () => {
    
        function handleClick() {
            console.log('the page is under construction');
        }
    
return  <StyledLayoutDiv>

    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Magni, id atque mollitia perspiciatis sed nostrum fuga esse omnis dolor necessitatibus!
         Consequuntur reiciendis aspernatur rerum veritatis 
        dolores adipisci quia esse iure? Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Eligendi vel cupiditate debitis quidem itaque ut reiciendis ratione alias 
        labore obcaecati, impedit, 
        quaerat consequatur quia distinctio natus exercitationem quas ipsum! Quam.</h5>
        
    <StyledImg src={zoopic}/>
    <StyledButton color='green' onClick={handleClick}>more info</StyledButton>
    </StyledLayoutDiv>

}