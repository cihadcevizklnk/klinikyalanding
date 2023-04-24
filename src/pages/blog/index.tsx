import { useTranslation } from 'react-i18next';
import styles from '../../styles/BlogPage.module.scss';
import { useEffect, useState, useRef } from 'react';
import { getBlogs } from '@/functions';
import moment from 'moment';
import Link from 'next/link';
import i18n from '../../i18n';
import { useRouter } from 'next/router';
import SingleBlog from '@/components/SingleBlog';

const Blog = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<any>();
  const language = i18n.language;

  useEffect(() => {
    getBlogs(setBlogs, language);
  }, [language]);
  const router = useRouter();
  const handleApp = () => {
    router.push(`http://klinik.klinikya.com/?start=landing`);
  };
  const [scrollPosition, setScrollPosition] = useState<any>(0);
  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
  function handleClickBlog() {
    localStorage.setItem('lastBlogPosition', scrollPosition);

    // Handle navigation to blog detail page
  }

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.center}>{t('bTitle1')}</h1>
      <p className={styles.center}>{t('bText1')}</p>
      <button className={styles.button} onClick={handleApp}>
        {t('button')}
      </button>
      {/* <div>{result}</div> */}
      <section className={styles.blocks}>
        {blogs?.map((item: any, i: number) => (
          <SingleBlog item={item} i={i} handleClickBlog={handleClickBlog} />
        ))}
      </section>
    </main>
  );
};
export default Blog;
