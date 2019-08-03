import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './service/store';
import { Provider } from 'react-redux';
// import reducers here
// ex) article: ArticleReducer
import App from './containers/app';

let composeWithDevTools: any;
if (process.env.NODE_ENV !== 'development') {
  /* tslint:disable-next-line:no-var-requires */
  composeWithDevTools = require('redux-devtools-extension/logOnlyInProduction').composeWithDevTools;
} else {
  /* tslint:disable-next-line:no-var-requires */
  composeWithDevTools = require('redux-devtools-extension').composeWithDevTools;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
