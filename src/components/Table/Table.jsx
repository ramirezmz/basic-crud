import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Table from 'react-bootstrap/Table';
import storage from '../../data/db.json';
import { Button } from 'react-bootstrap';


function BasicExample() {
  
  const editFnc = (id) => {
    console.log(id)
  }
  
  const removeFnc = (index) => {
    storage.splice(index, 1)
    console.log(storage)
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
          storage.map(({id, name, lastName}) => (
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

export default BasicExample;