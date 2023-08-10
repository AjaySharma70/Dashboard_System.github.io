import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "./process.env";

const firebaseConfig = {
  apiKey: "AIzaSyBx-vsEP5-dMZZqUSdOMOgRhTfEYaxNVIk",
  authDomain: "dashboard-63528.firebaseapp.com",
  projectId: "dashboard-63528",
  storageBucket: "dashboard-63528.appspot.com",
  messagingSenderId: "410922483559",
  appId: "1:410922483559:web:77f939af385fd1a041f9c2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
export const storage = getStorage(app);

/*
const firebaseConfig = {
  apiKey: "AIzaSyBx-vsEP5-dMZZqUSdOMOgRhTfEYaxNVIk",
  authDomain: "dashboard-63528.firebaseapp.com",
  projectId: "dashboard-63528",
  storageBucket: "dashboard-63528.appspot.com",
  messagingSenderId: "410922483559",
  appId: "1:410922483559:web:77f939af385fd1a041f9c2"
};

*/