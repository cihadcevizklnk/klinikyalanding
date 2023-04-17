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
        <img src="/icons/back icon.svg" alt="back" />
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
      {key?.map((item: any) => (
        <div>
          {Array.isArray(blogText[item]) ? (
            <ul className={styles.list}>
              {blogText[item]?.map((item: any) => (
                <li>{item}</li>
              ))}
            </ul>
          ) : (
            <div>
              <div
                className={
                  item?.includes('title') && item?.includes('small') === false
                    ? styles.mediumTitle
                    : item?.includes('title') && item?.includes('small')
                    ? styles.smallTitle
                    : styles.text
                }
              >
                {blogText[item]}
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
