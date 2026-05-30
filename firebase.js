// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5SHI9Hw90-ofA0JCVloj1bZ0nh7bzd08",
  authDomain: "trashaway-71ad5.firebaseapp.com",
  projectId: "trashaway-71ad5",
  storageBucket: "trashaway-71ad5.firebasestorage.app",
  messagingSenderId: "607849651465",
  appId: "1:607849651465:web:8326022b1fc57a56b3c7d8",
  measurementId: "G-08GF5ZBR6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

try {
  const analytics = getAnalytics(app);
  console.log('Firebase initialized successfully:', app.options.projectId);
} catch (error) {
  console.error('Firebase initialization failed:', error);
}

// Export auth and db for use in other files
export { auth, db };
