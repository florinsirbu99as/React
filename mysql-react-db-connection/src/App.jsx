import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8888/recipes")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data.map((recipe) => (
        <div key={recipe.id}>{recipe.name}</div>
      ))}
    </>
  );
}

export default App;
