import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSimgleItemFromAPI } from "../../services/firebase"
import DataNoFound from "../DataNoFound/DataNoFound"
import ItemDetail from "../ItemDetailContainer/ItemDetail"
import Loader from "../Loader/Loader"

function ItemDetailContainer() {
  const [item, setItem] = useState(null)
  const [isLoading, setIsLoadingo] = useState(true)
  let id = useParams().id
  useEffect(() => {
    getSimgleItemFromAPI(id)
      .then((results) => {
        setItem(results)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setIsLoadingo(false))
  }, [id])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      {isLoading === false && item !== null ? (
        <ItemDetail item={item} />
      ) : (
        <DataNoFound />
      )}
    </div>
  )
}
export default ItemDetailContainer
