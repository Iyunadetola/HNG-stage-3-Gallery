import { initializeApp } from "@firebase/app";
import { getAuth } from '@firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBTDTAtnnexfPkfYvr8J0fJXwN1KrPO3b8",
    authDomain: "gallery-form-authentication.firebaseapp.com",
    projectId: "gallery-form-authentication",
    storageBucket: "gallery-form-authentication.appspot.com",
    messagingSenderId: "680028016100",
    appId: "1:680028016100:web:a6dd12247307ebe0808bf1",
    measurementId: "G-P42GBX9ZJP"
  };

  const app = initializeApp (firebaseConfig);

  export const auth = getAuth(app)