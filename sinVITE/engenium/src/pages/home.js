import { Button } from "@mui/material";
import './styles/home.css';
import { Link } from 'react-router-dom';
import './styles/view.css';
import Footer from "../components/Footer/Footer";

const Home = () => {
    return(
        <>
            <div className="container_div generalView">
                <div className="div__position">
                    <h2>Somos lideres en instalaciones y equipamiento industrial</h2>
                    <div className="home_divbtn">
                        <Button variant="contained" className="home__btn"><Link to ="/aboutus" className="link-end">Conocé más</Link></Button>                              
                    </div>    
                </div>   
            </div> 
            <Footer/>         
        </>
        
    )
}

export default Home