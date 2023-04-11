import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getBlog } from '@/functions';
import i18n from '../i18n';
import moment from 'moment';
const BlogDetail = () => {
  const [blog, setBlog] = useState<any>();
  const router = useRouter();
  const language = i18n?.language;
  const { slug } = router.query;
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
  console.log(blogText, key);
  key?.map((item: any) => console.log(typeof blogText[item]));
  return (
    <div>
      <div>{blog?.Title}</div>
      <div>
        {moment(blog?.CreatedDateTime)
          .locale(language)
          .format('dddd, DD MMMM YYYY')}
      </div>
      <div>{blog?.CoverImageLocation}</div>
      <img src={blog?.CoverImageLocation} alt="blog-image" />
      <br />
      {key?.map((item: any) => (
        <div>
          {Array.isArray(blogText[item]) ? (
            <ul>
              {blogText[item]?.map((item: any) => (
                <li>{item}</li>
              ))}
            </ul>
          ) : (
            <div>
              <div>{blogText[item]}</div>
              <br />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default BlogDetail;
