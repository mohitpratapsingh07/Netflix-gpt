// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhCDfdN1YUdJjzPSMcDIWGHgYT_Fwk8OE",
  authDomain: "netflixgpt-3dae3.firebaseapp.com",
  projectId: "netflixgpt-3dae3",
  storageBucket: "netflixgpt-3dae3.firebasestorage.app",
  messagingSenderId: "402084400899",
  appId: "1:402084400899:web:773db0896f2ccfef26e336",
  measurementId: "G-X0BFKSF857"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();