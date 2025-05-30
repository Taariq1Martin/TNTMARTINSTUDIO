import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCPT6Qh34Tf0mWAO5_eOR6lDAHb6j1D6g",
  authDomain: "notifications-tnt.firebaseapp.com",
  projectId: "notifications-tnt",
  storageBucket: "notifications-tnt.firebasestorage.app",
  messagingSenderId: "359459171286",
  appId: "1:359459171286:web:6deba6412f1086f56b1277",
  measurementId: "G-GJZ63Z8Q4R"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

navigator.serviceWorker.register('firebase-messaging-sw.js').then((registration) => {
  messaging.useServiceWorker(registration);

  const popup = document.getElementById("notification-popup");
  const allowBtn = document.getElementById("btn-allow");
  const rejectBtn = document.getElementById("btn-reject");

  if (Notification.permission === "default") {
    popup.classList.remove("hidden");
  }

  allowBtn.addEventListener("click", async () => {
    const permission = await Notification.requestPermission();
    popup.classList.add("hidden");

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BI-WCQzg2MUYk-1Tyb3T2aN0APjsaI2ZCi9iCSUZ22HWTo4KKD9PwS-i51Z_XnY0IB6D9Nb0AxnyhGDTo_dKpic"
      });
      console.log("Token:", token);
      alert("Subscribed! Token is logged in console.");
    }
  });

  rejectBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  onMessage(messaging, (payload) => {
    console.log("Foreground message:", payload);
    alert(`Notification: ${payload.notification.title}`);
  });
});
