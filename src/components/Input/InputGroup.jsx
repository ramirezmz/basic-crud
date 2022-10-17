import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function InputGroupComponent() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Last Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
}

export default InputGroupComponent;