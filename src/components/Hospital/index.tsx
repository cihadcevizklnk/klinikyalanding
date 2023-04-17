import styles from '../../styles/Hospital.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import i18n from '@/i18n';
const Hospital = ({ item }: any) => {
  const [src, setSrc] = useState<any>();
  const [control, setControl] = useState<any>();
  const handleError = (id: number) => {
    setControl(id);
    setSrc('/icons/klinikyaLogo.svg');
  };
  const router = useRouter();
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

  return (
    <div className={styles.hospital} onClick={() => handleClick(item?.Id)}>
      <div className={styles.deneme}>
        <img
          src={
            src && control === item?.Id
              ? src
              : item?.CoverLocation === null
              ? '/icons/klinikyaLogo.svg'
              : item?.CoverLocation
          }
          alt="hospital-logo"
          className={styles.image}
          onError={() => handleError(item?.Id)}
        />
      </div>
      <p className={styles.hospitalTitle}>{item?.Name}</p>
      <p className={styles.about}>{item?.HospitalAddresses?.[0]?.ShortAbout}</p>
    </div>
  );
};
export default Hospital;
