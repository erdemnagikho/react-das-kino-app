import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
