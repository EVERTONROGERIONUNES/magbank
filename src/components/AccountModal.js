import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AccountModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
            <Modal.Title>Abra sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId='formBasicName'>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type='text' placeholder='Informe seu nome' />
                </Form.Group>

                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Informe seu email' />
                </Form.Group>

                <Form.Group controlId='formCity'>
                    <Form.Label className='my-1 mr-2' htmlFor='formCitySelect'>
                        Cidade
                    </Form.Label>
                    <Form.Control
                        as='select'
                        className='my-1 mr-sm-2'
                        id='formCitySelect'
                        custom
                    >
                        <option value='0'>Florianópolis - SC</option>
                        <option value='1'>Curitiba - PR</option>
                        <option value='2'>São Paulo - SP</option>
                        <option value='3'>Rio de Janeiro - RJ</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='formBasicCheckbox'>
                    <Form.Check
                        type='checkbox'
                        label='Eu li e concordo com os termos de uso.'
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant='primary' onClick={handleClose}>
                Criar Conta
            </Button>
        </Modal.Footer>
    </Modal>
);

export default AccountModal;