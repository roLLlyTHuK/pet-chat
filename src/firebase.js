import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCIIslH1ErNeb2k2S8GWcDdVj3zZgjpFPA',
  authDomain: 'dashboard-7c800.firebaseapp.com',
  projectId: 'dashboard-7c800',
  storageBucket: 'dashboard-7c800.appspot.com',
  messagingSenderId: '207651370811',
  appId: '1:207651370811:web:c62af5a14158c5acbf691e',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
