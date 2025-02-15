import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const res = await axios.get("https://picsum.photos/v2/list");
    const data_items = await res.data;

    // console.log(data_items);
    setData(data_items);
  };

  return (
    <>
      <div className="container">
        <div className="img-container">
          {data.map((item, index) => {
            return (
              <div key={index} className="img">
                <img src={item.download_url} alt="image" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
