import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api.php");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render the fetched data */}
      {data.map((item, index) => (
        <div key={index}>
          <p>Name: {item.Name}</p>
          <p>Produkt: {item.Produkt}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
