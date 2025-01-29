import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Table from './table';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {



  return (

    <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>

  );
}

export default App;
