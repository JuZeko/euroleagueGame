import React from "react";
import Header from "../components/Header";
import UserTable from "../components/UserTable";
import { UserPointsColumns } from '../data/TableColumns';


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
          <UserTable columns={ UserPointsColumns } />
        </div>
      </div>
    </div>
  );
};

export default PredictionResultPage;