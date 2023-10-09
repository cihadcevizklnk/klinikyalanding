import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>{/* <script async src="../analytics.js"></script> */}</Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-T28DHF68GX"
      ></script>
      <script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T28DHF68GX');
          `}
      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
