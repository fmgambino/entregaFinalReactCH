import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({title, arrayP}) => {    
    return (
        <>
            <h2 className="titulo-h2">{title}</h2>
            <ItemList array={arrayP} title={title}/> 
        </>  
    ) 
}

export default ItemListContainer