import { useEffect } from "react";
import { VeltPresence, useVeltClient } from '@veltdev/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Grid from './components/grid/Grid';
import Diagram from './components/diagram/Diagram';
import Panel from './components/panel/Panel';

import PencilIcon from './icons/pencil.svg';
import MegaphoneIcon from './icons/megaphone.svg';
import PieIcon from './icons/pie.svg';
import GridIcon from './icons/grid.svg';
import SearchIcon from './icons/search.svg';
import SettingsIcon from './icons/settings.svg';

const App = () => {

  /**
   * Velt Code Example
   * Initializes the Velt SDK.
   */
  const { client } = useVeltClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);
    client.setDocumentId('workflow-react-demo');

  }, [client]);

  useEffect(() => {

    if (!client) return;

    client.getPresenceElement().getOnlineUsersOnCurrentDocument().subscribe((users: any) => {
      if (users === null) return;
      if (users.length === 0) {
        const isDataReset = window.sessionStorage.getItem('_snippyly_demo_reset');

        if (isDataReset === null) {
          fetch(
            "https://us-central1-snippyly-sdk-prod.cloudfunctions.net/resetDemoData",
            {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify({ documentId: 'workflow-react-demo' }),
            }
          );
          window.sessionStorage.setItem('_snippyly_demo_reset', 'true');
        }
      }
    });

  }, [client]);

  return (
    <div className={styles['app-container']}>
      <div className={styles['navbar']}>
        <div className={styles['top-navbar']}>
          <div className={styles['avatar']} />
          <img src={PencilIcon} />
          <img src={MegaphoneIcon} />
          <img src={PieIcon} />
          <img src={GridIcon} />
          <img src={SearchIcon} />
        </div>
        <img className={styles['settings']} src={SettingsIcon} />
      </div>
      <div className={styles['main-window']}>
        <div className={styles['topbar']}>
          {/**
           * Velt Code Example
           * Feature: Presence
           */}
          <VeltPresence />
        </div>
        <Grid />
        <Diagram />
        <Panel />
      </div>
    </div>
  );
};

export default App;