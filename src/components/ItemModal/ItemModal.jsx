import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemModal({ item, isOpen }) {
  const { removeItem } = useContext(CartContext);

  const url = "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/";
  return (
    <li className="itemCarrito" data-id={item.id}>
      <Link to={`/item/${item.id}`}>
        {" "}
        <img src={url + item.img} alt={item.name} />
      </Link>
      <div className="carrito-details">
        <p>{item.commercialName}</p>
        <p>{item.description}</p>
        <p className="item-total-price">{item.price}$</p>
      </div>
      <div className="flex-column">
        {isOpen && <ItemCount initial={item.quantity} item={item} btn={false} />}
        <button className="borrar-itemCarrito" onClick={() => removeItem(item)}>
          Borrar
        </button>
      </div>
    </li>
  );
}
