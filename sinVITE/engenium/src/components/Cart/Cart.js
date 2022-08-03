import {Grid} from '@mui/material';
import './Cart.css';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";
import { saveData } from '../ItemCollection/ItemCollection';
import {Container} from '@mui/material';
import '../../pages/styles/view.css';
import Footer from '../Footer/Footer';

const Cart = () => {
    const{ cart, clear, removeItem, sumatoria } = useContext(CartContext);
    const[deleteAll, setDeleteAll]= useState(false);
    const[delItem, setDelItem]= useState(false);

    const [validation, setValidation] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const deleteTodo = () => {
        setDeleteAll(true);
        clear();
    }

    const deleteItem = (name) => {
        removeItem(name);
        //console.log(name)
        setDelItem(true);
    }

    const gridMap = () => {
        return(
            cart.map( (elemento,i) => {
                return(
                    <>
                        <Grid key={elemento.id} className="grid-container" container spacing={0}>
                            <Grid item md={3} >
                                <div className="div-img-item">
                                    <img className='img-item' alt="Imagen Item" src={`../${elemento.imagen}`} />    
                                </div>    
                            </Grid>
                            <Grid item md={6} >
                                <h2 className="h2-item">{elemento.nombre}</h2>
                                <div className="p-group">
                                    <div className="p-item">Precio (Unidad): <p className="p-variable">u$s {elemento.precio}</p></div>
                                    <div className="p-item">Cantidad seleccionada: <p className="p-variable">{elemento.quantity}</p></div> 
                                    <div className="p-item">Stock disponible: <p className="p-variable">{elemento.stock}</p></div>   
                                </div>                        
                            </Grid>
                            <Grid item md={3} key={i}>
                                <div>
                                    <ul className="list-group">
                                        <li className="list-group-item">Sub Total: u$s {(elemento.precio)*(elemento.quantity)}</li>
                                        <li className="list-group-item">IVA: u$s {(elemento.precio)*(elemento.quantity)*(0.21)}</li>
                                        <li className="list-group-item">TOTAL: u$s {(elemento.precio)*(elemento.quantity)*(1.21)}</li>
                                        <li className="list-group-item">
                                            <div className="div-btn-ItemDelete">
                                                <Button variant="contained" className="cart__btnItem" onClick={() => deleteItem(elemento.nombre)} startIcon={<DeleteIcon />}>Eliminar Producto</Button>
                                                {/*<DisplayBtnDelete condition={endShop} posicion={"individual"} nVar={elemento.nombre}/>*/}
                                            </div>
                                        </li>
                                    </ul>     
                                </div>                               
                            </Grid>
                        </Grid>
                    </>
                ) 
            })                                               
        )   
    }

    const imprimir = () => {
        if(deleteAll === false && cart.length !== 0){
            if(delItem===false){
                return(
                    gridMap()                 
                )    
            }else{
                setDelItem(false) 
                return(
                    gridMap()                        
                )      
            }                            
        }
    }


    const displayForm = (flag) =>{
        if(flag>0){
            return(
                <div>
                    <form className="form-container" onSubmit={handleSubmit}>
                            <h2 className="form__h2">Complete sus datos</h2>
                            <div className="form__div">
                                <label className="form__label" >Nombre y Apellido</label>
                                <input className="form__input" type="text" id="name" name="name" value={name} placeholder="Ingrese su Nombre/Apellido" onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form__div">
                                <label className="form__label" >Telefono</label>
                                <input className="form__input" type="number" id="phone" name="phone" value={phone} placeholder="Ingrese su Telefono" onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <div className="form__div">
                                <label className="form__label" >Email</label>
                                <input className="form__input" type="email" id="email" name="email" value={email} placeholder="Ingrese su Email"  onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            {(validation === ''? '': <div className="form__validation">{validation}</div>)}
                            <div className="form__btncontainer">    
                                <div className="form__divbtn">
                                    {/*<Button variant="contained" className='form__btn' onClick={()=>ejecutarCompra()}>Finalizar compra</Button>*/}   
                                    <input type="submit" className="form__submit" value="Finalizar compra" />
                                </div>
                                <div className="form__divbtn"> 
                                    {<Button variant="contained" className='form__btn' onClick={deleteTodo} startIcon={<DeleteIcon />}>Vaciar carrito</Button>}    
                                    {/*<DisplayBtnDelete condition={endShop} posicion={"general"}/>*/}
                                </div>    
                            </div>
                    </form>
                </div>
            )    
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        setValidation("");
        if (!name || !phone || !email) {
            setValidation("Por favor llene los campos");
            return false;
        }
        const newOrder = {
            buyer: { name, phone, email },
            items: cart.map((item) => ({  id: item.id, name: item.nombre, quantity: item.quantity, price: item.precio })),
            date: new Date(),
            total: sumatoria("precios")
        }
        console.log(newOrder);
        saveData(newOrder)
            .then((respuesta)=>{
                // console.log("1 - Respuesta mostrada en cart: ",respuesta);
                navigate(`/comprado/${respuesta}`);
                clear();
            });        
    }

    function DisplayElements({condition}){
        if(condition>0){
            return(
                <>
                    <h3 className="h2-item">El precio Total de su compra es: u$s {sumatoria("precios")}</h3>                
                </>
            )
        }else{
            return(
                <>
                    <div className="carritoVacio">
                        <h2>No hay productos en el carrito!!!</h2> 
                        <div className="cart-delete-btn">
                            <Button variant="contained" className='cart__btn'><Link to ="/products" className="link-end">VER PRODUCTOS</Link></Button>    
                        </div>    
                    </div>
                    
                    {/*console.log("items actuales en page cart: ",sumatoria("cantidades"))*/}
                </>
            )
        }
    }

    return(
        <>
            <Container>
                <div className='cart-container'>
                    {/* {console.log("Productos existentes en PAGINA CARRITO", cart)} */}
                    {imprimir()} 
                    <DisplayElements condition={cart.length}/>  
                    {displayForm(cart.length)}                   
                </div>    
            </Container>
            <Footer/>
        </>
        
        
    )
}

export default Cart