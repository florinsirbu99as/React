import "./App.css";
import firebase from "./firebase";
import "firebase/database";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = firebase.database().ref("schools");
    dbRef.on("value", (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  return (
    <div>
      {data && (
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}>{data[key]}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
