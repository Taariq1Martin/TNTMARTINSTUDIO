importScripts("https://www.gstatic.com/firebasejs/11.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBCPT6Qh34Tf0mWAO5_eOR6lDAHb6j1D6g",
  authDomain: "notifications-tnt.firebaseapp.com",
  projectId: "notifications-tnt",
  storageBucket: "notifications-tnt.firebasestorage.app",
  messagingSenderId: "359459171286",
  appId: "1:359459171286:web:6deba6412f1086f56b1277",
  measurementId: "G-GJZ63Z8Q4R"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icon.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
