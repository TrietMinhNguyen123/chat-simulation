import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, DataSnapshot } from "firebase/database";

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

export function AuthLogin(username, password, navigate){
    get(child(ref(db), `user/${username}`)).then((snapshot) => {
        if(snapshot.exists){
            const data = snapshot.val();
            if(data.password === password){
                navigate("/chatbot")
            }
        }
    })
}
