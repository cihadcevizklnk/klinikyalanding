import { useTranslation } from 'react-i18next';
import styles from '../styles/Services.module.scss';
const Services = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.center}>{t('htitle1')}</h1>
      <p className={styles.center}>{t('htext1')}</p>
      <div>
        <video
          src="/Klinikya_App_Launch_1.mp4"
          width="50%"
          autoPlay
          muted
          loop
          className={styles.video}
        ></video>
        <section className={styles.main}>
          <div className={styles.box}>
            <img src="/icons/Frame 25.svg" alt="" className={styles.img} />
            <div>
              <h4>{t('htitle2')}</h4>
              <p>{t('htext1')}</p>
            </div>
          </div>
          <div className={styles.box2}>
            <img src="/icons/Frame 30.svg" alt="" className={styles.img} />
            <div>
              <h4>{t('htitle3')}</h4>
              <p>{t('htext3')}</p>
            </div>
          </div>
          <div className={styles.box}>
            <img src="/icons/Frame 22.svg" alt="" className={styles.img} />
            <div>
              <h4>{t('htitle4')}</h4>
              <p>{t('htext4')}</p>
            </div>
          </div>
          <div className={styles.box2}>
            <img src="/icons/Frame 27.svg" alt="" className={styles.img} />
            <div>
              <h4>{t('htitle5')}</h4>
              <p>{t('htext5')}</p>
            </div>
          </div>
          <div className={styles.box}>
            <img src="/icons/Frame 23.svg" alt="" className={styles.img} />
            <div>
              <h4>{t('htitle6')}</h4>
              <p>{t('htext6')}</p>
            </div>
          </div>
          <div className={styles.box2}>
            <img src="/icons/Frame 21.svg" alt="" className={styles.img} />
            <div>
              <h4>{t('htitle7')}</h4>
              <p>{t('htext7')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Services;
