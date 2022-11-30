import React, {useContext} from "react"
import cartContext from "../../storage/cartContext"
function ItemCart({ cart }) {
    const {removeItem} = useContext(cartContext)
    console.log(cart)
  return (
    <>
      {cart.map((cartItem) => (
        <li key={cartItem.id}className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src={cartItem.thumbnail}
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate ">
                {cartItem.title}
              </p>
              <p className="text-sm text-gray-500 truncate ">
                Cantidad: {cartItem.count} ,PU: ${cartItem.price}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
              ${cartItem.count * cartItem.price}
            </div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => removeItem(cartItem.id)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </button>
          </div>
        </li>
      ))}
    </>
  )
}
export default ItemCart
