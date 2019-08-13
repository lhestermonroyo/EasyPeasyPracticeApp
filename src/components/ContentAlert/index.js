import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Alert } from 'react-bootstrap';

const ContentAlert = () => {
  const { alertData } = useStoreState(state => state);
  const alertIsClose = useStoreActions(action => action.alertIsClose);

  const handleClose = () => {
    alertIsClose();
  }

  if (alertData.isOpen) {
    return (
      <Alert variant={alertData.type} onClose={() => handleClose()} dismissible>
        <p>{alertData.message}</p>
      </Alert>
    );
  }
  else {
    return null;
  }
}

export default ContentAlert;