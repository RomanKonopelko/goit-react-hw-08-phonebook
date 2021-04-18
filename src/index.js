import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/es/integration/react';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={store.persistor}> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* </PersistGate> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
