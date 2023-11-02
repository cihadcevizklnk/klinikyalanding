import i18n from '@/i18n';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Documents.module.scss';
import {
  Junk_Document_One,
  Junk_Document_Two,
  Junk_Document_Three,
  Junk_Document_Four,
  Junk_Document_Five,
  Junk_Document_Six,
  Junk_Document_Seven,
  Junk_Document_Eight,
} from '../docs/JunkDocument';
import { SALES_TEXT } from '../docs/SalesText';
import { SALES_TEXT_AR } from '../docs/SalesTextAr';
import { SALES_TEXT_EN } from '../docs/SalesTextEn';
import { SALES_TEXT_RU } from '../docs/SalesTextRu';
import { JunkDocumentTableOne } from '@/components/JunkDocumentTableOne';
import { JunkDocumentTableTwo } from '@/components/JunkDocumentTableTwo';
import {
  JunkDocumentOneRu,
  JunkDocumentTwoRu,
  JunkDocumentThreeRu,
  JunkDocumentFourRu,
  JunkDocumentFiveRu,
  JunkDocumentSixRu,
  JunkDocumentSevenRu,
  JunkDocumentEightRu,
} from '../docs/JunkDocumentRu';
import {
  JunkDocumentOneEn,
  JunkDocumentTwoEn,
  JunkDocumentThreeEn,
  JunkDocumentFourEn,
  JunkDocumentFiveEn,
  JunkDocumentSixEn,
  JunkDocumentSevenEn,
  JunkDocumentEightEn,
} from '../docs/JunkDocumentEn';
import {
  JunkDocumentOneAr,
  JunkDocumentTwoAr,
  JunkDocumentThreeAr,
  JunkDocumentFourAr,
  JunkDocumentFiveAr,
  JunkDocumentSixAr,
  JunkDocumentSevenAr,
  JunkDocumentEightAr,
} from '../docs/JunkDocumentAr';

