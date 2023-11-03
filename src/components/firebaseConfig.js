import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { API_KEY,
        AUTHDOMAIN,
        DATABASE_URL,
        PROJECT_ID,
        STORAGE_BUCKET,
        MESSAGING_SENDER_ID,
        APP_ID } from '@env';
        

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

export { auth }