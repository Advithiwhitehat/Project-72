import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDhTY-7fc1fV9rS9aYQLS4fKpyj2Y4t3I8",
  authDomain: "newsletter-a448c.firebaseapp.com",
  databaseURL: "https://newsletter-a448c-default-rtdb.firebaseio.com",
  projectId: "newsletter-a448c",
  storageBucket: "newsletter-a448c.appspot.com",
  messagingSenderId: "662176130794",
  appId: "1:662176130794:web:a0a11575dca5f080bd5993"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   