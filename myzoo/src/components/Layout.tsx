import {Link, Outlet} from 'react-router-dom';
import './../Layout/layout.css';
export const Layout = () => {


    return(
        <> <div className='layout'>
        <header> 
            <nav>   
              <ul> 
                  <li><Link to='/' >hem</Link></li>
                    <li><Link to ='/Animals'>animals</Link></li>
            
                </ul>
            </nav>
        </header>
        <section>
        Api search for animals
        <main><Outlet/> </main>
        <aside>aside</aside>
        </section>
        <footer>footer</footer>
        </div>
        </>
    )
}