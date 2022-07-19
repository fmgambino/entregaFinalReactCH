import {Grid} from '@mui/material';
import YoutubeEmbed from '../components/YoutubeComponent/YoutubeEmbed';
import '../../src/components/YoutubeComponent/styles.css';
import './styles/aboutus.css';
import './styles/view.css';
import Footer from '../components/Footer/Footer';

const Aboutus = () => {
    return(
        <>
            <div>
                <Grid container spacing={0}>
                    <Grid item md={6} xs={12}> 
                        <YoutubeEmbed embedId="tIIJME8-au8" />                                                             
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div className="div_parrafos">
                            <p><b>Electronica Gamino</b> nace por la actitud emprendedora de un equipo de <b>Ingenieros/Tecnicos</b> con marcada experiencia en la prestación de soluciones integrales de <b>automatización y control</b> para la industria.</p>
                            <p>El constante crecimiento del mercado en el marco de la <b>innovación tecnológica</b> nos brinda la posibilidad de desarrollarnos para y con nuestros clientes; compromiso que asumimos con total confianza en nuestro grupo de profesionales altamente capacitados.</p>
                            <p>Nuestro campo de acción alcanza a toda actividad que requiera mejorar y optimizar la productividad, asegurar una constante de alta calidad, garantizando la prestación continua de servicio.</p>   
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div  className="div_parrafos">
                            <p>Desde nuestra constitución, aportamos <b>soluciones pragmáticas</b> a los requerimientos de modernización y re-equipamiento tecnológico, ofreciendo una amplia gama de productos y servicios con <b>tecnología de última generación</b>. Esta se amplía año tras año, con el objetivo de ofrecer mayor integración a las soluciones existentes, satisfaciendo las necesidades del cliente en forma cada vez más completa. Mercados cada día más competitivos plantean nuevos desafíos, imposibles de superar sin la utilización de <b>tecnología de avanzada</b>.</p>
                            <p>Nuestra vision es afianzarnos como <b>proveedores de tecnología</b>, generando soluciones a medida para nuestros clientes, descubrir sus principales necesidades y utilizar nuestra capacidad de desarrollar soluciones para satisfacerlas.</p>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}> 
                        <div className="div_imgcontainer">
                            <img src="tablero.jpg" alt="Tablero electrico" className="img__width"/>    
                        </div>    
                    </Grid>
                </Grid>    
            </div>
            <Footer/>
        </>   
    )
}

export default Aboutus