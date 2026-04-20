import { Container, Badge } from 'react-bootstrap';

function Hero() {
  return (
    <Container className="text-center py-5">
      <h1 className="display-4">Hello, I'm meghanathan</h1>
      <p className="lead">Engineering Student & Web Developer</p>
      <Badge bg="success">Available for Projects</Badge>
    </Container>
  );
}

export default Hero;