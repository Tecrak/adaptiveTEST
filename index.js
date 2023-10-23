//COOO
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.6.6//firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq8Dx4yfY0GO6AHQfVMAtKecxxYkvCZII",
  authDomain: "testdb-df121.firebaseapp.com",
  projectId: "testdb-df121",
  storageBucket: "testdb-df121.appspot.com",
  messagingSenderId: "623331774347",
  appId: "1:623331774347:web:bda28952a8de27cd64a98e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Add data to Firestore
  db.collection('user_data').add({
      name: name,
      email: email
  })
  .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
      // Optionally, you can redirect the user to a thank you page or display a success message here
  })
  .catch(function (error) {
      console.error('Error adding document: ', error);
  });
});
