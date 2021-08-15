import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '~src/store/store';

ReactDOM.render(
  <Provider store={store}>
    <p />
  </Provider>,
  document.getElementById('root'),
);