const Documents = ({ selectedDocument, setSelectedDocument }: any) => {
  const language = i18n.language;
  const { t } = useTranslation();
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
  const handleOpen = (url: any) => {
    window.open(url, '_blank');
  };
  return (
    <div>
      <div className={styles.buttons}>
        <div
          onClick={() => setSelectedDocument('userDocument')}
          className={selectedDocument === 'userDocument' ? styles.active : ''}
        >
          {t('userDocument')}
        </div>
        <div
          className={selectedDocument === 'junkDocument' ? styles.active : ''}
          onClick={() => setSelectedDocument('junkDocument')}
        >
          {t('junkDocument')}
        </div>
        <div
          className={selectedDocument === 'infoDocument' ? styles.active : ''}
          onClick={openPdf}
        >
          {t('infoDocument')}
        </div>
      </div>
      {selectedDocument === 'userDocument' && language === 'tr' && (
        <div className={styles.text}>{SALES_TEXT}</div>
      )}{' '}
      {selectedDocument === 'userDocument' && language === 'en' && (
        <div className={styles.text}>{SALES_TEXT_EN}</div>
      )}{' '}
      {selectedDocument === 'userDocument' && language === 'de' && (
        <div className={styles.text}>{SALES_TEXT_EN}</div>
      )}{' '}
      {selectedDocument === 'userDocument' && language === 'ar' && (
        <div className={styles.text}>{SALES_TEXT_AR}</div>
      )}{' '}
      {selectedDocument === 'userDocument' && language === 'ru' && (
        <div className={styles.text}>{SALES_TEXT_RU}</div>
      )}{' '}
      {selectedDocument === 'junkDocument' && language === 'tr' && (
        <div>
          <div className={styles.text}>{Junk_Document_One}</div>
          <JunkDocumentTableOne />
          <div className={styles.text}>{Junk_Document_Two}</div>
          <div>
            <div className={styles.text2}>
              {Junk_Document_Seven}
              <span
                onClick={() =>
                  handleOpen('https://tools.google.com/dlpage/gaoptout')
                }
                className={styles.click}
              >
                {t('click3')}
              </span>
              .
            </div>
          </div>
          <div>
            <div className={styles.text2}>
              {Junk_Document_Three}
              <span
                className={styles.click}
                onClick={() =>
                  handleOpen('https://www.google.com/settings/ads/')
                }
              >
                {t('click3')}
              </span>
              .
            </div>
          </div>
          <div>
            <div className={styles.text2}>
              {Junk_Document_Four}{' '}
              <span
                className={styles.click}
                onClick={() =>
                  handleOpen(
                    'http://www.youronlinechoices.com/tr/reklam-tercihleriniz'
                  )
                }
              >
                Your Online Choices{' '}
              </span>
              {t('choicesText')}
            </div>
          </div>
          <div className={styles.text}>{Junk_Document_Five}</div>
          <JunkDocumentTableTwo />
          <div className={styles.text}>{Junk_Document_Six}</div>
          <div className={styles.text2}>
            {Junk_Document_Eight}{' '}
            <a href="mailto:iletisim@klinikya.com">iletisim@klinikya.com</a>{' '}
            {t('choicesText2')}
          </div>
          <div className={styles.text}>{t('lastDate')} 10.10.2023</div>
        </div>
      )}{' '}
      {selectedDocument === 'junkDocument' && language === 'en' && (
        <div>
          <div className={styles.text}>{JunkDocumentOneEn}</div>
          <JunkDocumentTableOne />
          <div className={styles.text}>{JunkDocumentTwoEn}</div>
          <div>
            <div className={styles.text2}>
              {JunkDocumentSevenEn}
              <span
                onClick={() =>
                  handleOpen('https://tools.google.com/dlpage/gaoptout')
                }
                className={styles.click}
              >
                {t('click3')}
              </span>
              .
            </div>
          </div>
          <div>
            <div className={styles.text2}>
              {JunkDocumentThreeEn}
              <span
                className={styles.click}
                onClick={() =>
                  handleOpen('https://www.google.com/settings/ads/')
                }
              >
                {t('click3')}
              </span>
              .
            </div>
          </div>
          <div>
            <div className={styles.text2}>
              {JunkDocumentFourEn}{' '}
              <span
                className={styles.click}
                onClick={() =>
                  handleOpen(
                    'http://www.youronlinechoices.com/tr/reklam-tercihleriniz'
                  )
                }
              >
                Your Online Choices{' '}
              </span>
              {t('choicesText')}
            </div>
          </div>
          <div className={styles.text}>{JunkDocumentFiveEn}</div>
          <JunkDocumentTableTwo />
          <div className={styles.text}>{JunkDocumentSixEn}</div>
          <div className={styles.text2}>
            {JunkDocumentEightEn}{' '}
            <a href="mailto:iletisim@klinikya.com">iletisim@klinikya.com</a>{' '}
            {t('choicesText2')}
          </div>
          <div className={styles.text}>{t('lastDate')} 10.10.2023</div>
        </div>
      )}{' '}
      {selectedDocument === 'junkDocument' && language === 'de' && (
        <div>
          <div className={styles.text}>{JunkDocumentOneEn}</div>
          <JunkDocumentTableOne />
          <div className={styles.text}>{JunkDocumentTwoEn}</div>
          <div>
            <div className={styles.text2}>
              {JunkDocumentSevenEn}
              <span
                onClick={() =>
                  handleOpen('https://tools.google.com/dlpage/gaoptout')
                }
                className={styles.click}
              >
                {t('click3')}
              </span>
              .
            </div>
          </div>
          <div>
            <div className={styles.text2}>
              {JunkDocumentThreeEn}
              <span
                className={styles.click}
                onClick={() =>
                  handleOpen('https://www.google.com/settings/ads/')
                }
              >
                {t('click3')}
              </span>
              .
            </div>
          </div>
          <div>
            <div className={styles.text2}>
              {JunkDocumentFourEn}{' '}
              <span
                className={styles.click}
                onClick={() =>
                  handleOpen(
                    'http://www.youronlinechoices.com/tr/reklam-tercihleriniz'
                  )
                }
              >
                Your Online Choices{' '}
              </span>
              {t('choicesText')}
            </div>
          </div>
          <div className={styles.text}>{JunkDocumentFiveEn}</div>
          <JunkDocumentTableTwo />
          <div className={styles.text}>{JunkDocumentSixEn}</div>
          <div className={styles.text2}>
            {JunkDocumentEightEn}{' '}
            <a href="mailto:iletisim@klinikya.com">iletisim@klinikya.com</a>{' '}
            {t('choicesText2')}
          </div>
          <div className={styles.text}>{t('lastDate')} 10.10.2023</div>
        </div>
      )}{' '}
      {selectedDocument === 'junkDocument' && language === 'ar' && (
        <div>
          <div className={styles.text}>{JunkDocumentOneAr}</div>
          <JunkDocumentTableOne />
          <div className={styles.text}>{JunkDocumentTwoAr}</div>
          <div>
            <div className={styles.text2}>
              {JunkDocumentSevenAr}
              <span
                onClick={() =>
                  handleOpen('https://tools.google.com/dlpage/gaoptout')
                }
                className={styles.click}
              >
                {t('click3')}
              </span>
              .
            </div>
          </div>
          <div>
            <div className={styles.text2}>
              {JunkDocumentThreeAr}
              <span
                onClick={() =>
                  handleOpen('https://www.google.com/settings/ads/')
                }
              >
                {t('click3')}
              </span>
              .
            </div>
          </div>
          <div>
            <div className={styles.text2}>
              {JunkDocumentFourAr}{' '}
              <span
                className={styles.click}
                onClick={() =>
                  handleOpen(
                    'http://www.youronlinechoices.com/tr/reklam-tercihleriniz'
                  )
                }
              >
                Your Online Choices{' '}
              </span>
            </div>
          </div>
          <div className={styles.text}>{JunkDocumentFiveAr}</div>
          <JunkDocumentTableTwo />
          <div className={styles.text}>{JunkDocumentSixAr}</div>
          <div className={styles.text2}>
            {JunkDocumentEightAr}{' '}
            <a href="mailto:iletisim@klinikya.com">iletisim@klinikya.com</a>{' '}
            {t('choicesText2')}
          </div>
          <div className={styles.text}>10.10.2023: {t('lastDate')}</div>
        </div>
      )}{' '}
      {selectedDocument === 'junkDocument' && language === 'ru' && (
        <div>
          <div className={styles.text}>{JunkDocumentOneRu}</div>
          <JunkDocumentTableOne />
          <div className={styles.text}>{JunkDocumentTwoRu}</div>
          <div>
            <div className={styles.text2}>
              {JunkDocumentSevenRu}
              <span
                onClick={() =>
                  handleOpen('https://tools.google.com/dlpage/gaoptout')
                }
                className={styles.click}
              >
                {t('click3')}
              </span>
              .
            </div>
          </div>
          <div>
            <div className={styles.text2}>
              <span
                className={styles.click}
                onClick={() =>
                  handleOpen('https://www.google.com/settings/ads/')
                }
              >
                {t('click3')}
              </span>
              ,{JunkDocumentThreeRu}
            </div>
          </div>
          <div>
            <div className={styles.text2}>
              {JunkDocumentFourRu}{' '}
              <span
                className={styles.click}
                onClick={() =>
                  handleOpen(
                    'http://www.youronlinechoices.com/tr/reklam-tercihleriniz'
                  )
                }
              >
                Your Online Choices
              </span>
            </div>
          </div>
          <div className={styles.text}>{JunkDocumentFiveRu}</div>
          <JunkDocumentTableTwo />
          <div className={styles.text}>{JunkDocumentSixRu}</div>
          <div className={styles.text3}>
            {JunkDocumentEightRu}{' '}
            <a href="mailto:iletisim@klinikya.com">iletisim@klinikya.com</a>{' '}
            {t('choicesText2')}
          </div>
          <div className={styles.text}>{t('lastDate')} 10.10.2023</div>
        </div>
      )}{' '}
    </div>
  );
};
export default Documents;
