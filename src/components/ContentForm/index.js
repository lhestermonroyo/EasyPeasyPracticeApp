import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { Button, Card, Form } from 'react-bootstrap';

const ContentForm = () => {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');

  const addContent = useStoreActions(actions => actions.addContent);
  return (
    <Card>
      <Card.Header>Create Post</Card.Header>
      <Card.Body>
        <Form onSubmit={(e) => {
          e.preventDefault();
          addContent({title, body});
        }}>
          <Form.Group controlId="formBasic">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              type="text" 
              placeholder="Enter content title" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <Form.Control 
              value={body} 
              onChange={(e) => setBody(e.target.value)}
              as="textarea" 
              rows="7" 
              placeholder="Enter content body" />
          </Form.Group>
          <Button 
            variant="primary" 
            type="submit">
            Post
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ContentForm;