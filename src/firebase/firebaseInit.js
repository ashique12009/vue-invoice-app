import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFpRG73Ah4A5KR6fr64ev0AwjwtdMycZo",
  authDomain: "invoice-vue-app-cc22d.firebaseapp.com",
  projectId: "invoice-vue-app-cc22d",
  storageBucket: "invoice-vue-app-cc22d.appspot.com",
  messagingSenderId: "619785269948",
  appId: "1:619785269948:web:afe703c46454c48dfad6b9"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;