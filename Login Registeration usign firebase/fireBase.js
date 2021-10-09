var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyA-pwlMZtveJUbER98H64rMxpIBKO8eKx0",
  authDomain: "signuppage-43f58.firebaseapp.com",
  databaseURL: "https://signuppage-43f58-default-rtdb.firebaseio.com",
  projectId: "signuppage-43f58",
  storageBucket: "signuppage-43f58.appspot.com",
  messagingSenderId: "623489406905",
  appId: "1:623489406905:web:e8cbdbd60c5c55ab314868",
  measurementId: "G-7J4E19R1J7"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


