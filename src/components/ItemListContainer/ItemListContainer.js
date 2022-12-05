import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getItems, getItemsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {categoryId} = useParams()
  
  useEffect(() => {
    if(!categoryId){
      getItems()
      .then(response => {
        setItems(response)
      })
      .catch(error =>{
        console.error(error)
      })
      .finally(()=>{
        setIsLoading(false)
      })
    }else{
      getItemsByCategory(categoryId)
      .then(response => {
        setItems(response)
      })
      .catch(error =>{
        console.error(error)
      })
      .finally(()=>{
        setIsLoading(false)
      })
    }
  },[categoryId])

  if(isLoading){
    return (<div class="spinner-border mt-3" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>)
  }

  return (<main>
            <h2 className="py-3">{greeting}</h2>
            <ItemList items={items}/>
          </main>
  )
}
export default ItemListContainer