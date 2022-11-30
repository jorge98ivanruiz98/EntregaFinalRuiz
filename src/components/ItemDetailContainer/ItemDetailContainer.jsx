import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSimgleItemFromAPI } from "../../services/firebase";
import ItemDetail from "../ItemDetailContainer/ItemDetail"
import Loader from "../Loader/Loader";


function ItemDetailContainer(){
    const [item, setItem] = useState(null)
    let id = useParams().id
    useEffect(() => {
        getSimgleItemFromAPI(id).then((results)=>{
        setItem(results)
    }).catch((error) => {
        console.log("No existe data")
    })
    },[id])
    
    return(<div>{item != null ? (<ItemDetail item = {item}/>):(<Loader/>)}</div>)
}
export default ItemDetailContainer