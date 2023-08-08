import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig =({
  apiKey: "AIzaSyDnZZOjTjY9O6B1Wn2f92bJFbUd9YhkcKw",
  authDomain: "pgp-dashboard-8d314.firebaseapp.com",
  projectId: "pgp-dashboard-8d314",
  storageBucket: "pgp-dashboard-8d314.appspot.com",
  messagingSenderId: "3966894219",
  appId: "1:3966894219:web:ea0955fb3fdf00baf8148e",
  measurementId: "G-VNHFLJE4BT"
});

// const db = firebaseApp.firestore();
// const rdb = firebaseApp.database();
// const auth = firebaseApp.auth();
// const storage = firebaseApp.storage().ref();
// Initialize Firebase

initializeApp(firebaseConfig)
export const db = getFirestore()