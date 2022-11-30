import React, { useEffect, useState } from "react";
import ItemProduct from "../ItemListContainer/ItemProduct";
import { getItemFromAPI,getItemsFromAPIByCategory } from "../../services/firebase";

import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [listProduct, setListProduct] = useState(null);
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid) {
      obtenerGamesCategory(categoryid)
    } else {
      obtenerGames();
    }
  }, [categoryid]);

  const obtenerGames = async () => {
    const response = await getItemFromAPI();
    setListProduct(response);
  }
  const obtenerGamesCategory = async (id) =>{
    const response = await getItemsFromAPIByCategory(id)
    setListProduct(response)
  }
  return (
    <div className="grid h-1 place-items-center">
      {listProduct != null ? (<ItemProduct listProduct={listProduct} />):(<Loader/>)}
      
    </div>
  );
}
export default ItemListContainer;
