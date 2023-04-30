import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXAbhCbBkKIWYQOLLV1_kfNEeSsr3a3fo",
  authDomain: "epwebapp-bc171.firebaseapp.com",
  projectId: "epwebapp-bc171",
  storageBucket: "epwebapp-bc171.appspot.com",
  messagingSenderId: "640288216101",
  appId: "1:640288216101:web:31cf48195f230dd76bdbcc",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
