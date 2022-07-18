import './ItemList.css';
import {Grid} from '@mui/material';
import Item from '../Item/Item';
import '../../pages/styles/view.css'

const ItemList = ({array,title}) => {  
    return (
        <>  
            <div>
                <Grid container>
                    {
                        array.map( ({nombre,precio,imagen,stock,id}) => {
                            return(
                                <Grid item md={3} key={id}>
                                    <Item nombreProducto={nombre} precioProducto={precio} imagenProducto={imagen} stockProducto={stock} idProducto={id} title={title}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>                  
            </div>                   

        </>  
    )    
}

export default ItemList