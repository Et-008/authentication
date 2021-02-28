import app from "firebase/app";
import "firebase/auth";


var Config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  class Firebase {
    constructor () {
        app.initializeApp(Config);

        this.auth = app.auth();
    }

    createNewUser = (email, password) => 
    {
      return this.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        return user;
      }).catch(error => {
        return error;
      })
    }

    existingUser = (email, password) => {
      return this.auth.signInWithEmailAndPassword(email, password)
      .then(user => user)
      .catch(err => err)
    }
  }

  export default Firebase;