import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {updateUser} from '../../utils/Users'

function ModalContent(props) {
  const [newName, setNewName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const dispatch = useDispatch()

  console.log(props.person)
  const handleUpdateData = () => {
    dispatch(updateUser({
      id: props.person.id,
      name: newName,
      lastName: newLastName
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
          Atualizar Cadastro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(event) => setNewName(event.target.value)}
          defaultValue={props.person.name}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Last Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(event) => setNewLastName(event.target.value)}
          defaultValue={props.person.lastName}
        />
      </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleUpdateData}>Salvar</Button>
        <Button variant='danger' onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalContent