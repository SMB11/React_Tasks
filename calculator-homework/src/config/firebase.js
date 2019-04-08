import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCd_5x0D-XuilS4CwBCenJpTijQxt5mJcc",
    authDomain: "calculator-c6044.firebaseapp.com",
    databaseURL: "https://calculator-c6044.firebaseio.com",
    projectId: "calculator-c6044",
    storageBucket: "calculator-c6044.appspot.com",
    messagingSenderId: "33216114015"
  }
  firebase.initializeApp(config);

  const databaseRef = firebase.database().ref().child('logs');
  // const calcRef = databaseRef.collection("logs")
export default databaseRef;