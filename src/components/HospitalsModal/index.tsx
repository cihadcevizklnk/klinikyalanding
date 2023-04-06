import styles from '../../styles/HospitalModals.module.scss';
import Hospital from '../Hospital';
import { useRouter } from 'next/router';
const HospitalModals = ({ hospitals, setShowModal }: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.insideWrapper}>
        <img
          src="/icons/close.svg"
          alt="close"
          className={styles.close}
          onClick={() => setShowModal(false)}
        />
        <div className={styles.hospitals}>
          {hospitals?.map((item: any) => (
            <Hospital item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HospitalModals;
