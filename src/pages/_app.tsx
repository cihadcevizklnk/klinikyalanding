import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../i18n';
import 'moment/locale/tr';
import 'moment/locale/ar';
import 'moment/locale/de';
import 'moment/locale/ru';
import { useState, useRef } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [clicked, setClicked] = useState<any>();
  const targetRef = useRef(null);
  return (
    <>
      <Navbar clicked={clicked} setClicked={setClicked} />
      <Component {...pageProps} targetRef={targetRef} />
      <Footer clicked={clicked} setClicked={setClicked} targetRef={targetRef} />
    </>
  );
}
