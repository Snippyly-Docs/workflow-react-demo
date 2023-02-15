import styles from './Grid.module.css';

import { useState } from 'react';

// import Draggable from 'react-draggable';

const Grid = () => {

  const [numRows, setNumRows] = useState(9);
  const [numCells, setNumCells] = useState(14);

  const getGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      const cells = [];
      for (let j = 0; j < numCells; j++) {
        cells.push(<div className={styles['cell']} />);
      }
      rows.push(
        <div className={styles['row']}>
          { cells }
        </div>);
    }
    return rows;
  }

  return (
    // <Draggable>
      <div id="grid" className={styles['grid']}>
        {getGrid()}
      </div>
    // </Draggable>
  );
}

export default Grid;