import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CreateUserForm from "../components/UserForm";
import UserTable from "src/components/UserTable";
import UserCard from "src/components/UserCard";
import TeamCard from "src/components/TeamCard";

const AdminPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="container pt-3">
        <div className="row">
          <div className="col-sm">
            <UserCard />
          </div>
          <div className="col-sm">
            <UserTable />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <TeamCard />
          </div>
          <div className="col-sm">
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
