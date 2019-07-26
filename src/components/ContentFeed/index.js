import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Card } from 'react-bootstrap';

const ContentFeed = () => {
  const contents = useStoreState(state => state.contents);
  const fetchContents = useStoreActions(actions => actions.fetchContents);

  useEffect(() => {
    fetchContents();
  }, []); //eslint-disable-line

  return (
    <div className="mt-3">
      {contents ? 
          contents.map((content, i) => {
            return (
              <Card className="mb-2">
                <Card.Body>
                  <h4 className="mb-3">{content.title}</h4>
                  <p>{content.body}</p>
                </Card.Body>
              </Card>
            )
          })
        : 
        <p className="text-center">No content created yet.</p>
        }
    </div>
  )
}

export default ContentFeed;
