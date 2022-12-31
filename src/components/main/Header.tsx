import React from 'react';
import HeaderAvatar from './HeaderAvatar';
import styles from './Header.module.scss';
import { GrPrevious } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { GrNext } from 'react-icons/gr';
import LanguageButton from 'components/buttons/LanguageButton';
// const redirect_url = 'http://localhost:8888/callback';
function Header() {
  const registration = (
    <a href="https://accounts.spotify.com/authorize?client_id=f8d044236c4543eb89893a8c401932d3&redirect_uri=http://localhost:3000/&response_type=code">
      Registration
    </a>
  );
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.header_buttons}>
        <div className={styles.header_arrows}>
          <GrPrevious size={22} onClick={() => navigate(-1)} />
          <GrNext className={styles.nextButton} size={22} onClick={() => navigate(+1)} />
          {/* {registration} */}
        </div>
        <LanguageButton />
      </div>
      <HeaderAvatar />
    </div>
  );
}
export default Header;
