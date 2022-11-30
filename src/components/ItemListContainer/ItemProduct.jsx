import React from "react";
import { Link } from "react-router-dom";
function ItemProduct(props) {
  return (
    <div className="grid grid-cols-3 gap-4 content-start">
      {props != null ? (
        props.listProduct.map((product) => (
          <div key={product.id}className="w-full max-w-sm bg-white rounded-lg shadow-md">
            <Link to="/detail">
              <img
                className="p-8 rounded-t-lg"
                src={product.thumbnail}
                alt=""
              />
            </Link>
            <div className="px-5 pb-5">
              <Link to="/detail">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                  {product.title}
                </h5>
                <h4 className="text-xs font-medium text-gray-600">
                  {product.description}
                </h4>
              </Link>
              <br></br>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <Link
                  to={`/detail/${product.id}`}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Más información
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
export default ItemProduct;
