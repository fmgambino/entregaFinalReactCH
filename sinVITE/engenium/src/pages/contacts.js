import { Grid } from '@mui/material';
import './styles/contacts.css';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { saveMsg } from '../components/ItemCollection/ItemCollection';
import './styles/view.css';
import Footer from '../components/Footer/Footer';

const Contacto = () => {
    const [validation, setValidation] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMessage] = useState("");
    const [flag, setFlag] = useState(true);
    const [msgId, setMsgId] = useState("");

    const iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.234748527497!2d-65.19778268495674!3d-26.832484883162305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225ce6ab2c9f65%3A0x65e8bfeafa1c151b!2sELECTR%C3%93NICA%20GAMBINO!5e0!3m2!1ses-419!2sar!4v1658193980855!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    const handleSubmit = (e) => {
        e.preventDefault();
    
        setValidation("");
        if (!name || !email || !msg) {
            setValidation("(*)Son campos OBLIGATORIOS para realizar la consulta.");
            return false;
        }
        const newMessage = {
            person:  name,
            mail: email,
            date: new Date(),
            message: msg
        }
        
        console.log(newMessage);
        setFlag(false)
        saveMsg(newMessage)
            .then((respuesta)=>{
                //console.log("1 - Respuesta mostrada en cart: ",respuesta);
                //clear();
                setMsgId(respuesta);
            });       
    }
    
    const sendNewMessage = () => {
        setName("");
        setEmail("");
        setMessage("");
        setMsgId("");
        setFlag(true);
    }

    const flagMessage = () => {
        if(flag===true){
            return(
                <>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Cómo podemos ayudarte?</legend>
                            <Grid container spacing={0}>
                                <Grid item md={6} xs={12}>
                                    <div>
                                        <label className="contact__label">Nombre y Apellido(*)</label>
                                        <input className="contact__input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>    
                                    </div>
                                    <div>
                                        <label className="contact__label">Mail(*)</label>
                                        <input className="contact__input" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>    
                                    </div>
                                    {(validation === ''? '': <p>{validation}</p>)}
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <div>
                                        <label className="contact__label">Mensaje(*)</label>
                                        <textarea id="msg" name="msg" value={msg} placeholder="Escriba aqui su consulta" onChange={(e) => setMessage(e.target.value)}></textarea>
                                        <div className="contact__divbtn">
                                            <input type="submit" className="contact__submit" value="ENVIAR"/>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>   
                        </fieldset>
                        
                    </form>
                </>
            )
        }else{
            return(
                <>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>{name} su mensaje se envio exitosamente.</legend>
                            <p>El ID de su mensaje es: {msgId}</p>
                            <p>¿Desea enviar un nuevo mensaje?</p>
                            <Button variant="contained" onClick={sendNewMessage}>SI</Button>
                        </fieldset>
                    </form>
                </>
            )

        }
    }
      
    return (
        <>
            <Container>
                <Grid container spacing={0} sx={{mt: 2}}>
                    <Grid item md={6} xs={12}>
                        <div dangerouslySetInnerHTML={{__html: iframeSource}} className="div__mapa"></div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div>
                            <ul>
                                <li>San Miguel de Tucuman, Tucuman, Argentina</li>
                                <li>(+54 11)2409-9788</li>
                                <li>electronicagambino@gmail.com</li>
                                <li>Horario de atencion: Lunes a Viernes de 10:00 a 18:00 hs</li>
                            </ul>    
                        </div>                            
                    </Grid>
                </Grid>  
                <Box
                    sx={{
                        width: 'auto',
                        bgcolor: '#d2e7f7',
                        borderRadius: 5,
                        mb: '28%',
                        mt: 2
                    }}
                >
                    {flagMessage()}                   
                </Box>
            </Container>
            <Footer/>        

        </>
    )
}

export default Contacto