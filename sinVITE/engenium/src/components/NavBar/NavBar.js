//UpperCamelCase
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

let variableT;
const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const showMenu=()=>{
        if(mobileOpen){
            return(
                <>
                    <ul>
                        <li>
                            <Button color="inherit" className="navbar__btn"><Link to ="/inicio" className="link-color">Inicio</Link></Button>
                        </li>
                        <li>
                            <Button color="inherit" className="navbar__btn"><Link to ="/aboutus" className="link-color">Quienes somos</Link></Button>
                        </li>
                        <li>
                            <Button color="inherit" className="navbar__btn"><Link to ="/projects" className="link-color">Proyectos</Link></Button>
                        </li>
                        <li>
                            <Button color="inherit" className="navbar__btn"><Link to ="/products" className="link-color">Productos</Link></Button>
                            <ul className="interior">
                                <li>
                                    <Button>
                                        <Link to ="/products/automatizacion" className="link-color">
                                            Automatizacion Industrial
                                        </Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button>
                                        <Link to ="/products/medidores" className="link-color">
                                            Medidores Trifasicos
                                        </Link>
                                    </Button>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Button color="inherit" className="navbar__btn"><Link to ="/contacts" className="link-color">Contacto</Link></Button>
                        </li>
                    </ul> 
                </>
            )
        }
    }

    return (
        <>
        <AppBar position="static">
            <Toolbar>
            <Grid container spacing={0}>
                <Grid item md={3} xs={12}>
                    <div className="container-logo">
                        <Link to ="/products" className="link-color">
                            <Avatar
                                className='nav-logo-img'
                                alt="Logo ENGENIUM"
                                src="../logo.png"
                                sx={{ width: 60, height: 60 }}
                            />
                           <h1>ENGENIUM</h1>      
                        </Link>                               
                    </div>    
                </Grid>
                <Grid item md={7} >
                    <div className="container-list"> 
                        <ul>
                            <li>
                                <Button color="inherit" className="navbar__btn"><Link to ="/inicio" className="link-color">Inicio</Link></Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn"><Link to ="/aboutus" className="link-color">Quienes somos</Link></Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn"><Link to ="/projects" className="link-color">Proyectos</Link></Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn"><Link to ="/products" className="link-color">Productos</Link></Button>
                                <ul className="interior">
                                    <li>
                                        <Button>
                                            <Link to ="/products/automatizacion" className="link-color">
                                                Automatizacion Industrial
                                            </Link>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <Link to ="/products/medidores" className="link-color">
                                                Medidores Trifasicos
                                            </Link>
                                        </Button>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn"><Link to ="/contacts" className="link-color">Contacto</Link></Button>
                            </li>
                        </ul>                
                    </div>
                    <div className="mobile-list">
                        <Grid container spacing={0}>
                            <Grid   item xs={6} 
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center">
                                <Button color="inherit" onClick={handleDrawerToggle} >
                                    <MenuIcon />    
                                </Button>      
                            </Grid>
                            <Grid   item xs={6}
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center">
                                        <CartWidget/>         
                            </Grid>
                            <Grid item xs={12}>
                                <div className="div_mobilelist">
                                    {showMenu()}    
                                </div>
                                
                            </Grid>
                        </Grid>   
                    </div>
                </Grid>
                <Grid 
                    item md={2}
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >   
                    <div className="desktop_divcarrito">
                        <CartWidget/>     
                    </div>                               
                                              
                </Grid>
            </Grid>                        
            </Toolbar>
        </AppBar>
        </>
        
    ) 
}

export default NavBar
export {variableT}