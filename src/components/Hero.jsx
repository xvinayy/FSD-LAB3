import { Container, Badge } from "react-bootstrap";

export default function Hero() {
  return (
    <Container className="text-center py-5">
      <h1 className="display-4">Hi, I'm Vinay 👋</h1>
      <p className="lead">Frontend Developer | React Enthusiast</p>
      <Badge bg="success">Available for work</Badge>
    </Container>
  );
}