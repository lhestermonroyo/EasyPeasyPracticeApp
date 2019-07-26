import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ContentForm from '../../components/ContentForm';
import ContentFeed from '../../components/ContentFeed';

class HomePage extends Component {
  render() {
    return (
      <Container className="mt-3">
        <ContentForm/>
        <ContentFeed/>
      </Container>
    )
  }
}

export default HomePage;