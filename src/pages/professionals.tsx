import { useTranslation } from 'react-i18next';
import styles from '../styles/Professionals.module.scss';

const Professionals = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.center}>{t('ptitle1')}</h1>
      <p className={` ${styles.text} ${styles.center} `}>{t('ptext1')}</p>
      <a href="mailto:hello@klinikya.com">
        <button className={styles.button}>{t('getStarted')}</button>
      </a>
      <section>
        <div className={styles.box}>
          <img
            src="/icons/online appointment.svg"
            alt="online-appointment"
            className={styles.img}
          />
          <div>
            <h2>{t('ptitle2')}</h2>
            <p className={styles.text}>{t('ptext2')}</p>
          </div>
        </div>
        <div className={styles.box2}>
          <img
            src="/icons/developing websites for docs.svg"
            alt="developing-websites-for-docs"
            className={styles.img}
          />
          <div>
            <h2>{t('ptitle3')}</h2>
            <p className={styles.text}>{t('ptext3')}</p>
          </div>
        </div>
        <div className={styles.box}>
          <img
            src="/icons/sensetive datas to cloud.svg"
            alt="sensetive-datas-to-cloud"
            className={styles.img}
          />
          <div>
            <h2>{t('ptitle4')}</h2>
            <p className={styles.text}>{t('ptext4')}</p>
          </div>
        </div>
        <div className={styles.box2}>
          <img src="/icons/CRM.svg" alt="CRM" className={styles.img} />
          <div>
            <h2>{t('ptitle5')}</h2>
            <p className={styles.text}>{t('ptext5')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Professionals;
