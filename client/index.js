import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import configureStore from './store';

import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import { IntlProvider } from 'react-intl';
import * as messages from 'locales';

console.log(messages.en);

ReactDOM.render(
  <Provider store={configureStore()}>
    <IntlProvider locale="en">
      <ReduxRouter>
        {router}
      </ReduxRouter>
    </IntlProvider>
  </Provider>
, document.getElementById('app'));
