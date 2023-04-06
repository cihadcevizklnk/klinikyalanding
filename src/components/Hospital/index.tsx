import styles from '../../styles/Hospital.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
const Hospital = ({ item }: any) => {
  const [src, setSrc] = useState<any>();
  const [control, setControl] = useState<any>();
  const handleError = (id: number) => {
    setControl(id);
    setSrc('/icons/klinikyaLogo.svg');
  };
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`http://klinik.klinikya.com/hospital-details?id=${id}`);
  };
  return (
    <div className={styles.hospital} onClick={() => handleClick(item?.Id)}>
      <img
        src={
          src && control === item?.Id
            ? src
            : item?.LogoLocation === null
            ? '/icons/klinikyaLogo.svg'
            : item?.LogoLocation
        }
        alt="hospital-logo"
        className={styles.image}
        onError={() => handleError(item?.Id)}
      />
      <p className={styles.hospitalTitle}>{item?.Name}</p>
      <p className={styles.about}>{item?.HospitalAddresses?.[0]?.ShortAbout}</p>
    </div>
  );
};
export default Hospital;
