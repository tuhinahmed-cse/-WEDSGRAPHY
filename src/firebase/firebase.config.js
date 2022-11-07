// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC07BDNlbfZd_m85r39QqkoQPrnbgRRzm8",
  authDomain: "service-review-client-side.firebaseapp.com",
  projectId: "service-review-client-side",
  storageBucket: "service-review-client-side.appspot.com",
  messagingSenderId: "155416928548",
  appId: "1:155416928548:web:6f6a79ae63473c9a1b53b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;