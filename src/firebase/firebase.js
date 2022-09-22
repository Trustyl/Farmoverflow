import firebase from 'firebase';
import firebaseConfig from './firebaseConfig'; // create a file with firebase config

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const timestamp = firebase.firestore.Timestamp;
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, firestore, timestamp, provider }
