import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//  Firebase authentication with github, google and facebook
const config = {

        apiKey: "AIzaSyBuDmPIOswhCFrwlH_KDLYPnS9fKC8lzRo",
        authDomain: "tradecollectibles-2d920.firebaseapp.com",
        databaseURL: "https://tradecollectibles-2d920.firebaseio.com",
        projectId: "tradecollectibles-2d920",
        storageBucket: "tradecollectibles-2d920.appspot.com",
        messagingSenderId: "757864714669",
        appId: "1:757864714669:web:9ca309a5bb53fe0c885124",
        measurementId: "G-BW79LHMMSG"
    
    
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerGithub = new firebase.auth.GithubAuthProvider();


provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook);
export const signInWithGithub = () => auth.signInWithPopup(providerGithub);

export default firebase;

