import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface AdminModalProps {
  cardText: string;
  isVisible: boolean;
  onClose: () => void;  // Callback function to notify parent about closing
}

const AdminModal = ({
  cardText,
  isVisible,
  onClose
}: AdminModalProps) => {
  const [state, setState] = useState(isVisible);

  // Sync local state with isVisible prop
  React.useEffect(() => {
    setState(isVisible);
  }, [isVisible]);

  const handleClose = () => {
    console.log('Closing modal');
    setState(false);
    onClose(); // Call the parent callback to notify about closing
  };

  return (
    <Modal
      show={state} // Use local state to control the modal visibility
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title id="contained-modal-title-vcenter">
          Pridėti dalyvi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Uždaryti</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AdminModal;
