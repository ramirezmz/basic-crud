import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../utils/Users';

function VerticalCenteredModal(props) {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const userList = useSelector((state) => (state.user.value))
  const dispatch = useDispatch()
  const handleData = () => {
    dispatch(addUser({
      id: userList[userList.length - 1].id + 1,
      name,
      lastName
    }))
    props.onHide()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Novo Cadastro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(event) => setName(event.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Last Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(event) => setLastName(event.target.value)}
        />
      </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleData}>Salvar</Button>
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