import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const getItems = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId 
    ? query(collection(db, 'items'), where('category', '==', categoryId)) 
    : collection(db, 'items')
    
    getDocs(collectionRef)
      .then(response => {
        const itemsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data }
        })
        resolve(itemsAdapted)
      })
      .catch(error =>{
        reject(error)
      })
      
  })
}

export const getItemById = (itemId) => {
  return new Promise((resolve,reject) => {
    const docRef = doc(db, 'items', itemId)
    getDoc(docRef)
      .then(doc => {
        const data = doc.data()
        const itemAdapted = { id: doc.id, ...data}
        resolve(itemAdapted)})
      .catch(error => reject(error))
  })
}