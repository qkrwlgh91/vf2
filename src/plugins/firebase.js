import Vue from "vue";
import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firebase-database";
import firebaseConfig from "../../firebaseConfig";
import store from "../store";

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(fu => {
  store.commit("setFireUser", fu);
});

Vue.prototype.$firebase = firebase;
