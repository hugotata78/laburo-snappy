import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyCesEv-dO8tdkpKM9wcHbLkzu0oYazHgOc",
  authDomain: "snappy-landing-master.firebaseapp.com",
  projectId: "snappy-landing-master",
  storageBucket: "snappy-landing-master.appspot.com",
  messagingSenderId: "230022164574",
  appId: "1:230022164574:web:8d5e8a814185f86efc44cf"
};

const app = firebase.initializeApp(config)
const db = app.firestore()
const storage = firebase.storage()
const coleccion = db.collection('comentarios')

const obtenerComentarios = ()=>{
  let comentarios = []
  coleccion.get()
  .then(res=>{
   res.docs.map(item=>{
     comentarios.push(item.data())
    })
  })
  return comentarios
}
console.log(obtenerComentarios()[0])
export{
  db,
  storage,
  
} 
  
