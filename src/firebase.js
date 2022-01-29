import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB-vqZaaQiNBycgqm-dycu6fOyhzSgv_jw',
  authDomain: 'spam-cb3f4.firebaseapp.com',
  projectId: 'spam-cb3f4',
  storageBucket: 'spam-cb3f4.appspot.com',
  messagingSenderId: '777181518316',
  appId: '1:777181518316:web:564b09082e224e751348c9',
  measurementId: 'G-K2881XD9HC',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
