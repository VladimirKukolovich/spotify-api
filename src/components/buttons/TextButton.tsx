import React from 'react';
import styles from './TextButton.module.scss';
type ButtonTextProps = {
  name: string;
  activeButton: string;
  setIsActiveButton: (e: string) => void;
};
function ButtonText({ name, activeButton, setIsActiveButton }: ButtonTextProps) {
  const HandleActiveButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.target instanceof HTMLButtonElement) {
      e.target.innerHTML === name ? setIsActiveButton(e.target.innerHTML) : null;
    }
  };
  return (
    <button
      className={name === activeButton ? styles.active : styles.textButton}
      onClick={HandleActiveButton}
    >
      {name}
    </button>
  );
}
export default ButtonText;
