import React from "react";
import Header from "../components/Header";
import UserTable from "../components/UserTable";

const PredictionResultPage = () => {
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
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default PredictionResultPage;
