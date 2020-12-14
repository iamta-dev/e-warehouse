import { initializeApp } from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDj5JbQ4EQdtWb4UJHB257np0M5TcMd9u8",
    authDomain: "e-warehouse-533a9.firebaseapp.com",
    databaseURL: "https://e-warehouse-533a9.firebaseio.com",
    projectId: "e-warehouse-533a9",
    storageBucket: "e-warehouse-533a9.appspot.com",
    messagingSenderId: "555324770178",
    appId: "1:555324770178:web:1a61816c837eeb7a84719b",
    measurementId: "G-LRSH7XDLBM"
  };

const app = initializeApp(firebaseConfig)
export const db = app.database()
export const todosRef = db.ref('todos')