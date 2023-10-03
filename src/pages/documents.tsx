import i18n from '@/i18n';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Documents.module.scss';
import { PAYMENT_SALES_TEXT } from '../docs/PaymentSales';
import { PAYMENT_SALES_TEXT_AR } from '../docs/PaymentSalesAr';
import { PAYMENT_SALES_TEXT_EN } from '../docs/PaymentSalesEn';
import { PAYMENT_SALES_TEXT_RU } from '../docs/PaymentSalesRu';
import { SALES_TEXT } from '../docs/SalesText';
import { SALES_TEXT_AR } from '../docs/SalesTextAr';
import { SALES_TEXT_EN } from '../docs/SalesTextEn';
import { SALES_TEXT_RU } from '../docs/SalesTextRu';
const Documents = () => {
  const language = i18n.language;
  const { t } = useTranslation();
  const [selected, setSelected] = useState('paymentSales');
  console.log(language, 'language');
  return (
    <div>
      <div className={styles.buttons}>
        <div
          onClick={() => setSelected('paymentSales')}
          className={selected === 'paymentSales' ? styles.active : ''}
        >
          {t('paymentSales')}
        </div>
        <div
          className={selected === 'sales' ? styles.active : ''}
          onClick={() => setSelected('sales')}
        >
          {t('sales')}
        </div>
      </div>
      {selected === 'paymentSales' && language === 'tr' && (
        <div className={styles.text}>{PAYMENT_SALES_TEXT}</div>
      )}{' '}
      {selected === 'paymentSales' && language === 'en' && (
        <div className={styles.text}>{PAYMENT_SALES_TEXT_EN}</div>
      )}{' '}
      {selected === 'paymentSales' && language === 'de' && (
        <div className={styles.text}>{PAYMENT_SALES_TEXT_EN}</div>
      )}{' '}
      {selected === 'paymentSales' && language === 'ar' && (
        <div className={styles.text}>{PAYMENT_SALES_TEXT_AR}</div>
      )}{' '}
      {selected === 'paymentSales' && language === 'ru' && (
        <div className={styles.text}>{PAYMENT_SALES_TEXT_RU}</div>
      )}{' '}
      {selected === 'sales' && language === 'tr' && (
        <div className={styles.text}>{SALES_TEXT}</div>
      )}{' '}
      {selected === 'sales' && language === 'en' && (
        <div className={styles.text}>{SALES_TEXT_EN}</div>
      )}{' '}
      {selected === 'sales' && language === 'de' && (
        <div className={styles.text}>{SALES_TEXT_EN}</div>
      )}{' '}
      {selected === 'sales' && language === 'ar' && (
        <div className={styles.text}>{SALES_TEXT_AR}</div>
      )}{' '}
      {selected === 'sales' && language === 'ru' && (
        <div className={styles.text}>{SALES_TEXT_RU}</div>
      )}
    </div>
  );
};
export default Documents;
