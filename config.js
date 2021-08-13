 import * as firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyD8ULMV9UYX8pc4CsLiiWFSJNWIdN56iSM",
    authDomain: "schoolattendance-3ed86.firebaseapp.com",
    databaseURL: "https://schoolattendance-3ed86-default-rtdb.firebaseio.com",
    projectId: "schoolattendance-3ed86",
    storageBucket: "schoolattendance-3ed86.appspot.com",
    messagingSenderId: "692816402561",
    appId: "1:692816402561:web:8f8aae15066e3d7ac5d580"
  };
  


export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  