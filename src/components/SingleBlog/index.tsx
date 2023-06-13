import styles from '../../styles/BlogPage.module.scss';
import moment from 'moment';
import i18n from '@/i18n';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';
const SingleBlog = ({ item, i, handleClickBlog }: any) => {
  const language = i18n?.language;
  function decodeHtmlCharCodes(str: string) {
    return str?.replace(/(&#(\d+);)/g, function (match, capture, charCode) {
      return String.fromCharCode(charCode);
    });
  }
  const { t } = useTranslation();
  const myRef = useRef<any>(null);
  useEffect(() => {
    const lastBlogPosition: any = localStorage.getItem('lastBlogPosition');
    if (lastBlogPosition) {
      window.scrollTo(0, lastBlogPosition);
      localStorage.removeItem('lastBlogPosition');
    }
  }, []);
  return (
    <div
      className={
        i === 0 || i % 10 === 0 || (i - 6) % 10 === 0 || i === 6
          ? styles.blockInsideBig
          : styles.blocksInside
      }
      key={item?.Id}
      id={`blog-${item.Id}`}
      ref={myRef}
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
          {moment(item.UpdatedDateTime).locale(language).format('dddd D, MMMM')}
        </div>

        <div className={styles.blockTitle}>{item.Title}</div>
        <div className={styles.date}>
          {item.ShortText?.[0] === '"'
            ? decodeHtmlCharCodes(
                item?.ShortText?.slice(1, 300)?.replaceAll('\\n', ' ')
              )
            : decodeHtmlCharCodes(
                item?.ShortText?.slice(0, 300)?.replaceAll('\\n', ' ')
              )}
          ...
        </div>
        <Link
          href={`/blog/${item.Id}`}
          className={styles.btn}
          onClick={handleClickBlog}
        >
          {t('read')}
        </Link>
      </div>
    </div>
  );
};
export default SingleBlog;
