import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_5xq2hYmyFpwlx6kWaFEC7jvpJcH4WTw",
  authDomain: "lna-goal-tracker.firebaseapp.com",
  projectId: "lna-goal-tracker",
  storageBucket: "lna-goal-tracker.firebasestorage.app",
  messagingSenderId: "763663207864",
  appId: "1:763663207864:web:1e702c8c641a037711134d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);