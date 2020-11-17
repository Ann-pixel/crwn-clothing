import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0CK-AAAhTcjLRz6_pMhZ1AK0DTGu8Fgk",
    authDomain: "crown-db-ba127.firebaseapp.com",
    databaseURL: "https://crown-db-ba127.firebaseio.com",
    projectId: "crown-db-ba127",
    storageBucket: "crown-db-ba127.appspot.com",
    messagingSenderId: "567510502475",
    appId: "1:567510502475:web:a92905c5edbce8cdae91ce",
    measurementId: "G-FZQFDFQJEQ"
  };



  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} =userAuth;
      const createdAt =new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(err){
        console.log("error creating user ", err.message);
      }
    }
    return userRef;
  };


  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export  default firebase;
