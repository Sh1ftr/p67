import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDGWi5H8oUYNnlN8OQTIfjSajxb9kcstGI",
  authDomain: "team-voting-app-cb0cb.firebaseapp.com",
  databaseURL: "https://team-voting-app-cb0cb-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-cb0cb",
  storageBucket: "team-voting-app-cb0cb.appspot.com",
  messagingSenderId: "577409665210",
  appId: "1:577409665210:web:9308d9ebd25abc26f85a83"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();