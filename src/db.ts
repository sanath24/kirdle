import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"


const firebaseApp = initializeApp({
    apiKey: "AIzaSyAkPs2-RDIXWOtwEEsZlTK5HWpH5XBDTLw",
    authDomain: "kirdle-6a570.firebaseapp.com",
    databaseURL: "https://kirdle-6a570-default-rtdb.firebaseio.com",
    projectId: "kirdle-6a570",
    storageBucket: "kirdle-6a570.appspot.com",
    messagingSenderId: "355421662749",
    appId: "1:355421662749:web:1d1c3087985488e0c120f4",
    measurementId: "G-R5BD79R2YW"
  });

export const db = getDatabase(firebaseApp);

export default db;