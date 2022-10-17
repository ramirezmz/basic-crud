import React from 'react'
import TableComponent from '../components/Table/Table'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ModalComponent from '../components/Modal/Modal';

const Home = () => {
  return (
    <Container fluid="md">
      <Row>
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '2rem'}}>
          <h2>Gostaria de adicionar alguém mais?</h2>
          <ModalComponent />
        </Container>
      <TableComponent />
      </Row>
    </Container>
  )
}

export default Home