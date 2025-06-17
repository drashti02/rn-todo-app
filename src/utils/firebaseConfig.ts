import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC_xPKC5g0wonLFjEcfLI_bj5UmGq5dq2E',
  authDomain: 'to-do-app-project-a3401.firebaseapp.com',
  projectId: 'to-do-app-project-a3401',
  storageBucket: 'your-project.appspot.com',
  messagingSenderId: '...',
  appId: '1:812027295003:android:7113fec01be6065fa48fbe',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
