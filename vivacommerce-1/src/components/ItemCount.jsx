import { useContext,useState } from 'react';
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ id, nombre, cargo, horas, fecha,valor,onAdd }) => {
    const [cart, setCart,sumar, restar] = useContext(CartContext);
    const [contador, setContador] = useState(1)
    
    
    
  
    const adicionACart = () => {
    setCart((ItemActuales) => {
        const ItemEncontrardo = ItemActuales.find((item) => item.id === id);                
        if (ItemEncontrardo) {
            return ItemActuales.map((item) => {
            if (item.id === id) {
                return { ...item, horas: item.horas + contador };
            } else {
                return item;
            }
            });
        } else {
            return [...ItemActuales, { id, horas: contador, fecha, nombre, cargo, valor}];
        }
        });   
    };
    return (
        <div className='botons-add'>
            <p>{contador}</p>
            <button className="boton" onClick={restar}> - </button> 
            <button className="boton" onClick={sumar}> + </button>            
            <br></br> 
            <button className="boton-adicionar" onClick={adicionACart}> Adicionar al carro </button> 
        </div>
        );
    };
         // realizar que se limite los valores negativos o que llame un props donde de el stock y este no supere ese stock
        //  <Button onClick={() => addToCart()}>
        //      Add to cart: {count}
        //  </Button>
export default ItemCount;