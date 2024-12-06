import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CreateUserForm from "../components/UserForm";
import UserTable from "src/components/UserTable";
import UserCard from "src/components/UserCard";
import TeamCard from "src/components/TeamCard";
import { getAllUsers } from "src/services/AdministrationService";

const AdminPage = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers();
        console.log(response)

        const users: User[] = response.data.map((item: any) => ({
          userName: item.userName ?? null,  // Default to null if userName is missing or undefined
          points: item.points ?? null,      // Default to null if points is missing or undefined
          password: item.password ?? null,  // Default to null if password is missing or undefined
        }));

        setData(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="container pt-3 mt-3 border border-warning w-100">
        <div className="row pt-3">
          <div className="col-sm d-flex justify-content-center align-items-center">
            <UserCard />
          </div>
          <div className="col-sm">
            <UserTable tableData={data} />
          </div>
        </div>
        <div className="row pt-3 ">
          <div className="col-sm col-sm d-flex justify-content-center align-items-centers ">
            <TeamCard />
          </div>
          <div className="col-sm">
            <UserTable tableData={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
