import React from "react";
import Header from "../components/Header";
import CreateUserForm from "../components/CreateUserForm";
import UserTable from "../components/UserTable";
import { UserPointsColumns, UserData } from '../data/TableColumns';

const AdminPage = () => {


  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-sm">
            <CreateUserForm />
          </div>
          <div className="col-sm"><UserTable columns={ UserPointsColumns } data = {UserData} /></div>
        </div>
        <div className="row">
          <div className="col-sm">
            3
          </div>
          <div className="col-sm">4</div>
        </div>
      </div>
      
    </div>
  );
};


export default AdminPage;
