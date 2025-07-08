import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { Navigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCqzEPnLwOxozpdHsoVOo0Jmbvao9M4nvY",
  authDomain: "bot-simulation-95f71.firebaseapp.com",
  databaseURL: "https://bot-simulation-95f71-default-rtdb.firebaseio.com",
  projectId: "bot-simulation-95f71",
  storageBucket: "bot-simulation-95f71.appspot.com",
  messagingSenderId: "865109523752",
  appId: "1:865109523752:web:a509e4eca06bdff0a5641d",
  measurementId: "G-614JL4H2K5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// check to see if the username exists
// if username does not exist -> add all of this to firebase
 
export function CheckUserExist(username, email, password, navigate){
    get(child(ref(db), `user/${username}`)).then((snapshot)=>{
        if(snapshot.exists()){
            return;
        } else{
            AddUser(username, email, password);
            navigate("/")
        }
    })
}
  
function AddUser(username, email, password,){
    set(ref(db, `user/${username}`),{
        username: username,
        email: email,
        password: password
    })
}