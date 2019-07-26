import { action, thunk } from 'easy-peasy';
import uuid from 'uuid';
import axios from 'axios';

export default {
  contents: [],
  fetchContents: thunk(actions => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        actions.setContents(res.data);
      })
  }),
  setContents: action((state, contents) => {
    state.contents = contents;
  }),
  addContent: action((state, contentData) => {
    contentData.id = uuid.v4();
    contentData.userId = uuid.v4();
    state.contents = [contentData, ...state.contents];
  })
}