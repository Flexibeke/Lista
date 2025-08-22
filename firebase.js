// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// 🔥 Coloque aqui os dados do seu projeto Firebase (copie do console do Firebase)
const firebaseConfig = {
  apiKey: "SUA-API-KEY",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.appspot.com",
  messagingSenderId: "ID",
  appId: "APP-ID",
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

// Referência para o documento de configuração (senha e admins)
const cfgDocRef = doc(db, "config", "app");

// Exporta para usar em outros arquivos
export {
  db,
  cfgDocRef,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  doc,
};
