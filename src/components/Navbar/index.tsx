import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Select from 'react-select/creatable';
import { useRouter } from 'next/router';
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

  function DefaultValue() {
    switch (language) {
      case 'tr':
        return t('turkish');
        break;
      case 'en':
        return t('english');
        break;
      case 'ar':
        return t('arabic');
        break;
      case 'de':
        return t('deucth');
        break;
      case 'ru':
        return t('russian');
        break;

      default:
        break;
    }
  }
  const languageOption =
    language === 'tr'
      ? '/icons/turkey.svg'
      : language === 'de'
      ? '/icons/german.svg'
      : language === 'ru'
      ? '/icons/russia.svg'
      : language === 'ar'
      ? '/icons/arabic.svg'
      : language === 'en'
      ? '/icons/england.svg'
      : '/icons/back icon.svg';
  const [value, setValue] = useState<any>();
  const handleChangeLanguage = (val: any) => {
    i18n.changeLanguage(val);
    setValue(val);
  };
  const router = useRouter();
  const handleApp2 = () => {
    router.push(
      `http://portal.klinikya.com/sign-in?global=true?language=${language}`
    );
  };
  const handleApp = () => {
    router.push(
      `http://portal.klinikya.com/sign-up?global=true?language=${language}`
    );
  };
  const [width, setWidth] = useState<any>();
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [show, setShow] = useState<any>(true);
  useEffect(() => {
    width < 768 && setShow(false);
  }, [width]);
  const [showList, setShowList] = useState(false);
  const handleLanguage = (el: string) => {
    i18n.changeLanguage(el);
    setShowList(false);
  };
  return (
    <nav className={styles.navbar}>
      <Link href="/" onClick={() => setClicked(1)}>
        <img
          src="/icons/klinikyaLogo.svg"
          alt="klinikya"
          className={styles.logo}
        />
      </Link>

      {/* {width < 768 && (
        <div className={styles.select}>
          <Select
            options={options}
            value={{ value: DefaultValue(), label: DefaultValue() }}
            onChange={(val: any) => handleChangeLanguage(val.value)}
            placeholder={t('language')}
          />
        </div>
      )} */}
      {width < 768 && (
        <div className={styles.languageWrapper}>
          <img
            className={styles.languageWrapperInside}
            src={languageOption}
            alt="language"
            onClick={() => setShowList(!showList)}
          />

          {showList && (
            <ul className={styles.languageList}>
              <li onClick={() => handleLanguage('tr')}>{t('turkish')}</li>
              <li onClick={() => handleLanguage('en')}>{t('english')}</li>
              <li onClick={() => handleLanguage('de')}>{t('deutch')}</li>
              <li onClick={() => handleLanguage('ar')}>{t('arabic')}</li>
              <li onClick={() => handleLanguage('ru')}>{t('russian')}</li>
            </ul>
          )}
        </div>
      )}
      <div className={styles.flex}>
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
        <div className={styles.buttonWrapper}>
          <button className={styles.signIn} onClick={handleApp}>
            {t('signIn')}
          </button>
          <button className={styles.logIn} onClick={handleApp2}>
            {t('logIn')}
          </button>
        </div>
        {show && (
          // <Select
          //   options={options}
          //   value={{ value: DefaultValue(), label: DefaultValue() }}
          //   onChange={(val: any) => handleChangeLanguage(val.value)}
          //   placeholder={t('language')}
          // />
          <div className={styles.languageWrapper}>
            <img
              className={styles.languageWrapperInside}
              src={languageOption}
              alt="language"
              onClick={() => setShowList(!showList)}
            />

            {showList && (
              <ul className={styles.languageList}>
                <li onClick={() => handleLanguage('tr')}>Türkçe</li>
                <li onClick={() => handleLanguage('en')}>English</li>
                <li onClick={() => handleLanguage('de')}>Deutsch</li>
                <li onClick={() => handleLanguage('ar')}>العربية</li>
                <li onClick={() => handleLanguage('ru')}>Русский</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
