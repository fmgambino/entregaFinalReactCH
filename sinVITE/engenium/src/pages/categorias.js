import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import GetProducts from "../components/ItemCollection/ItemCollection";
import {Container} from '@mui/material';
import './styles/view.css';
import Footer from "../components/Footer/Footer";
import '../components/ItemDetail/ItemDetail.css'

const Categoria = () => { 
    const [categ, setCateg] = useState([]);
    const [title, setTitle] = useState("");   
    const { category }=useParams();
    const res = GetProducts();

    useEffect( () => {
        setCateg([]);
        if(category==="automatizacion"){
            filterByCategory(res)
            setTitle("Automatizacion Industrial");
        }
        if(category==="medidores"){
            filterByCategory(res)
            setTitle("Medidores Trifasicos");
        } 
    },[category,res]);// eslint-disable-line

    const filterByCategory = (array) => {    
        setCateg(array.filter((rec) => rec.category === category))          
    }
    
    return(
        <>
            <Container>
                <div className="margin-boxies">
                    <ItemListContainer title={title} arrayP={categ}/>     
                </div>       
            </Container>
            <Footer/>
        </>        
    )
}

export default Categoria