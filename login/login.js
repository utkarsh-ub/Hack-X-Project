var uiConfig = {
  signInSuccessUrl: 'start.html',
  signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],

  tosUrl: 'login.html'
};
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);