import { useState, useEffect } from "react"
import { getItemById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const {itemId} = useParams()
  
  useEffect(() => {
    getItemById(itemId)
      .then(response => setItem(response))
      .catch(error => console.error(error))
      .finally(() => {
        setIsLoading(false)
      })
  },[itemId])

  if(isLoading){
    return (<div class="spinner-border mt-3" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>)
  }
  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer
