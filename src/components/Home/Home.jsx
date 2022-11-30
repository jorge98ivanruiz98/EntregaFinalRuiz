import { Link } from "react-router-dom";
function Home() {
  return (
    <div
      id="home"
      className="relative z-10 header-hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="pt-48 pb-64 text-center header-content">
        <h3 className="mb-5 text-3xl font-semibold leading-tight text-gray-50 md:text-5xl">
          RunS Games portal de ventas de video juegos en físico para colección
        </h3>
        <p className="px-5 mb-10 text-5xl text-gray-700">
          Simple, rápido y seguro
        </p>
        <ul className="flex flex-wrap justify-center">
          <li>
            <Link to="/games" className="mx-3 main-btn gradient-btn">
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">INICIAR</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Home;
