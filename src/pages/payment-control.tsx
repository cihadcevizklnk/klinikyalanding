import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/PaymentControl.module.scss';
import { useTranslation } from 'react-i18next';

const PaymentControl = () => {
  const [pennding, setPennding] = useState<boolean>(true);
  const [result, setResult] = useState<any>();
  const [intervalState, setIntervalState] = useState<any>();
  const [timerControl, setTimerControl] = useState(false);
  const [CountDown, setCountDown] = useState(15);
  const { t } = useTranslation();
  const router = useRouter();

  async function CapturMokaPayment(OtherTrxCode: any) {
    try {
      const url = `https://klinikya-api.azurewebsites.net/api/Appointment/capture-moka-payment?OtherTrxCode=${OtherTrxCode}`;
      axios.post(url).then((res) => {
        if (res.data.Code == 1) {
          setResult(res.data);
          setTimerControl(true);
        } else {
          setResult(res.data);
        }
      });
    } catch (error) {
    } finally {
      setPennding(false);
    }
  }

  function NavigateFunction() {
    if (result) {
      if (result.Code == 14) {
        // Payment Decline
        alert('Payment Decline');
        router.push(`http://portal.klinikya.com/`);
      } else if (result.Code == 1) {
        router.push(`http://portal.klinikya.com/`);
      }
    } else {
      //   alert('Boş');
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown((prevCount) => prevCount - 1);
    }, 1000);
    setIntervalState(intervalId);
  }, []);

  useEffect(() => {
    if (CountDown < 1) {
      clearInterval(intervalState);
      NavigateFunction();
    }
  }, [CountDown]);

  useEffect(() => {
    setPennding(true);
    const queryParams = new URLSearchParams(window.location.search);
    const OtherTrxCode = queryParams.get('OtherTrxCode');
    setTimeout(() => CapturMokaPayment(OtherTrxCode), 1000);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.MainView}>
        {pennding ? (
          <div className={`${styles.MinTextPart} ${styles.PenndingText}`}>
            {t('wait')}
          </div>
        ) : (
          <div className={styles.MinTextPart}>
            <div
              className={
                result?.Code == 14 ? styles.FailedText : styles.SuccessText
              }
            >
              {result ? (result?.Code == 14 ? t('success') : t('fail')) : null}
            </div>
            <div className={''}>
              {result
                ? CountDown < 1
                  ? t('navigate')
                  : t('navigateTime')?.replace('{time}', String(CountDown))
                : null}
            </div>
            <a
              href="http://portal.klinikya.com/"
              onClick={() => {
                clearInterval(intervalState);
              }}
              className={styles.GoMain}
            >
              {t('navigateMain')}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentControl;
