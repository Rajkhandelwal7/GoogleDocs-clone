import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyA3huCSbhtLVPcSHCn5ydJIGSZvVRWj2w4",
  authDomain: "docs-79b0e.firebaseapp.com",
  projectId: "docs-79b0e",
  storageBucket: "docs-79b0e.appspot.com",
  messagingSenderId: "319561006560",
  appId: "1:319561006560:web:e5142d248739cea9663f85",
  measurementId: "G-545P25XD98"
  };
const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();

const db=app.firestore();
export {db};
  