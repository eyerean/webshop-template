import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from './components';
import { theme } from './theme';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    console.log('++ env ++', process.env.NODE_ENV);
    const reachApi = async () => {
      const res = await callBackendAPI();
      setMessage(res?.message || 'API request failed!');
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
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{message}</p>
          <Button>I'm a button!</Button>
          <Button primary>I'm a primary button</Button>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
