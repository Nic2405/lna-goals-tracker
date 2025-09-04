import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnzGTcfYb7fOFFePkc11M7g6Ak9At5eQ0",
  authDomain: "lna-goal-tracker-9a6ca.firebaseapp.com",
  projectId: "lna-goal-tracker-9a6ca",
  storageBucket: "lna-goal-tracker-9a6ca.firebasestorage.app",
  messagingSenderId: "415334121339",
  appId: "1:415334121339:web:b5971bf01886304401c7de"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 