import React from "react";
import Header from "../components/Header";
import CreateUserForm from "../components/CreateUserForm";
import UserTable from "../components/UserTable";

const AdminPage = () => {
  return (
    <div>
      <Header />
      <div class="container py-5">
        <div class="row">
          <div class="col-sm">
            <CreateUserForm />
          </div>
          <div class="col-sm"><UserTable/></div>
        </div>
        <div class="row">
          <div class="col-sm">
            3
          </div>
          <div class="col-sm">4</div>
        </div>
      </div>
      
    </div>
  );
};

export default AdminPage;
