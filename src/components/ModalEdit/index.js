import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { Modal, Form, Button } from 'react-bootstrap';
import ContentAlert from '../ContentAlert';

const ModalEdit = (props) => {
  const editContent = useStoreActions(action => action.editContent);
  const { toggle, setToggle } = props;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    editContent({ title, body, userId: 1 }, toggle.content.id);
    setTitle("");
    setBody("");
    setToggle({ isOpen: false, content: [] });
  }
  return (
    <Modal size="lg" show={toggle.isOpen} onHide={() => setToggle({ isOpen: false, content: [] })}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Content</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ContentAlert/>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="formBasic">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              type="text" 
              placeholder={toggle.content.title} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <Form.Control 
              value={body} 
              onChange={(e) => setBody(e.target.value)}
              as="textarea" 
              rows="7" 
              placeholder={toggle.content.body} />
          </Form.Group>
          <Button
            // disabled={loading ? true : false} 
            variant="primary" 
            type="submit">
            Update
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalEdit;