import * as React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  React.useEffect(() => {
    console.log('in the hook?!');
    const reachApi = async () => {
      const res = await callBackendAPI();
      console.log('res', res);
    };
    reachApi();
  }, []);

  const callBackendAPI = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
