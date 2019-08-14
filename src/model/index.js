import { action, thunk } from 'easy-peasy';
// import uuid from 'uuid';
import axios from 'axios';

export default {
  contents: [],
  loading: false,
  alertData: {},
  fetchContents: thunk(actions => {
    actions.loadingBegin();
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        actions.loadingEnd();
        actions.setContents(res.data);
      })
      .catch((err) => {
        console.log(err);
        actions.loadingEnd();
        actions.alertIsOpen(true, 'Error occured while fetching contents.', 'danger');
      })
  }),
  addContent: thunk(async (actions, contentData) => {
    actions.loadingBegin();
    axios
    .post('https://jsonplaceholder.typicode.com/posts', contentData)
    .then((res) => {
      actions.loadingEnd();
      actions.savedContent(res.data);
      actions.alertIsOpen([true, 'Content has been posted!', 'success']);
    })
    .catch((err) => {
      console.log(err);
      actions.loadingEnd();
      actions.alertIsOpen(true, 'Error occured while posting a content.', 'danger');
    })
  }),
  editContent: thunk(async (actions, contentData, contentId) => {
    actions.loadingBegin();
    axios
    .patch(`https://jsonplaceholder.typicode.com/posts/${contentId}`, contentData)
    .then((res) => {
      actions.loadingEnd();
      actions.updatedContent(res.data, contentId);
    })
    .catch((err) => {
      actions.loadingEnd();
      actions.alertIsOpen(true, 'Error occured while updating a content.', 'danger');
    })
  }),
  alertIsOpen: action((state, alertData) => {
    state.alertData = {
      isOpen: alertData[0],
      message: alertData[1],
      type: alertData[2],
    };
  }),
  alertIsClose: action((state) => {
    state.alertData = {};
  }),
  loadingBegin: action((state) => {
    state.loading = true;
  }),
  loadingEnd: action((state) => {
    state.loading = false;
  }),
  setContents: action((state, contents) => {
    state.contents = contents;
  }),  
  savedContent: action((state, contentData) => {
    state.contents = [contentData, ...state.contents];
  }),
  updatedContent: action((state, contentData, contentId) => {
    const filteredContent  = state.contents.filter(content => content.id !== contentId);
    state.contents = [contentData, ...filteredContent];
  }),
}