import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHashHistory from 'history/lib/createHashHistory';

import reducer from './reducer.js';

let combinedCreateStore;

const createHistory = () => {
  return createHashHistory({queryKey: '_k'});
};

const storeEnhancers = [
  reduxReactRouter({
    createHistory,
    routerStateSelector: state => ({
      location: {
        pathname: undefined
      },
      routes: [],
      params: {},
      components: [],
      ...state.router
    })
  })
];

if (process.env.DEVTOOLS) {
  const { devTools } = require('redux-devtools');
  storeEnhancers.push(devTools());
  storeEnhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);
}

combinedCreateStore = compose(...storeEnhancers)(createStore);

export default function configureStore(initialState) {
  const store = combinedCreateStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducer.js', () => {
      const nextRootReducer = require('./reducer.js');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
