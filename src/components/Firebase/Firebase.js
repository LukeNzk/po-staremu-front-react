import app from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBjj2_ylDI1nuSyr4xVB2rffRtT_MsI6m8",
  authDomain: "postaremu-6f5d2.firebaseapp.com",
  databaseURL: "https://postaremu-6f5d2.firebaseio.com",
  projectId: "postaremu-6f5d2",
  storageBucket: "postaremu-6f5d2.appspot.com",
  messagingSenderId: "386010048587",
  appId: "1:386010048587:web:e0266e14ed67b50c67c5ce",
  measurementId: "G-EBHRW4L2KK"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
  }

  calendarDoc = () => this.db.collection('views').doc('calendar');
}

export default Firebase;
