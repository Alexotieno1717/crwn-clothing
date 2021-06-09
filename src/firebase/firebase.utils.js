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
  };

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;