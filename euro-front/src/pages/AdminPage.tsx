import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CreateUserForm from "../components/UserForm";

const AdminPage = () => {

  const [data, setData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
       

        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-sm">
            <CreateUserForm />
          </div>
         
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
