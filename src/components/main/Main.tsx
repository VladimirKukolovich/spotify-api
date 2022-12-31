import React from 'react';
import { Outlet } from 'react-router-dom';
import AsideBar from './AsideBar';
import Header from './Header';
import styles from './Main.module.scss';

function Main() {
  return (
    <>
      <div className={styles.container}>
        <AsideBar />
        <div className={styles.outletWrapper}>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Main;
