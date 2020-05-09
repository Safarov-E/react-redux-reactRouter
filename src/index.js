import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import reducers from './components/store/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(reducers);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,document.getElementById('root'));
