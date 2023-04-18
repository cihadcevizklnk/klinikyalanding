import { useTranslation } from 'react-i18next';
import styles from '../styles/Services.module.scss';
import { useState, useEffect } from 'react';
const Services = () => {
  const { t } = useTranslation();
  const [width, setWidth] = useState<any>();
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [number, setNumber] = useState<any>(60);
  useEffect(() => {
    width < 768 && setNumber(100);
  }, [width]);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.center}>{t('htitle1')}</h1>
      <p className={styles.center2}>{t('htext1')}</p>
      <div>
        <video
          src="/Klinikya_App_Launch_1.mp4"
          width={`${number}%`}
          autoPlay
          muted
          loop
          className={styles.video}
        ></video>
        <img src="/icons/Vector 4.svg" alt="" className={styles.background} />
        <section className={styles.main}>
          <div className={styles.box}>
            <img src="/icons/Frame 25.svg" alt="" className={styles.img} />
            <div>
              <h2>{t('htitle2')}</h2>
              <p>{t('htext1')}</p>
            </div>
          </div>
          <div className={styles.box2}>
            <img src="/icons/Frame 30.svg" alt="" className={styles.img} />
            <div>
              <h2>{t('htitle3')}</h2>
              <p>{t('htext3')}</p>
            </div>
          </div>
          <div className={styles.box}>
            <img src="/icons/Frame 22.svg" alt="" className={styles.img} />
            <div>
              <h2>{t('htitle4')}</h2>
              <p>{t('htext4')}</p>
            </div>
          </div>
          <div className={styles.box2}>
            <img src="/icons/Frame 27.svg" alt="" className={styles.img} />
            <div>
              <h2>{t('htitle5')}</h2>
              <p>{t('htext5')}</p>
            </div>
          </div>
          <div className={styles.box}>
            <img src="/icons/Frame 23.svg" alt="" className={styles.img} />
            <div>
              <h2>{t('htitle6')}</h2>
              <p>{t('htext6')}</p>
            </div>
          </div>
          <div className={styles.box2}>
            <img src="/icons/Frame 21.svg" alt="" className={styles.img} />
            <div>
              <h2>{t('htitle7')}</h2>
              <p>{t('htext7')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Services;
