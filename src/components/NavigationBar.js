import {Link} from 'react-router-dom';
import logo from './assets/logo.png';

const NavigationBar = ()=> {
    return(
        <div className='SideNav'>
            <div className='logo-container'>    
                <img className='logo' alt='#' src={logo}/>  
            </div>

            <div className='segmentor'></div>

            <nav>
                <ul>
                    <div className='nav-links'> <Link to={'/'}> <h2><li> Dashboard </li></h2></Link> </div>
                    <div className='nav-links nav-links-active'> <Link to={'/datacompare'}> <h2><li> Data Comparison </li></h2></Link> </div>
                    <div className='nav-link'> <Link to={'/timeline'}> <h2><li> Timeline </li></h2> </Link> </div>   
                </ul>
            </nav> 

        </div>
    )
}

export default NavigationBar;