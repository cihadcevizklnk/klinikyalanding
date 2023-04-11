import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import styles from './styles.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import Select from 'react-select/creatable';
const Navbar = ({ clicked, setClicked }: any) => {
  const { t } = useTranslation();
  const language = i18n.language;
  const options = [
    { value: 'tr', label: t('turkish') },
    { value: 'en', label: t('english') },
    { value: 'de', label: t('deutch') },
    { value: 'ar', label: t('arabic') },
    { value: 'ru', label: t('russian') },
  ];
  const [value, setValue] = useState<any>();
  const handleChangeLanguage = (val: any) => {
    i18n.changeLanguage(val);
    setValue(val);
  };
  console.log(language, 'esra');
  return (
    <nav className={styles.navbar}>
      <img
        src="/icons/klinikyaLogo.svg"
        alt="klinikya"
        className={styles.logo}
      />
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
        {language === 'tr' && (
          <Link
            href="/blog"
            className={clicked === 5 ? styles.active : styles.text}
            onClick={() => setClicked(5)}
          >
            {t('blog')}
          </Link>
        )}
      </div>
      <button className={styles.signIn}>{t('signIn')}</button>
      <Select
        options={options}
        onChange={(val: any) => handleChangeLanguage(val.value)}
        placeholder={t('language')}
      />
    </nav>
  );
};
export default Navbar;
