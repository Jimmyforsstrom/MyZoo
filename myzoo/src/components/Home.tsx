
export const Home = () => {

    function handleClick() {
        console.log('my Zoo page');
        
    }
return  <div className="container">Home works!
    <h1>Here lives all the animals</h1>
    <button type="button" onClick={handleClick}>more info</button>

    </div>

}