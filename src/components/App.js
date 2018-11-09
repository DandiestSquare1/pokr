import React, { Component } from 'react';

import Table from './Table'

import styles from './App.module.sass'

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Table />
      </div>
    );
  }
}

export default App;
