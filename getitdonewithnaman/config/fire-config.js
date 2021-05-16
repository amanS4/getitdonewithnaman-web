import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBwRfYFdc0xMLYMPBTPQQzuI_hEYLgGmCM",
  authDomain: "getitdonewithnaman.firebaseapp.com",
  projectId: "getitdonewithnaman",
  storageBucket: "getitdonewithnaman.appspot.com",
  messagingSenderId: "447915646739",
  appId: "1:447915646739:web:4d3dde4bb6ed1a2404c4e6",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
