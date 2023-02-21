import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

const App = () => {

  useEffect(() => {

    const isDataReset = window.sessionStorage.getItem('_snippyly_demo_reset');

    return () => {
      if (isDataReset === null) {
        fetch(
          "https://us-central1-snippyly-sdk-prod.cloudfunctions.net/resetDemoData",
          {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ documentId: '' }),
          }
        );
        window.sessionStorage.setItem('_snippyly_demo_reset', 'true');
      }

    }
  }, []);

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