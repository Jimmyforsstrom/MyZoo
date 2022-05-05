import {Link, Outlet} from 'react-router-dom';
import './../Layout/layout.css';
export const Layout = () => {


    return(
        <> <div className='layout'>
        <header>
            <nav>
                <ul>
                    <li><Link to='/' >hem</Link></li>
                    <li><Link to ='/About'>about</Link></li>
                    <li><Link to ='/Test'>test</Link></li>
                    <li><Link to ='/Test'>test2</Link></li>
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