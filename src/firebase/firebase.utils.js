import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBN4O28U4Cfzq2DHhTGYfjUL9vfuSZGCCU",
    authDomain: "crwn-db-efc5b.firebaseapp.com",
    projectId: "crwn-db-efc5b",
    storageBucket: "crwn-db-efc5b.appspot.com",
    messagingSenderId: "217167837497",
    appId: "1:217167837497:web:0639842413f727fd2b90e8",
    measurementId: "G-ZPBJNFDHBM"
  }


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;