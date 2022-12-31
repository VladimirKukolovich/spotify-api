import TextButton from 'components/buttons/TextButton';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AsideBar.module.scss';
import { useTranslate } from 'components/languageContext/languageContext';

export default function AsideBar() {
  const [isActiveButton, setIsActiveButton] = useState('');
  const homeButtonName = useTranslate('asideButtons.home');
  const searchButtonName = useTranslate('asideButtons.search');
  const lidraryButtonName = useTranslate('asideButtons.library');
  const asideButtons = [homeButtonName, searchButtonName, lidraryButtonName];
  const asideLinks = ['/', 'search', 'collection/playlists'];

  return (
    <div className={styles.AsideBar}>
      <h2>Spotify</h2>
      <hr className={styles.hr} />
      <div className={styles.buttons}>
        {asideButtons.map((el, index) => (
          <Link to={asideLinks[index]} key={el}>
            <TextButton
              name={el}
              activeButton={isActiveButton}
              setIsActiveButton={setIsActiveButton}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
