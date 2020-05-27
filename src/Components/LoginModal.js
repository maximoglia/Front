import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from'react-bootstrap/Button';

export default (props) => 


<Modal show={props.show} onHide={ props.handleHide }>
    <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
    </Modal.Header>

    <Modal.Body><p>Acá iría el form </p></Modal.Body>

    <Modal.Footer>
        <Button variant="secondary" 
                onClick={ props.handleHide }
                >
            Cancelar
        </Button>

        <Button variant="primary">
            Aceptar
        </Button>
    </Modal.Footer>
</Modal>

