import './Item.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
/*import ItemCount from '../ItemCount/ItemCount';*/
import { Link } from 'react-router-dom';
/*import { useState } from 'react';*/
/*import { useContext } from 'react';
import CartContext from '../../context/CartContext';*/

let variableH;
const Item = ({nombreProducto, precioProducto, imagenProducto, stockProducto, idProducto,title}) =>{
    /*const[showState, setShowState]= useState(false);*/

    const otherClick = () =>{
        if (title === "Automatizacion Industrial"){
            variableH = "Automatizacion Industrial";
            // console.log(variableH);
        }
        if (title === "Medidores Trifasicos"){
            variableH = "Medidores Trifasicos";
            // console.log(variableH);
        }        
    }
    return(
        <Card sx={{ minWidth: 50 }} className="item-card">
            <CardContent>
                <div className="container-card">
                    <div>
                        <img alt="FOTO PRODUCTO" src={`../${imagenProducto}`} />
                    </div>
                    <p>{nombreProducto}</p>
                    <span>u$s {precioProducto}</span>
                    <Link to ={`/product/${idProducto}`} className="link-color"><Button variant="contained" className="card__btn" onClick={otherClick}>Detalle</Button></Link>
                    
                    
                    {/* showState===false ?
                        <ItemCount stock={stockProducto} initial={1} onAdd={nombreProducto} setShowState={setShowState} itemProducto={data}/> 
                        : 
                        <Button variant="contained" className="endCompra"><Link to ="/cart">Finalizar Compra</Link></Button>  
                    */} 

                </div>
            </CardContent>
        </Card>               
    )
}

export default Item
export {variableH}