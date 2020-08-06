  import firebase from 'firebase/app'
  import 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCo6oFDqDT8gFLm9fOfu8FHYulHj6cfS2w",
    authDomain: "punto-veta-pizza.firebaseapp.com",
    databaseURL: "https://punto-veta-pizza.firebaseio.com",
    projectId: "punto-veta-pizza",
    storageBucket: "punto-veta-pizza.appspot.com",
    messagingSenderId: "682814988669",
    appId: "1:682814988669:web:6f0124839c8160b0aaac14",
    measurementId: "G-24Q3D8ZW92"
  };
  // Initialize Firebase
  const fb=firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();