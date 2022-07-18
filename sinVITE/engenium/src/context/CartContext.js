import { createContext } from "react";
import { useState } from 'react';  

const CartContext = createContext();

const CartContextProvider = ({children}) =>{       
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('saveCart')) || []);
    const [preciosItem, setPreciosItem] = useState(JSON.parse(localStorage.getItem('saveArrayPrice')) || []);
    const [quantityItem, setQuantityItem] = useState(JSON.parse(localStorage.getItem('saveArrayQuantity')) || []);

    const [prodsInCart, setProdsInCart] = useState( parseInt(localStorage.getItem('saveQuantity')) || 0);
    const [prodsPrice, setProdsPrice] = useState( parseInt(localStorage.getItem('savePrice')) || 0);

    const [boton,setBoton]=useState(false);//-------->Sirve para setear los botones del carrito en disabled o enabled

    const functionStorage = (v,w,x,y,z) =>{
        localStorage.setItem('saveArrayPrice', JSON.stringify(v));
        localStorage.setItem('saveArrayQuantity', JSON.stringify(w));
        localStorage.setItem('saveCart', JSON.stringify(x));
        localStorage.setItem('savePrice', y);
        localStorage.setItem('saveQuantity', z);
    }

    const addItem = (product) =>{
        let isInCart = cart.findIndex( cartItem => cartItem.nombre === product.nombre );
        if (isInCart === -1){
            cart.push(product);           
            preciosItem.push( (product.precio)*(product.quantity)*(1.21) )  
            quantityItem.push(product.quantity);
            setProdsPrice(preciosItem.reduce((a, b) => a + b, 0));
            setProdsInCart(quantityItem.reduce((a, b) => a + b, 0));  
            functionStorage(preciosItem,quantityItem,cart,preciosItem.reduce((a, b) => a + b, 0),quantityItem.reduce((a, b) => a + b, 0));
        }else{
            console.log("El producto ya se encontraba en el carrito"); 
        }       
    }

    const removeItem = (nombre) => {          
        let index = cart.findIndex( el => el.nombre === nombre);
        cart.splice(index, 1);
        setCart([...cart]);        

        preciosItem.length = 0;
        quantityItem.length = 0;
        setProdsPrice(0);
        setProdsInCart(0);

        for(let i=0;i<cart.length;i++){
            preciosItem.push( (cart[i].precio)*(cart[i].quantity)*(1.21) );
            quantityItem.push(cart[i].quantity);
        }
        setProdsPrice(preciosItem.reduce((a, b) => a + b, 0));
        setProdsInCart(quantityItem.reduce((a, b) => a + b, 0));   
        
        functionStorage(preciosItem,quantityItem,cart,preciosItem.reduce((a, b) => a + b, 0),quantityItem.reduce((a, b) => a + b, 0));
    }

    const clear = () => {
        setCart([]);
        setPreciosItem([]);
        setQuantityItem([]);
        setProdsInCart(0);
        setProdsPrice(0);
        functionStorage([],[],[],0,0);
    }
  
    const sumatoria=(variable)=>{       
        if(variable==="precios"){
            return prodsPrice;
        }
        if(variable==="cantidades"){
            return prodsInCart;
        }
    }

      
    const data={
        cart,
        addItem,
        clear,
        removeItem,  
        sumatoria, 
        prodsInCart,
        prodsPrice,
        setBoton,
        boton,
        setCart   
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export { CartContextProvider, CartContext };