import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
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

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);

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
        <div className={styles['topbar']}></div>
        <Grid />
        <Diagram />
        <Panel />
      </div>
    </div>
  );
};

export default App;