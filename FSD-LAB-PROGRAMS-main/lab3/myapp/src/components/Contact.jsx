import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Message" />
        </Form.Group>

        <Button variant="primary">Send</Button>
      </Form>
    </Container>
  );
}

export default Contact;