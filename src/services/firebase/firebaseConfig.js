import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwnZGMwoGoxFMeA_WGPcgmtwKPj56EfvI",
  authDomain: "opelsports.firebaseapp.com",
  projectId: "opelsports",
  storageBucket: "opelsports.appspot.com",
  messagingSenderId: "837493868788",
  appId: "1:837493868788:web:ea44adb75ea0c9bf9436a1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)