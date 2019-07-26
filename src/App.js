import React from 'react';
import { HashRouter } from 'react-router-dom';
import { StoreProvider, createStore } from 'easy-peasy';
import model from './model';
import routes from './routes';
import Header from './components/Header';

const store = createStore(model);

const App = () => {
  return (
    <StoreProvider store={store}>
      <div>
        <Header/>
        <HashRouter>
          {routes}
        </HashRouter>
      </div>
    </StoreProvider>
  );
}

export default App;
