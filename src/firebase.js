import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB5V32wPUfCQ6cWd_tLd2hi2qLls--fOE0",
    authDomain: "linkedin-clone-74252.firebaseapp.com",
    projectId: "linkedin-clone-74252",
    storageBucket: "linkedin-clone-74252.appspot.com",
    messagingSenderId: "947968294940",
    appId: "1:947968294940:web:fbe51f7f232cd9a5fc5fd9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore(); 
 const auth = firebase.auth();

  export { db, auth };