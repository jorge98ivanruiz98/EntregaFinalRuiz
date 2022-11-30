import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

function NavBar () {

    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 border-gray-200">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <div className="flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/512/394/394127.png" className="h-6 mr-3 sm:h-9" alt=""/>
      <span className="self-center text-xl font-semibold whitespace-nowrap">RunS Games</span>
  </div>
  
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
      <li>
        <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/games" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Games Shop</Link>
      </li>
      <li>
        <Link to="/games/shooter" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Games Shooters</Link>
      </li>
      <li>
        <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</Link>
      </li>
    </ul>
  </div>
  <div className="flex md:order-2">
      <CartWidget/>
  </div>
  </div>
</nav>
    )

}
export default NavBar