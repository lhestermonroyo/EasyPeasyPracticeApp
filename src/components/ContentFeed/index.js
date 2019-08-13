import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Card, Image, Button, Dropdown } from 'react-bootstrap';

const ContentFeed = () => {
  const { contents, loading } = useStoreState(state => state);
  const fetchContents = useStoreActions(actions => actions.fetchContents);
  const imgAddress = "https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP4510-NPEB02098_00-AVCAPABILT000001/1550717678000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000";
  useEffect(() => {
    fetchContents();
  }, []); //eslint-disable-line
  
  return (
    <div className="mt-3">
      {loading ? 
        <p className="text-center">Loading, Please wait...</p>
      : contents !== [] ?
        contents.map((content, i) => {
          return (
            <Card key={i} className="mb-2">
              <Card.Body>
                <Dropdown>
                  <Dropdown.Toggle 
                    alignRight
                    variant="light"
                    id="dropdown-menu-align-right"
                    style={{float: 'right'}}>    
                    Options              
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-3">View More</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-1"><i className="fa fa-edit fa-fw" /> Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><i className="fa fa-trash fa-fw"/> Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Image
                  style={{height: '2.5rem', width: '2.5rem', float: 'left'}} 
                  src={imgAddress} 
                  thumbnail
                  roundedCircle />
                <p className="mt-2 mb-4 ml-5">John Doe</p>
                <hr/>
                <h4 className="mb-3">{content.title}</h4>
                <p>{content.body}</p>
              </Card.Body>
            </Card>
          )
        })
      : <p className="text-center">No content created yet.</p>
      }
    </div>
  )
}

export default ContentFeed;
