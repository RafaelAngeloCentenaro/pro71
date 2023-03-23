import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui

    apiKey: "AIzaSyAQMK_JCSx21jWPzlFpW_NzkYugJnuDSwY",
    authDomain: "bici-df2a6.firebaseapp.com",
    projectId: "bici-df2a6",
    storageBucket: "bici-df2a6.appspot.com",
    messagingSenderId: "437525550421",
    appId: "1:437525550421:web:df1558351c54c0e2960bdc"
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
