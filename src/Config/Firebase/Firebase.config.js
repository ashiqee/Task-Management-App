// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOI8SMnWsg-eSbVd2kM7vZqRJzQOIgwOI",
    authDomain: "task-management-as.firebaseapp.com",
    projectId: "task-management-as",
    storageBucket: "task-management-as.appspot.com",
    messagingSenderId: "54193943611",
    appId: "1:54193943611:web:9b37f251e0a2aa9fda981e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;