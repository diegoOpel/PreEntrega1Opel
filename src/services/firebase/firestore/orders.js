import { getDocs, addDoc, collection, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { ToastError, ToastSuccess } from "../../../components/Toast/Toast"
import { toast } from "react-toastify"


export const CreateOrder = async (e, cart, getTotal, clear, navigate) => {
  
  e.preventDefault()
  
  try{
    const objOrder = {
      buyer: {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value
      },
      items: cart,
      total: getTotal()
    }
    const ids = cart.map(item => item.id)
    const itemsRef = query(collection(db, 'items'), where(documentId(),'in',ids))

    const itemsAddedToCartFromFirestore = await getDocs(itemsRef)
    const {docs} = itemsAddedToCartFromFirestore
    const outOfStock = []
    const batch = writeBatch(db)

    docs.forEach(doc => {
      const dataDoc = doc.data()
      const stockDb = dataDoc.stock
      const itemAddedToCart = cart.find(item => item.id === doc.id)
      const itemQuantity = itemAddedToCart?.quantity

      if(stockDb>=itemQuantity){
        batch.update(doc.ref, {stock: stockDb - itemQuantity})
      }else{
        outOfStock.push({id: doc.id, ...dataDoc})
      }
    })

    if(outOfStock.length===0){
      await batch.commit()
      const orderRef = collection(db, 'orders')
      const orderAdded = await addDoc(orderRef, objOrder)
      clear()
      toast.success(`Orden generada correctamente con ID: ${orderAdded.id}, regresaras al Home`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });   
      //<ToastSuccess message={`Orden generada correctamente con ID: ${orderAdded.id}, regresaras al Home`}/>
    }else{
      return <ToastError message={"Existen productos sin stock disponible"}/>
    }
  }catch (error){
    console.error(error)
    return <ToastError message={"Ha ocurrido un error, recargá la página"}/>
  }finally{
    navigate("/")
  }
}