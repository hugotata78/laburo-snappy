import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAFFbaKQz4viDoCG746W_Tsi5I_0gjHMe8",
  authDomain: "snappy-data-base.firebaseapp.com",
  projectId: "snappy-data-base",
  storageBucket: "snappy-data-base.appspot.com",
  messagingSenderId: "801417452234",
  appId: "1:801417452234:web:d0495500b6f5b5716d3233",
};

const app = firebase.initializeApp(config);
const db = app.firestore();
const storage = firebase.storage();
const coleccion = db.collection("comentarios");

const obtenerComentarios = () => {
  let comentarios = [];
  coleccion.get().then((res) => {
    res.docs.map((item) => {
      comentarios.push(item.data());
    });
  });
  return comentarios;
};
console.log(obtenerComentarios());
export { db, storage };
