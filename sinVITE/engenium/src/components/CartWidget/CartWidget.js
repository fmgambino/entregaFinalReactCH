import './CartWidget.css';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';

 
const CartWidget = () => { 
    const{ prodsInCart } = useContext(CartContext);

    function DisplayCartWidget({condition}){
        if(condition > 0){
            return(
                <>
                    <div className="container-cart">
                        <Button color="inherit" className='carrito__btn'>
                            <Link to ="/cart" className="link-end">
                                <ShoppingCartTwoToneIcon />                  
                                {<h2 className='count-items'>{prodsInCart}</h2>}    
                            </Link>                                  
                        </Button>
                    </div>    
                </>
            )            
        }else{
            return(
                <>
                    {console.log("no hay nada")}
                </>
            )
        }
    }
    
    return (
        <>
           <DisplayCartWidget condition={prodsInCart}/> 
        </>
    ) 
}

export default CartWidget