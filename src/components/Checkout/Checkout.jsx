import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCheckoutById } from "../../services/firebase";
import DataNoFound from "../DataNoFound/DataNoFound";
import Loader from "../Loader/Loader";
import CheckData from "./CheckData";

function Checkout() {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoadingo] = useState(true);

  let orderid = useParams().orderid

  useEffect(() => {
    getCheckoutById(orderid)
      .then((result) => {
        setOrder(result)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoadingo(false))
  }, [orderid])

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {isLoading === false && order !== null ? (
        <CheckData order={order}/>
      ) : (
        <DataNoFound />
      )}
    </div>
  );
}
export default Checkout;
