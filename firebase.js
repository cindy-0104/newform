// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSy9wbPv0w6--8_SpbmDHTNG2QBY23VZBcmc",
    authDomain: "newformatpeoff.firebaseapp.com",
    databaseURL: "https://newformtapeoff-3ca2f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "newformtapeoff-3ca2f",
    storageBucket: "newformatpeoff.firebasestorage.app",
    messagingSenderId: "633663947418",
    appId: "1:633663947418:web:c93ec4c144dcdf83c0963",
    measurementId: "G-3989NGSQ0P"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window._app = app;
window._db = db;

console.log("🔥 firebase.js loaded!");
console.log("DB:", db);
