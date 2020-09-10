import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [nasaData, getNasaData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=HNLQulJo3avR2EshFeCHGKZyeXLr46GGjQbG9sLr&date=2020-09-09`
      )
      .then((response) => {
        getNasaData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(nasaData);

  const [infoData, setInfoData] = useState(false);
  // const toggle = () => {
  //   if (infoData === false) {
  //     const btnInfo = document.getElementById("explanation");
  //     btnInfo.style.display = "none";
  //   } else {
  //     const btnInfo = document.getElementById("explanation");
  //     btnInfo.style.display = "block";
  //   }
  // };

  // const btnInfo = document.getElementById.("#explanation");
  // btnInfo.addEventListener.onload("click", function (event) {
  //   return (
  //     <div>
  //       <h4>{nasaData.explanation}</h4>
  //     </div>
  //   );
  // });

  // function btnMaker(object){
  //   const parentDiv = document.createElement(".information container");
  //   const infoHeader = document.createElement("h4")

  // }

  return (
    <div className="nasa-info">
      {/* <Header title = {nasaData.title}/> */}
      <div className="header">
        <h1>NASA Photo of the Day</h1>
        <h2> Title: {nasaData.title} </h2>
        <h3> Date Captured: {nasaData.date}</h3>
      </div>
      <div className="img-container">
        <img src={nasaData.url} alt="" />
      </div>
      <div className="information container">
        <h4>Photo Information Below</h4>
        <button className="button" onClick={() => setInfoData(!infoData)}>
          Click for photo information
          {infoData && <h4>{nasaData.explanation}</h4>}
        </button>
      </div>
    </div>
  );
}

export default App;
