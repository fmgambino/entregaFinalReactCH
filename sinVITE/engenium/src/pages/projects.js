import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";
import './styles/projects.css';
import { Grid } from '@mui/material';
import './styles/view.css';
import Footer from '../components/Footer/Footer';

export default function DotsMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    

    const labels = [
        {
            titulo: "Programacion de PLC para Ingenio azucarero",
            label: "Se realizaron diversos proyectos y servicios de asistencia para industrias alimenticias, especialmente para ingenios azucareros. También programación de control sobre Transportes de líneas, revampings de sistemas, y servicios de asistencia para modificaciones en programas de PLC y Paneles. Nuestros principales clientes se encuentran radicados en la provincia de Tucumán",
            imagen : "programacionPLC.jpg"
        },
        {
            titulo:"Diseños de tablero para clasificadora de granos",
            label:"En este proyecto se diseño un tablero que permitió un monitoreo preciso de todo el proceso de clasificación de semillas.El tablero con un sistema integrado, permite obtener información en tiempo real de todos los dispositivos que forman parte de dicho proceso, ya sea motores, transportes, válvulas, y demás. Con esto se logra centralizar y mejorar el acceso a información útil para aumentar los niveles de productividad. Se trabajó con un PLC Allen Bradley CompactLogix y software SCADA FactoryTalk View.",
            imagen : "tablero.jpg"
        },
        {
            titulo:"Diseños de sistemas SCADA para sistema de Generacion Distribuida",
            label:"Se realizaron distintos proyectos basados en configuración de RTUs. Estos equipos permiten comunicarse con diferentes tipos de dispositivos de medición y control dentro de centrales de generación y distribución electrica, como Seccionadores, Interruptores, Transformadores de Tensión e Intensidad. También permiten enviar toda la información concentrada a un sistema SCADA, logrando gestionar y monitorear todos los dispositivos en una central de operación. Se trabajó con protocolos de comunicación Modbus RTU, Modbus TCP, IEC 61850, DNP3, PROFIBUS, PROFINET.",
            imagen : "scada.jpg"
        }
    ];

    const maxSteps = labels.length - 1;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if(activeStep === maxSteps){
            setActiveStep(0)
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        if(activeStep === 0){
            setActiveStep(maxSteps)
        }
    };

    return (
        <>
            <div className="margin-projects">
                <div className="div__container">
                    <h2>{labels[activeStep].titulo}</h2>
                    <img alt="FOTO PRODUCTO" src={`../${labels[activeStep].imagen}`} />
                    <Grid container spacing={0}>
                        <Grid item md={3}>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <MobileStepper
                            variant="dots"
                            steps={maxSteps+1}
                            position="static"
                            activeStep={activeStep}
                            sx={{ flexGrow: 1 }}
                            nextButton={
                                <Button size="small" onClick={handleNext} >
                                
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                
                                </Button>
                            }
                            />
                        </Grid>
                        <Grid item md={3}>
                        </Grid>
                    </Grid>    
                </div>
                <p>{labels[activeStep].label}</p>

                <div className="div__container">
                    <h2>Marcas Representadas</h2>
                    <Grid container spacing={0}>
                        <Grid item md={4} xs={4}>
                            <img className="img-representantes" alt="FOTO PRODUCTO" src="../schneider.jpg"/>
                        </Grid>
                        <Grid item md={4} xs={4}>
                            <img className="img-representantes" alt="FOTO PRODUCTO" src="../kuka2.jpg"/>
                        </Grid>
                        <Grid item md={4} xs={4}>
                            <img className="img-representantes" alt="FOTO PRODUCTO" src="../siemens.png"/>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer/>
            
        </>
        
    );
}
