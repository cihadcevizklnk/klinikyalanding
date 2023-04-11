import { useTranslation } from 'react-i18next';
import styles from '../../styles/BlogPage.module.scss';
import { useEffect, useState } from 'react';
import { getBlogs } from '@/functions';
import moment from 'moment';
import Link from 'next/link';
import i18n from '../i18n';
const Blog = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<any>();
  const language = i18n?.language;
  useEffect(() => {
    getBlogs(setBlogs);
  }, []);

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.center}>{t('bTitle1')}</h1>
      <p className={styles.center}>{t('bText1')}</p>
      <button className={styles.button}>{t('button')}</button>
      <section className={styles.blocks}>
        {blogs?.map((item: any, i: number) => (
          <div
            className={
              i === 0 || i % 10 === 0 || (i - 6) % 10 === 0 || i === 6
                ? styles.blockInsideBig
                : styles.blocksInside
            }
            key={i}
          >
            <div className={styles.left}>
              <img
                className={styles.image}
                src={item.BlogImageLocation}
                alt="location"
              />
            </div>
            <div className={styles.right}>
              <div className={styles.date}>
                {moment(item.UpdatedDateTime)
                  .locale(language)
                  .format('dddd D, MMMM')}
              </div>
              <div className={styles.blockTitle}>{item.Title}</div>
              <div className={styles.date}>
                {item.BlogText?.slice(0, 300)}...
              </div>
              <Link href={`/blog/${item.Id}`} className={styles.btn}>
                {t('read')}
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default Blog;
