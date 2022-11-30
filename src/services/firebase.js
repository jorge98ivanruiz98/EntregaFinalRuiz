import { initializeApp } from "firebase/app";
import { getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    writeBatch,
    documentId } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZEjU_FoznKOLQ3-ib_hurCATnT44u8_4",
  authDomain: "runspe.firebaseapp.com",
  projectId: "runspe",
  storageBucket: "runspe.appspot.com",
  messagingSenderId: "772451856955",
  appId: "1:772451856955:web:ee47c294bc159c08c2621e",
  measurementId: "G-Z9VJRHFKPX",
}

const firebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(firebaseApp)

export function testDatabase(){
    console.log(firebaseApp)
}
export async function getItemFromAPI(){
    //connect collection product games
    const collectionGames = collection(DB,"games")
    let snapshot = await getDocs(collectionGames)
    //Recorrer los documentos de response con Map
    const games = snapshot.docs.map( doc =>{
        return {
            id: doc.id,
            ...doc.data()
        }
    })
    return (games)
}
export async function getSimgleItemFromAPI(id){
    try {
        const docRef = doc(DB,"games",id)
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            return {
                ...docSnap.data(),
                id: docSnap.id
            }
        }else{
            throw new Error('No existe Item');
        }    
    } catch (error) {
        throw error
    }
}

export async function getCheckoutById(id){
  try {
        const docRef = doc(DB,"buyorders",id)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
          return {
              ...docSnap.data(),
              id: docSnap.id
          }
      }else{
          throw new Error('No existe Pedido');
      }   
  } catch (error) {
        throw error
  }

}

export async function getItemsFromAPIByCategory(categoryId) {
    const productsRef = collection(DB, "games")
    const myQuery = query(productsRef, where("category", "==", categoryId))
  
    const productsSnap = await getDocs(myQuery)
  
    const emptyArray = productsSnap.docs.length < 1
  
    if (emptyArray) throw new Error("Categoría sin resultados");
  
    const products = productsSnap.docs.map((docu) => {
      return {
        ...docu.data(),
        id: docu.id,
      }
    })
    return products
  }

export async function createBuyOrderFirestoreWithStock(buyOrderData) {
    const collectionProductsRef = collection(DB, "games");
    const collectionOrdersRef = collection(DB, "buyorders");
    const batch = writeBatch(DB);
  
    let arrayIds = buyOrderData.items.map((item) => {
      return item.id;
    });
  
    const q = query(collectionProductsRef, where(documentId(), "in", arrayIds));
  
    let productsSnapshot = await getDocs(q);
  
    productsSnapshot.docs.forEach((doc) => {
      let stockActual = doc.data().stock;
      let itemInCart = buyOrderData.items.find((item) => item.id === doc.id);
      let stockActualizado = stockActual - itemInCart.count;
  
      batch.update(doc.ref, { stock: stockActualizado });
    });
  
    const docOrderRef = doc(collectionOrdersRef);
    batch.set(docOrderRef, buyOrderData);
  
    batch.commit();
  
    return docOrderRef.id;
  }

  export async function createBuyOrderFirestore(buyOrderData) {
    const collectionRef = collection(DB, "buyorders");
    const docRef = await addDoc(collectionRef, buyOrderData);
  
    return docRef.id;
  }