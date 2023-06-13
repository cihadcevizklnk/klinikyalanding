import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getBlog } from '@/functions';
import i18n from '../../i18n';
import moment from 'moment';
import styles from '../../styles/SingleBlog.module.scss';
const BlogDetail = () => {
  const [blog, setBlog] = useState<any>();
  const router = useRouter();
  const language = i18n?.language;
  const { slug } = router.query;

  // useEffect(() => {
  //   router.beforePopState((state) => {
  //     state.options.scroll = false;
  //     return true;
  //   });
  // }, [router]);

  useEffect(() => {
    getBlog(slug, language, setBlog);
  }, [slug]);
  const [blogText, setBlogText] = useState<any>();
  const [key, setKey] = useState<any>();
  useEffect(() => {
    blog && setBlogText(JSON.parse(blog?.BlogText));
  }, [blog]);
  useEffect(() => {
    blogText && setKey(Object.keys(blogText));
  }, [blogText]);
  const handleNavigate = () => {
    router.back();
  };
  return (
    <div className={styles.wrapper}>
      <button onClick={handleNavigate}>
        <img src="/icons/back icon.svg" alt="back" className={styles.icon} />
      </button>
      <div className={styles.bigTitle}>{blog?.Title}</div>
      <div className={styles.center}>
        {moment(blog?.CreatedDateTime)
          .locale(language)
          .format('dddd, DD MMMM YYYY')}
      </div>
      <img
        src={blog?.CoverImageLocation}
        alt="blog-image"
        className={styles.image}
      />
      <br />
      {blogText?.map((item: any) => (
        <div>
          {Object.keys(item)[0].includes('arr') ? (
            Object.values(item)?.map((el: any) => (
              <ul className={styles.list}>
                {typeof el === 'object' ? (
                  el.map((i: any) => <li>{i}</li>)
                ) : (
                  <li>{el}</li>
                )}
              </ul>
            ))
          ) : (
            <div>
              <div
                className={
                  Object.keys(item)[0].includes('title') &&
                  Object.keys(item)[0].includes('small') === false
                    ? styles.mediumTitle
                    : Object.keys(item)[0].includes('title') &&
                      Object.keys(item)[0].includes('small')
                    ? styles.smallTitle
                    : styles.text
                }
              >
                {Object.keys(item)[0].includes('title') && Object.values(item)}
                {Object.keys(item)[0].includes('text') && Object.values(item)}
                {Object.keys(item)[0].includes('shortText') &&
                  Object.values(item)}
              </div>
              <br />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default BlogDetail;
