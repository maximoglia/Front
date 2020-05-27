import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default props =>{

    return(
        <Row>

            <Col>
            
                <Form>
                    <Col>
                        <Form.Group>
                            <Form.Label>
                                Categorías
                            </Form.Label>

                            <Form.Control as="select">
                            </Form.Control>

                        </Form.Group>
                    </Col>
                        
                    <Col>
                         <Button variant="secondary">
                            >
                         </Button>

                    </Col>

                </Form>
            
            </Col>

        </Row>
    )

}