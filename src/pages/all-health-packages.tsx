import { useEffect, useState } from 'react';
import { getProcedures } from '@/functions';
import styles from '../styles/AllHealthPackages.module.scss';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { useRouter } from 'next/router';
const AllHealthPackages = () => {
  const [data, setData] = useState<any>();
  const router = useRouter();
  const language = i18n.language;
  useEffect(() => {
    getProcedures(setData);
  }, [language]);

  const { t } = useTranslation();

  const handleApp2 = (e: any) => {
    const myObj = {
      procedures: e,
      language,
    };
    const encodedObj = encodeURIComponent(JSON.stringify(myObj));
    router.push(
      `http://klinik.klinikya.com/global-ready-made-procedure?obj=${encodedObj}`
    );
  };
  const handleNavigate = () => {
    router.back();
  };
  return (
    <main>
      <button onClick={handleNavigate}>
        <img src="/icons/back icon.svg" alt="" className={styles.icon} />
      </button>
      <h1 className={styles.title}>{t('HealthPackagesTitle')}</h1>
      <div className={styles.wrapper}>
        {data?.map((item: any) => (
          <button
            className={styles.boxWrapper}
            onClick={() => handleApp2(item)}
          >
            <div className={styles.boxWrapperTop}>
              <img
                src={item?.Hospital?.SmallLogoLocation}
                alt="hospital-logo"
                className={styles.imageHospital}
              />
              <div>
                <p className={styles.operation}>{item?.Operation?.Name}</p>
                <p className={styles.hospital}>{item?.Hospital?.Name}</p>
              </div>
            </div>
            <div className={styles.longLine}></div>
            <p className={styles.description}>
              {item?.Description?.slice(0, 100)}
              {item?.Description?.length > 100 && <span>...</span>}
            </p>
            <div className={styles.viewWrapper}>
              <button className={styles.view}>{t('view')}</button>
              <img src="/icons/Arrow.svg" alt="arrow" />
            </div>
          </button>
        ))}
      </div>
    </main>
  );
};
export default AllHealthPackages;
