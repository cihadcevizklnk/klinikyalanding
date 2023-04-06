import { useState } from 'react';
import styles from '../../styles/Blog.module.scss';
import moment from 'moment';
import i18n from '@/pages/i18n';
import { useTranslation } from 'react-i18next';

const Blog = ({ item }: any) => {
  const [src, setSrc] = useState<any>();
  const [control, setControl] = useState<any>();
  const handleError = (id: number) => {
    setControl(id);
    setSrc('/icons/klinikyaLogo.svg');
  };
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <img
        src={
          src && control === item?.Id
            ? src
            : item?.BlogImageLocation === null
            ? '/icons/klinikyaLogo.svg'
            : item?.BlogImageLocation
        }
        alt="blog"
        className={styles.blogImg}
        onError={() => handleError(item?.Id)}
      />
      <p className={styles.time}>
        {moment(item?.CreatedDateTime)
          ?.locale(i18n.language)
          ?.format('ddd DD, MM')}
      </p>
      <h3>{item?.Title}</h3>
      <p className={styles.text}>{item?.ShortText}</p>
      <button className={styles.button}>{t('read')}</button>
    </div>
  );
};
export default Blog;
