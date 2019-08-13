import React, { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Button, Card, Form } from 'react-bootstrap';
import ContentAlert from '../ContentAlert';

const ContentForm = () => {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');

  const addContent = useStoreActions(actions => actions.addContent);
  const { loading } = useStoreState(state => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    addContent({ title, body, userId: 1 });
    setTitle('');
    setBody('');
  }

  return (
    <Card>
      <Card.Header>Create Post</Card.Header>
      <Card.Body>
        <ContentAlert/>
        <Form onSubmit={e => handleSubmit(e)}>
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
            disabled={loading ? true : false} 
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