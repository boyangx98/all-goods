import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMhGbUWbMzAP_k6fSFubWXmjV78qHqIOY",
    authDomain: "all-for-one-db.firebaseapp.com",
    projectId: "all-for-one-db",
    storageBucket: "all-for-one-db.appspot.com",
    messagingSenderId: "474362318287",
    appId: "1:474362318287:web:07cc0d7507e91cefde56ba",
    measurementId: "G-V5RNCLB3DH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase;
