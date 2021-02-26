import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDkMephPec1-Hz8vCA27JuIHE9-pimFzW0",
  authDomain: "tinder-clone-ff8b8.firebaseapp.com",
  projectId: "tinder-clone-ff8b8",
  storageBucket: "tinder-clone-ff8b8.appspot.com",
  messagingSenderId: "688327581955",
  appId: "1:688327581955:web:b6829f460eb0cecd918936"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)

const database=firebaseApp.firestore()
export default database