import React,{useContext} from "react"
import cartContext from "../../storage/cartContext"
import ItemCount from "./ItemCount/ItemCount"

function ItemDetail({ item }) {
  const { cart, addToCart } = useContext(cartContext)

  let itemInCart = cart.find((response) => response.id === item.id)
  let stock = 16
  if (itemInCart) stock -= itemInCart.count

  function onAddToCart(count) {
    const itemForCart = {
      ...item,
      count
    }
    addToCart(itemForCart)
  }
  return (
    <div className="grid h-1 place-items-center">
    <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-5xl hover:bg-gray-100">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:w-80 md:rounded-none md:rounded-l-lg"
        src={item.thumbnail}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {item.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{item.description}</p>
        <p  className="text-left">PU. ${item.price}</p>
        <h1 className="text-left">Cantidad:</h1>
        <ItemCount onAddToCart={onAddToCart}
          stock={stock}/>
      </div>
    </div>
    </div>
  );
}
export default ItemDetail;
