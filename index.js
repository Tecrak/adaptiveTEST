//DONE23
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

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
const form = document.getElementById('form');

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const role = document.getElementById('role').value;
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;
  const birth = document.getElementById('birth').value;
  const HTMLS = document.getElementById('HTMLS').value;
  const CSSS = document.getElementById('CSSS').value;
  const PHPS = document.getElementById('PHPS').value;
  const JSS = document.getElementById('JSS').value;
  const MySQLS = document.getElementById('MySQLS').value;
  const WebDesignS = document.getElementById('WebDesignS').value;
  const message = document.getElementById('message').value;
  const CV = document.getElementById('CV').value;

  try {
    // Add data to Firestore
    const docRef = await addDoc(collection(db, 'testData'), {
      role: role,
      name: name,
      surname: surname,
      email: email,
      birth: birth,
      HTMLS: HTMLS,
      CSSS: CSSS,
      PHPS: PHPS,
      JSS: JSS,
      MySQLS: MySQLS,
      WebDesignS: WebDesignS,
      message: message,
      CV: CV

    });
    console.log('Document written with ID: ', docRef.id);
    const submitClose=document.getElementById("submiter");
    const thankW=document.getElementById("thankWind");
    thankW.style="display:block";
    submitClose.style="display:none";
    submitClose.disabled=true;
    form.reset();

  } catch (error) {
    console.error('Error adding document: ', error);
  }
});
