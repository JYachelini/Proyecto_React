import { useState } from "react";
const ItemCount = ({stock, initial, onAdd, name}) =>{
    const [count, setCount] = useState(parseInt(initial));

    const add = () =>{
        if(stock<=0){
            console.log('No hay stock, proximamente el error será mostrado en la página')
        }else if(count<stock){
            setCount(count+1);
        }else if(count>=stock){
            console.log('Llegaste al limite del stock disponible.');
        }
    }

    const remove = () =>{
        if(count > 1){
            setCount(count-1);
        }else{
            console.log('No se pueden poner numeros negativos ni 0');
        }
    }
    return(
        <div>
            <div className="sub-card">
                <h1>{name}</h1>
                <div>
                    <button onClick={remove}>-</button>
                    <span>{count}</span>
                    <button onClick={add}>+</button>
                </div>
                <button className="addTest">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;