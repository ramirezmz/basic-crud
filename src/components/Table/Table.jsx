import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../utils/Users';

function TableComponent() {
  const dispatch = useDispatch()
  const userList = useSelector((state) => (state.user.value))

  const editFnc = (id) => {
    console.log(id)
  }
  
  const removeFnc = (id) => {
    dispatch(deleteUser({id: id}))
  }

  return (
    <Table striped bordered hover className='table-content'>
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
                variant='primary'
                onClick={() => editFnc(id)}>
                  Editar
                </Button>
                <Button
                  variant='danger'
                  onClick={() => removeFnc(id)}>
                    Remover
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