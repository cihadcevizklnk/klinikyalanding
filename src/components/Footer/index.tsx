import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Footer.module.scss';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import i18n from '@/i18n';

const Footer = ({ clicked, setClicked, setSelectedDocument }: any) => {
  const { t } = useTranslation();
  const language = i18n.language;
  function handleCategory(categoryRef: any, e: any) {
    localStorage.setItem('category', categoryRef);
    clicked != e && setClicked(e);
    categoryRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }
  const handleClick = (e: any) => {
    setClicked(e);
    document.body.scrollTop = 0;
  };
  const targetRef = useRef(null);
  const router = useRouter();
  const pdfPath_tr = '/pdfs/Bilgi ve Kalite Yönetimi.docx.pdf';
  const pdfPath_en = '/pdfs/Bilgi ve Kalite Yönetimi-EN.docx.pdf';
  const pdfPath_ru = '/pdfs/Bilgi ve Kalite Yönetimi-RU.docx.pdf';
  const pdfPath_ar = '/pdfs/Bilgi ve Kalite Yönetimi-AR.docx.pdf';

  const openPdf = () => {
    language == 'tr' && window.open(pdfPath_tr, '_blank');
    language == 'en' && window.open(pdfPath_en, '_blank');
    language == 'ru' && window.open(pdfPath_ru, '_blank');
    language == 'de' && window.open(pdfPath_en, '_blank');
    language == 'ar' && window.open(pdfPath_ar, '_blank');
  };
  return (
    <footer
      className={
        router?.pathname?.includes('/payment-control')
          ? styles.none
          : styles.footer
      }
    >
      <section className={styles.footerLeft}>
        <img src="/icons/klinikyaLogo.svg" alt="klinikya" />
        <p>{t('FooterText')}</p>
        <Link href="/operation-guide" className={styles.bold}>
          {t('ProcessingGuide')}
        </Link>
        <p>{t('reachUs')}:hello@klinikya.com </p>
        <div className={styles.icons}>
          <a href="https://twitter.com/klinikya" target="_blank">
            <img src="/icons/twitter.svg" alt="twitter" />
          </a>
          <a href="https://www.facebook.com/Klinikya" target="_blank">
            <img src="/icons/facebook.svg" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/klinikya/" target="_blank">
            <img src="/icons/instagram.svg" alt="instagram" />
          </a>
          <a href="mailto:hello@klinikya.com" target="_blank">
            <img src="/icons/gmail.svg" alt="gmail" />
          </a>
        </div>
      </section>
      <section className={styles.footerMiddle}>
        <Link
          href="/services"
          className={styles.bold}
          onClick={() => handleClick(4)}
        >
          {t('service')}
        </Link>
        <Link
          href="/"
          onClick={() => {
            handleCategory('departments', 1);
          }}
        >
          {t('departments')}
        </Link>
        <Link href="/">{t('HealthPackagesTitle')}</Link>
        <Link href="/">{t('Hospitals')}</Link>
        <Link href="/">{t('blog')}</Link>
        <Link
          href="/web"
          className={styles.bold}
          onClick={() => handleClick(2)}
        >
          {t('web')}
        </Link>
        <Link
          className={styles.bold}
          href="/professionals"
          onClick={() => handleClick(3)}
        >
          {t('HealthcareProfessionals')}
        </Link>
        <Link
          className={styles.bold}
          href="/documents"
          onClick={() => handleClick(5)}
        >
          {t('documents')}
        </Link>
        <Link
          href="/documents"
          onClick={() => setSelectedDocument('userDocument')}
        >
          {t('userDocument')}
        </Link>
        <Link
          href="/documents"
          onClick={() => setSelectedDocument('junkDocument')}
        >
          {t('junkDocument')}
        </Link>
        <div onClick={openPdf}>{t('infoDocument')}</div>
      </section>
      <section className={styles.footerRight}>
        <p className={styles.bold}>{t('download')}</p>
        <div className={styles.download}>
          <a
            href="https://play.google.com/store/apps/details?id=com.klinikya&pli=1"
            target="_blank"
          >
            <img
              src="/icons/Badge Android.svg"
              alt="android"
              className={styles.icon}
            />
          </a>
          <a
            href="https://apps.apple.com/gb/app/klinikya/id1637444703"
            target="_blank"
          >
            <img src="/icons/Badge iOS.svg" alt="ios" className={styles.icon} />
          </a>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
