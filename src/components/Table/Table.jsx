import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../utils/Users';
import { useState } from 'react';
import ModalContent from '../Modal/ModalContent';
import { BiEditAlt } from "react-icons/bi";
import {FiTrash2} from 'react-icons/fi'


function TableComponent() {
  const [modalShow, setModalShow] = useState(false)
  const [getId, setGetId] = useState(0)
  const [ person, setPerson ] = useState({})
  const dispatch = useDispatch()
  const userList = useSelector((state) => (state.user.value))

  const removeFnc = (id) => dispatch(deleteUser({id: id}))

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          userList.map(({id, name, lastName}) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{lastName}</td>
              <td className='table-actions'>
                <Button
                  style={{ margin: '.2rem'}}
                  variant='primary'
                  onClick={() => {
                    setModalShow(true)
                    setGetId(id)
                    setPerson({
                      id,
                      name,
                      lastName
                    })
                  }}
                  >
                  <BiEditAlt/>
                </Button>
                <ModalContent
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  id={getId}
                  person={person}
                />
                <Button
                  variant='danger'
                  onClick={() => removeFnc(id)}>
                    <FiTrash2 />
                </Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default TableComponent;