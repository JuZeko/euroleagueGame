import React from "react";
import Header from "../components/Header";

const PredictionTable = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container text-center">
          <h1>Centered Bootstrap Container</h1>
          <p>This container is centered both horizontally and vertically.</p>
        </div>
      </div>
    </div>
  );
};

export default PredictionTable;
