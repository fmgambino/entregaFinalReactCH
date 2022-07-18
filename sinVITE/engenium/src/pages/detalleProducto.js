import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import {variableH} from '../components/Item/Item';
import Footer from "../components/Footer/Footer";


const Detalle = () => {
    return(
        <>
            <ItemDetailContainer title={variableH}/> 
            <Footer/>       
        </>
        
    )
}

export default Detalle