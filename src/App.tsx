import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

const App = () => {

  /**
   * Snippyly Code Example
   * Initializes the Snippyly SDK.
   */
  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);

  }, [client]);

  return <div className={styles['app-container']}>My Snippyly App</div>;
};

export default App;