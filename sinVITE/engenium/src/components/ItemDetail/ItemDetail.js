import {Grid} from '@mui/material';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../../pages/styles/view.css'

const ItemDetail = ({data}) => {
    const[showState, setShowState]= useState(false);
    const{ addItem} = useContext(CartContext);
    let botonEstados;

    const agregarCantidadAlCarrito = (cantidad) => {
        data = {
            ...data,
            quantity:cantidad
        }
        addItem(data);      
    }

    const irCarrito = () => {
        if(botonEstados){
            botonEstados=false;
           
            return(
                <div className="container-btn"><Button variant="contained" className="btn__end"><Link to ="/cart" className="link-end">Terminar mi compra</Link></Button></div>
            )
        }
    }
    
    return (
        <>
            <div className="margin-boxies">
            <Grid className="border-grid" container spacing={0}>
                <Grid className="border-gridSpacing" item md={4} xs={12}>
                    <img className="img-Detail" alt="FOTO PRODUCTO" src={`../${data.imagen}`} />
                </Grid>

                <Grid className="border-gridSpacing" item md={6} xs={12}>
                    <h2 className="h2-Detail">{data.nombre}</h2>
                    <div className="div-Detail">
                        <p>{data.descripcion}</p>
                        <p>Id: {data.id}</p>     
                    </div>
                    <Grid container spacing={0}>
                        <Grid  item md={6} xs={12}>
                            <div className="grid-interno">
                                {showState===false ?
                                    <ItemCount stock={data.stock} initial={1} onAdd={agregarCantidadAlCarrito} setShowState={setShowState} itemProducto={data}/> 
                                    :
                                    <>
                                        <div className="container-btn"><Button variant="contained" className="btn__end"><Link to ="/products" className="link-end">Volver a productos</Link></Button></div> 
                                        {botonEstados = true}
                                    </>
                                }     
                            </div>      
                        </Grid>  
                        <Grid item md={6} xs={12}>
                            {irCarrito()}
                        </Grid>   
                    </Grid>                                   
                </Grid>

                <Grid item md={2} xs={12}>
                    <h2 className="h2-Detail">Precio</h2>
                    <div className="div-Detail">
                        <p>u$s {data.precio}</p>    
                    </div>                    
                </Grid>
            </Grid>
           </div>  
        </>  
    ) 
}

export default ItemDetail