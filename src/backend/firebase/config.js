import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
var firebaseConfig = {
 /*  apiKey: "AIzaSyCkdAGar6mSa2N6gh9BwpuHQ3Jdl1tOMR0",
  authDomain: "laafigram02.firebaseapp.com",
  databaseURL: "https://laafigram02-default-rtdb.firebaseio.com",
  projectId: "laafigram02",
  storageBucket: "laafigram02.appspot.com",
  messagingSenderId: "705369087653",
  appId: "1:705369087653:web:ce6ee58a0c4c022f52374c",
  measurementId: "G-0DB1CRHMM6" */
  apiKey: "AIzaSyCl0Egz72vVTPBs-gjVR-rlH8HKRwxiLx0",
  authDomain: "laafigram-pro1.firebaseapp.com",
  projectId: "laafigram-pro1",
  storageBucket: "laafigram-pro1.appspot.com",
  messagingSenderId: "17934580085",
  appId: "1:17934580085:web:5e95f93e9fb4ca6d7dfb3c",
  measurementId: "G-6LNHCVNKCZ" 
};
let app ;
  if (firebase.apps.length==0) {
    app=firebase.initializeApp(firebaseConfig)
  }else{
    app = firebase.app();
  }
export const db = app.firestore();
export const auth = firebase.auth();
export const storage=app.storage();
export default {db , auth,storage } 

