import {Link, Outlet} from 'react-router-dom';
import './../Layout/layout.css';
export const Layout = () => {


    return(
        <> <div className='layout'>
        <header> 
                  <h1>Central Park Zoo</h1>
            <nav>   
              <ul> 
                  <li><Link to='/' >hem</Link></li>
                    <li><Link to ='/Animals'>animals</Link></li>
            
                </ul>
            </nav>
        </header>
        <section>
        <aside></aside>
        <main><Outlet/> </main>
        <aside></aside>
        </section>
        <footer>
        
        </footer>
        </div>
        </>
    )
}