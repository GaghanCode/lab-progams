import { Container, Row, Col, Card } from 'react-bootstrap';

function Projects() {
  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4">Projects</h2>

      <Row>
        <Col lg={4} md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>IoT Monitoring</Card.Title>
              <Card.Text>Raspberry Pi + Grafana project.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>React Website</Card.Title>
              <Card.Text>Responsive web application.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Networking Tool</Card.Title>
              <Card.Text>Computer network troubleshooting.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Projects;