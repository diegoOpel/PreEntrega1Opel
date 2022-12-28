import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getItemById } from "../../services/firebase/firestore/items"
import { useAsync } from "../../hooks/useAsync"
import { ToastError } from "../Toast/Toast"

const ItemDetailContainer = () => {
  const {itemId} = useParams()
  
  const getItemWithId = () => getItemById(itemId)

  const {data: item, error, isLoading} = useAsync(getItemWithId, [itemId])

  if(isLoading){
    return (
    <>
      <div className="spinner-border mt-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>)
  }

  if(error){
    <ToastError message={"Ha ocurrido un error, recargá la página"}/>
    console.error(error)
  }

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer
