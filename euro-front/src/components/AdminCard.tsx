import { useState } from "react";
import AdminModal from "./AdminModal";


const AdminCard = ({
  cardText,
  nameOfClass,
  CustomForm
}: {
  cardText: string;
  nameOfClass: string;
  CustomForm: React.ComponentType<any>;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className={nameOfClass} aria-hidden="true"></div>
      <div className="card-body">
        <h5 className="card-title">{cardText}</h5>
        <p className="card-text"></p>
        <button className="btn btn-primary" onClick={handleOpen}>Pridėti</button>
        <AdminModal cardText={cardText} isVisible={isModalOpen} onClose={handleClose} AdminForm={CustomForm} />
      </div>
    </div>
  );
};

export default AdminCard;
