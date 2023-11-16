import { useState } from 'react';
import styles from '../../styles/Blog.module.scss';
import moment from 'moment';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
const Blog = ({ item }: any) => {
  const [src, setSrc] = useState<any>();
  const [control, setControl] = useState<any>();
  const handleError = (id: number) => {
    setControl(id);
    setSrc('/icons/klinikyaLogo.svg');
  };
  const { t } = useTranslation();
  return (
    <Link href={`/blog/${item.Id}`} className={styles.wrapper}>
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
      <h3>{item?.Title}</h3>
      <p className={styles.text}>
        {item?.ShortText?.slice(0, 300)
          .replaceAll('\\n', ' ')
          .replaceAll('\\', ' ')}
        ...
      </p>
      <div className={styles.button}>{t('read')}</div>
    </Link>
  );
};
export default Blog;
