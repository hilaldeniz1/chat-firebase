// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfWJI8ZMQRe90rdPH6YG0bllXR7Jsqxi8",
  authDomain: "chat-hi-6.firebaseapp.com",
  projectId: "chat-hi-6",
  storageBucket: "chat-hi-6.appspot.com",
  messagingSenderId: "399671974890",
  appId: "1:399671974890:web:9d9c3690d2d3f8e8f4b093",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirmeyi aktif
export const auth = getAuth(app);

// google yetkilendirmesi icin kurulum
export const provider = new GoogleAuthProvider();

// veritabanının referansını olusturma
export const db = getFirestore(app);
