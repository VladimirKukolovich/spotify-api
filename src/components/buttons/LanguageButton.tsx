import { Language, useChangeLanguage } from 'components/languageContext/languageContext';
import React, { useState } from 'react';
import styles from './LanguageButton.module.scss';

export default function LanguageButton() {
  const [currentLanguage, setCurrentLanguage] = useChangeLanguage();
  const handleChange = () => {
    currentLanguage === 'en' ? setCurrentLanguage(Language.ru) : setCurrentLanguage(Language.en);
    localStorage.setItem('currentLanguage', currentLanguage === 'en' ? Language.ru : Language.en);
  };
  return (
    <div>
      {
        <button className={styles.langButton} onClick={handleChange}>
          {currentLanguage === 'en' ? 'ru' : 'en'}
        </button>
      }
    </div>
  );
}
