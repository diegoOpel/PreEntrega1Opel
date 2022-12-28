import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getItems } from "../../services/firebase/firestore/items"
import { ToastError } from "../Toast/Toast"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = ({greeting}) => {
  const {categoryId} = useParams()

  const getItemsWithCategory = () => getItems(categoryId)

  const { data: items, error, isLoading } = useAsync(getItemsWithCategory, [categoryId])
  
  if(isLoading){
    return (<div className="spinner-border mt-3" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>)
  }

  if(error){
    <ToastError message={"Ha ocurrido un error, recargá la página"}/>
    console.error(error)
  }

  return (<main>
            <h2 className="py-3">{greeting}</h2>
            <ItemList items={items}/>
          </main>
  )
}
export default ItemListContainer