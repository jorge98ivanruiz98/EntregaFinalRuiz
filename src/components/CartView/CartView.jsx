import { useContext } from "react";
import cartContext from "../../storage/cartContext";
import { createBuyOrderFirestoreWithStock } from "../../services/firebase";
import BuyForm from "./BuyForm";
import { useNavigate } from "react-router-dom";
import ItemCart from "./ItemCart";
import Swal from "sweetalert2";
import DataNoFound from "../DataNoFound/DataNoFound";

function CartView() {
    const {cart, clear, totalPriceInCart }=useContext(cartContext)
    const navigate = useNavigate();
    if(cart.length ===0) return (<DataNoFound/>)

    function createBuyOrder(userData) {
        const buyData = {
          buyer: userData,
          items: cart,
          total: totalPriceInCart(),
          date: new Date(),
        };
    
        createBuyOrderFirestoreWithStock(buyData).then((orderId) => {
          clear();
          navigate(`/checkout/${orderId}`);
          Swal.fire({
            title: `Gracias por tu compra`,
            text: `El identificador de tu orden es ${orderId}`,
            icon: "success",
            
            showConfirmButton: false,
            timer: 1500,

            footer: "Revisa tu pedido"
          });
        });
      }
  return (
    <div className="grid h-1 place-items-center">
    <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">
          Lista de producto en el carrito
        </h5>
      </div>
      <div className="flow-root">
        <ul
          className="divide-y divide-gray-200"
        >
        <ItemCart cart={cart}/>  
        </ul>
      </div>
      <h5 className="pt-4 text-xl font-bold leading-none text-gray-900">
          Total a pagar: ${totalPriceInCart()}
        </h5>
    
    </div>
    <div className="mt-10"><BuyForm onSubmit={createBuyOrder}/></div>
    
    </div>
  );
}
export default CartView;
