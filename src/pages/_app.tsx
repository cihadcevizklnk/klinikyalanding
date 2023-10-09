import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../i18n';
import 'moment/locale/tr';
import 'moment/locale/ar';
import 'moment/locale/de';
import 'moment/locale/ru';
import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [clicked, setClicked] = useState<any>();
  const router = useRouter();

  // useEffect(() => {
  //   ReactGA.initialize('G-T28DHF68GX'); // Google Analytics Tracking ID'nizi buraya ekleyin
  //   ReactGA.pageview(window.location.pathname + window.location.search);

  //   const handleRouteChange = (url: any) => {
  //     ReactGA.pageview(url);
  //   };

  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, []);

  return (
    <>
      <Navbar clicked={clicked} setClicked={setClicked} />
      <Component {...pageProps} />
      <Footer clicked={clicked} setClicked={setClicked} />
    </>
  );
}
