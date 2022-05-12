import zoopic from '../images/zooPix.jpg';

import './../Layout/layout.css';
export const Home = () => {

    function handleClick() {
        console.log('the page is under construction');
    }
return  <div className="container">
    <h1>Central park Zoo</h1>

    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Magni, id atque mollitia perspiciatis sed nostrum fuga esse omnis dolor necessitatibus!
         Consequuntur reiciendis aspernatur rerum veritatis 
        dolores adipisci quia esse iure? Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Eligendi vel cupiditate debitis quidem itaque ut reiciendis ratione alias 
        labore obcaecati, impedit, 
        quaerat consequatur quia distinctio natus exercitationem quas ipsum! Quam.</h5>
        <span className='moreInfo'>
    <img src={zoopic}/>
        </span>
    <button type="button" onClick={handleClick}>more info</button>
    </div>

}