import styles from './Panel.module.css'

import Draggable from 'react-draggable';

import SplitIcon from '../../icons/split.svg';
import ClockIcon from '../../icons/clock-grey.svg';
import EmailIcon from '../../icons/email-grey.svg';
import ClipboardIcon from '../../icons/clipboard-list.svg';

const Panel = () => {


  return (
    <Draggable>
      <div className={styles['panel-container']}>
        <p className={styles['panel-header']}>Add your customer's journey</p>
        <p className={styles['section-header']}>Rules</p>
        <div className={styles['panel-item']}>
          <img src={SplitIcon} />
          <p>If/else</p>
        </div>
        <div className={styles['panel-item']}>
          <img src={SplitIcon} />
          <p>50/50 split</p>
        </div>
        <div className={styles['panel-item']}>
          <img src={ClockIcon} />
          <p>Delay</p>
        </div>
        <p className={styles['section-header']}>Actions</p>
        <div className={styles['panel-item']}>
          <img src={EmailIcon} />
          <p>Send email</p>
        </div>
        <div className={styles['panel-item']}>
          <img src={ClipboardIcon} />
          <p>Send survey</p>
        </div>
      </div>

    </Draggable>
  );
}

export default Panel;