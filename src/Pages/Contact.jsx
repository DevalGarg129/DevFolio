import React from "react";

export default function Contact() {
    return(
        <Container style={{ maxWidth: "600px", marginTop: "50px" }}>
            <h2>Contact Me</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Email"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter your Email"/>
                </Form.Group>

                <Button variant="primary">Submit</Button>
            </Form>
        </Container>
    )
}

