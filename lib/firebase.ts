import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB03KmGywzDaNXXWZJKtWaQIhJYV08Ew9E',
  authDomain: 'nextfire-3f939.firebaseapp.com',
  projectId: 'nextfire-3f939',
  storageBucket: 'nextfire-3f939.appspot.com',
  messagingSenderId: '306783518083',
  appId: '1:306783518083:web:fac83da2a91dc6481a8ab6',
  measurementId: 'G-L7PTE0ER7W',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
