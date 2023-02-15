import styles from './Diagram.module.css';

import Draggable from 'react-draggable';

import ShoppingIcon from '../../icons/shopping-cart.svg';
import ClockIcon from '../../icons/clock.svg';
import EmailIcon from '../../icons/email.svg';

const Diagram = () => {

  return (
    <Draggable>
      <div className={styles['diagram-container']}>
        <div className={styles['shape']}>
          <img src={ShoppingIcon} />
          <p>Customer buys a product</p>
        </div>
        <div className={styles['spacer']}></div>
        <div className={styles['shape']}>
          <img src={ClockIcon} />
          <p>Waits 3 days</p></div>
        <div className={styles['spacer']}></div>
        <div className={styles['shape']}>
          <img src={EmailIcon} />
          <p>Receives survey email</p></div>
        <div className={styles['spacer']}></div>
        <div className={styles['node']}></div>
      </div>
    </Draggable>
  );
}

export default Diagram;