importScripts("https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBCPT6Qh34Tf0mWAO5_eOR6lDAHb6j1D6g",
  authDomain: "notifications-tnt.firebaseapp.com",
  projectId: "notifications-tnt",
  storageBucket: "notifications-tnt.appspot.com",
  messagingSenderId: "359459171286",
  appId: "1:359459171286:web:6deba6412f1086f56b1277",
  measurementId: "G-GJZ63Z8Q4R"
});

const messaging = firebase.messaging();