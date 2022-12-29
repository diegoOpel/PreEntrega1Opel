import { getDocs, addDoc, collection, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { toast } from "react-toastify"

export const CreateOrder = async (e, cart, getTotal, clear, navigate, removeItem) => {
  e.preventDefault()
  if(e.target.repeatedEmail.value!==e.target.email.value){
    toast.error("Los mails no coinciden", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });    
  }else{

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
          navigate("/")
      }else{
        outOfStock.forEach(item => removeItem(item.id))
        toast.error("Existen productos sin stock disponible, los hemos eliminado del carrito", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/cart")
      }
    }catch (error){
      console.error(error)
      toast.error("Ha ocurrido un error, recargá la página", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
}