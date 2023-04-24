import styles from '../styles/AllHospitals.module.scss';
import { useRouter } from 'next/router';
import i18n from '@/i18n';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHospitals } from '@/functions';
import Hospital from '@/components/Hospital';
const AllHospitals = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const language = i18n.language;
  const handleClick = (id: number) => {
    const myObj = {
      id: id,
      language: language,
    };
    const encodedObj = encodeURIComponent(JSON.stringify(myObj));
    router.push(
      `http://klinik.klinikya.com/hospital-details?obj=${encodedObj}`
    );
  };
  useEffect(() => {
    getHospitals(setData, language);
  }, [language]);

  const [data, setData] = useState<any>();
  const handleNavigate = () => {
    router.back();
  };
  console.log(data);
  return (
    <main>
      <button onClick={handleNavigate}>
        <img src="/icons/back icon.svg" alt="" className={styles.icon} />
      </button>
      <h1 className={styles.title}>{t('Hospitals')}</h1>
      <div className={styles.wrapper}>
        {data?.map((item: any) => (
          <Hospital item={item} />
        ))}
      </div>
    </main>
  );
};
export default AllHospitals;
