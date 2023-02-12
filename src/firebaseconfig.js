import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBu3llVV3z6wI6tFnMHlwwYQzXNL5WrVGs",
  authDomain: "resoluteai-c3723.firebaseapp.com",
  projectId: "resoluteai-c3723",
  storageBucket: "resoluteai-c3723.appspot.com",
  messagingSenderId: "378082848634",
  appId: "1:378082848634:web:a11799b991cb7e5689b0c3",
  measurementId: "G-77C5RR60R6"
};

  const app = initializeApp(firebaseConfig);


  const db = getFirestore(app)

  export default db;