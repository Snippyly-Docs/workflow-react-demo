import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import './App.css';

const App = () => {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);

  }, [client]);

  return <div className="app-container">My Snippyly App</div>;
};

export default App;