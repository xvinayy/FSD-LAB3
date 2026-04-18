import { Container, Row, Col, Card } from "react-bootstrap";

export default function Projects() {
  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4">Projects</h2>

      <Row>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Col key={item} lg={4} md={6} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={`https://via.placeholder.com/300?text=Project+${item}`}
              />
              <Card.Body>
                <Card.Title>Project {item}</Card.Title>
                <Card.Text>
                  This is a sample project description.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}