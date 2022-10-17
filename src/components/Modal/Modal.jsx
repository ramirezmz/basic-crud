import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import InputGroupComponent from '../Input/InputGroup';

function VerticalCenteredModal(props) {
  const saveData = () => {
    console.log('Salvando')
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Novo Cadastro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Prencha os dados completos</h4>
        <InputGroupComponent />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={saveData}>Salvar</Button>
        <Button variant='danger' onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ModalComponent = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Adicionar
      </Button>

      <VerticalCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default ModalComponent