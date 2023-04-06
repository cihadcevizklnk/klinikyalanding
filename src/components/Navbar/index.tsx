import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import styles from './styles.module.scss';
import { useState } from 'react';
import Link from 'next/link';
const Navbar = ({ clicked, setClicked }: any) => {
  const { t } = useTranslation();
  const language = i18n.language;

  return (
    <nav className={styles.navbar}>
      <img src="/icons/klinikyaLogo.svg" alt="klinikya" />
      <div className={styles.list}>
        <Link
          href="/"
          className={clicked === 1 ? styles.active : styles.text}
          onClick={() => setClicked(1)}
        >
          {t('application')}
        </Link>
        <Link
          href="/web"
          className={clicked === 2 ? styles.active : styles.text}
          onClick={() => setClicked(2)}
        >
          {t('web')}
        </Link>
        <Link
          href="/professionals"
          className={clicked === 3 ? styles.active : styles.text}
          onClick={() => setClicked(3)}
        >
          {t('professional')}
        </Link>
        <Link
          href="/services"
          className={clicked === 4 ? styles.active : styles.text}
          onClick={() => setClicked(4)}
        >
          {t('service')}
        </Link>
        <div
          className={clicked === 5 ? styles.active : styles.text}
          onClick={() => setClicked(5)}
        >
          {t('blog')}
        </div>
      </div>
      <button className={styles.signIn}>{t('signIn')}</button>
      <button className={styles.language}>
        {language === 'tr' ? 'ENG' : 'TR'}
      </button>
    </nav>
  );
};
export default Navbar;
