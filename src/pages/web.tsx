import { useTranslation } from 'react-i18next';
import styles from '../styles/Web.module.scss';
const Web = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.center}>{t('wtext1')}</h1>
      <p className={styles.center}>{t('wtext1')}</p>
      <a href="mailto:hello@klinikya.com">
        <button className={styles.button}>{t('getStarted')}</button>
      </a>
      <section className={styles.box}>
        <img src="/icons/Frame 140.svg" alt="computer" className={styles.img} />
        <div>
          <h2>{t('wtitle2')}</h2>
          <p className={styles.text}>{t('wtext2')}</p>
        </div>
      </section>
      <section className={styles.box2}>
        <img src="/icons/Frame 142.svg" alt="phone" className={styles.img} />
        <div>
          <h2>{t('wtitle3')}</h2>
          <p className={styles.text}>{t('wtext3')}</p>
        </div>
      </section>
      <section className={styles.box}>
        <img
          src="/icons/Frame 141.svg"
          alt="appointment"
          className={styles.img}
        />
        <div>
          <h2>{t('wtitle4')}</h2>
          <p className={styles.text}>{t('wtext4')}</p>
        </div>
      </section>
      <section className={styles.box2}>
        <img
          src="/icons/Frame 141 (1).svg"
          alt="screen"
          className={styles.img}
        />
        <div>
          <h2>{t('wtitle5')}</h2>
          <p className={styles.text}>{t('wtext5')}</p>
        </div>
      </section>
      <section className={styles.box}>
        <img
          src="/icons/Frame 141 (2).svg"
          alt="patient"
          className={styles.img}
        />
        <div>
          <h2>{t('wtitle6')}</h2>
          <p className={styles.text}>{t('wtext6')}</p>
        </div>
      </section>
    </div>
  );
};
export default Web;
