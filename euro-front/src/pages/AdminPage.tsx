import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import UserTable from "src/components/UserTable";
import AdminCard from "src/components/AdminCard";
import { getAllUsers } from "src/services/AdministrationService";

const AdminPage = () => {
  const [data, setData] = useState<User[]>([]);

  //#region useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers();

        const users: User[] = response.data.map((item: any) => ({
          userName: item.userName ?? null,  
          points: item.points ?? null,
          password: item.password ?? null,
        }));

        setData(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);
  //#endregion


  return (
    <div>
      <Header />
      <div className="container pt-3 mt-3 border border-warning w-100">
        <div className="row pt-3">
          <div className="col-sm d-flex justify-content-center align-items-center">
            <AdminCard cardText={'Pridėti dalyvi'} nameOfClass={'Kobe'}/>
          </div>
          <div className="col-sm">
            <UserTable tableData={data} />
          </div>
        </div>
        <div className="row pt-3 ">
          <div className="col-sm col-sm d-flex justify-content-center align-items-centers ">
          <AdminCard cardText={'Pridėti komandą'} nameOfClass={'Jokic'}/>
          </div>
          <div className="col-sm">
            <UserTable tableData={data} />
          </div>
        </div>
        <div className="row pt-3 ">
          <div className="col-sm col-sm d-flex justify-content-center align-items-centers ">
          <AdminCard cardText={'Pridėti rungtynes'} nameOfClass={'LebronDunk'}/>
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
