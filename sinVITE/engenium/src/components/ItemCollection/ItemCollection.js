import { addDoc, collection, getDocs } from "firebase/firestore";   
import db from "../../utils/firebaseConfig";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";


const GetProducts = () =>{
    const [vals, setVals] = useState([]);   

    const getAnswers = async () =>{
        const querySnapshot = await getDocs(collection(db,"productos"));
        const productList = querySnapshot.docs.map((doc)=>{       
            let products = doc.data();
            products.id = parseInt(doc.id);
            return products
        }); 
        setVals(productList);   
    };

    useEffect(() => {
        getAnswers();
    },[]);

    //return console.log("imprimo lista: ",val)
    return vals
}

const GetProduct = async(id) =>{
    const docRef = doc(db,"productos",id);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    product.id = docSnapshot.id;
    //console.log(product)
    return product
}

const saveData = async(newOr) =>{
    const orderDoc = await addDoc(collection(db,"ordenes"),newOr);
    // console.log("nueva orden en cARTCONTEX",orderDoc.id)
    return orderDoc.id
}

const GetOrder = async(id) =>{
    const docOrder = await getDoc( doc(db,"ordenes",id) ); 
    let order = docOrder.data();
    return order
}

const saveMsg = async(newMsg) =>{
    const msgDoc = await addDoc(collection(db,"mensajes"),newMsg);
    // console.log("nuevo mensaje en cARTCONTEX",msgDoc.id)
    return msgDoc.id
}

export default GetProducts
export {GetProduct}
export {saveData}
export {GetOrder}
export {saveMsg}
