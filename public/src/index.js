import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'
import * as serviceWorker from './serviceWorker';
import { Fabric } from "@fluentui/react"; 

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Fabric>
          <App />
        </Fabric>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
