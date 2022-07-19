//UpperCamelCase
import './Footer.css';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const Footer = ({propiedad}) => {
    function mouseOver(varColor,varId) {
        document.getElementById(varId).style.backgroundColor = varColor;
    }
      
    function mouseOut(varId) {
        document.getElementById(varId).style.backgroundColor = "";
    } 


    return (
        <>
            <Box sx={{ bgcolor: 'text.primary' }} className={propiedad}>                  
                <Grid container spacing={0}>
                    <Grid item md={7} xs={12}>
                    
                    </Grid>
                    <Grid item md={2} xs={12}>
                        <div className="footer-div">
                            <h3 className="footer_h3">Redes Sociales</h3>
                            <ul className="footer__list footer_flex">
                                <li className="footer-item">
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-color">
                                        <FacebookIcon id="facebook" onMouseOver={()=>mouseOver('#3b5998','facebook')} onMouseOut={()=>mouseOut('facebook')}/> 
                                    </a>
                                </li>
                                <li className="footer-item">
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-color">
                                        <InstagramIcon id="instagram" onMouseOver={()=>mouseOver('#bc2a8d','instagram')} onMouseOut={()=>mouseOut('instagram')}/>
                                    </a>
                                </li>
                                <li className="footer-item">
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-color">
                                        <LinkedInIcon id="linkedin" onMouseOver={()=>mouseOver('#0e76a8','linkedin')} onMouseOut={()=>mouseOut('linkedin')}/>
                                    </a>
                                </li>
                                <li className="footer-item">
                                    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer" className="footer-color">
                                        <WhatsAppIcon id="whatsapp" onMouseOver={()=>mouseOver('#4FCE5D','whatsapp')} onMouseOut={()=>mouseOut('whatsapp')}/>
                                    </a>    
                                </li>
                            </ul>    
                        </div>                       
                    </Grid>
                    <Grid item md={3} xs={12}> 
                        <div className="footer-div">
                            <Link to ="/contacts"><h3 className="footer_h3 footer-icon">Contacto</h3></Link>
                            <ul className="footer__list">
                                <li>San Miguel de Tucuman, Tucuman, Argentina</li>
                                <li>(+54 11)2409-9788</li>
                                <li>electronicagambino@gmail.com</li>
                                <li>Horario de atencion: Lunes a Viernes de 10:00 a 18:00 hs</li>
                            </ul>                    
                        </div>                                                           
                    </Grid>
                </Grid>                                           
            </Box>        
        </>        
    ) 
}

export default Footer
