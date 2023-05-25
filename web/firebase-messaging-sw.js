//importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
//importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
//firebase.initializeApp({
// apiKey: "AIzaSyCJtUPlAsiaKvdS1axfsmciUfchY0GNWaQ",
//  authDomain: "playground-3c810.firebaseapp.com",
//  projectId: "playground-3c810",
//  storageBucket: "playground-3c810.appspot.com",
//  messagingSenderId: "109322381201",
//  appId: "1:109322381201:web:54aa4b62989eab21d81c30",
//  measurementId: "G-R8FBTJ57MT"
//});
//const messaging = firebase.messaging();
//messaging.setBackgroundMessageHandler(function (payload) {
//    const promiseChain = clients
//        .matchAll({
//            type: "window",
//            includeUncontrolled: true
//        })
//        .then(windowClients => {
//            for (let i = 0; i < windowClients.length; i++) {
//                const windowClient = windowClients[i];
//                windowClient.postMessage(payload);
//            }
//        })
//        .then(() => {
//            return registration.showNotification("New Message");
//        });
//    return promiseChain;
//});
//self.addEventListener('notificationclick', function (event) {
//    console.log('notification received: ', event)
//});
//
//


importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
 apiKey: "AIzaSyCJtUPlAsiaKvdS1axfsmciUfchY0GNWaQ",
  authDomain: "playground-3c810.firebaseapp.com",
  projectId: "playground-3c810",
  storageBucket: "playground-3c810.appspot.com",
  messagingSenderId: "109322381201",
  appId: "1:109322381201:web:54aa4b62989eab21d81c30",
  measurementId: "G-R8FBTJ57MT"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message, "registration",typeof self.registration.showNotification);

  return self.registration.showNotification(message.notification.title, {
    body: message.notification.body
  });
});
