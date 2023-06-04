// Importamos la función para inicializar la aplicación de Firebase
import firebase from 'firebase/app';
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    getByte,
  } from "firebase/storage";
import 'firebase/auth';
import 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    doc,
    getDocs,
    query,
    where,
    setDoc,
    deleteDoc,
  } from "firebase/firestore";

// Añade aquí tus credenciales
export const firebaseConfig = {
    apiKey: "AIzaSyC5G7IpsZBZK1CZqgOC5t2fnXZgJC8BaEc",
    authDomain: "anuncia-tec.firebaseapp.com",
    projectId: "anuncia-tec",
    storageBucket: "anuncia-tec.appspot.com",
    messagingSenderId: "192749013072",
    appId: "1:192749013072:web:f6e07efec4003008b1e955"
};

export async function insertComunicado(aviso) {
    // console.log("datos: " + aviso);
    try {
      const db = getFirestore();
      const docRef = collection(db, "avisos");
      const res = await addDoc(docRef, aviso);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function getAvisos(categoria) {
    const avisos = [];
  
    try {
      const db = getFirestore();
      const collectionRef = collection(db, 'avisos');
      const q = query(collectionRef, where('categoria', '==', categoria));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach(doc => {
        const aviso = {
          docId: doc.id, // Obtener el ID del documento
          ...doc.data() // Obtener los datos del documento
        };
        avisos.push(aviso);
      });
  
      return avisos;
    } catch (error) {
      console.error(error);
      return []; // Retornar un array vacío en caso de error
    }
  }