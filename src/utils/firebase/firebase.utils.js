import { initializeApp } from 'firebase/app';
import {
	GoogleAuthProvider,
	signInWithRedirect,
	signInWithPopup,
	getAuth,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyByOvDkGjs_80e7pGYRoAi7l8YRgCkAOLM',
	authDomain: 'crown-clothing-db-8a79f.firebaseapp.com',
	projectId: 'crown-clothing-db-8a79f',
	storageBucket: 'crown-clothing-db-8a79f.appspot.com',
	messagingSenderId: '223167016974',
	appId: '1:223167016974:web:141f0cdcd524b0b09e4c5f',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
