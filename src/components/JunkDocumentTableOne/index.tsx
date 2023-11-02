import i18n from '@/i18n';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
export const JunkDocumentTableOne = () => {
  const language = i18n.language;
  const { t } = useTranslation();
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.mainTr}>
          <th>{t('junk')}</th>
          <th>{t('name')}</th>
          <th>{t('explain')}</th>
        </tr>
      </thead>
      <thead>
        <tr className={styles.secondTr}>
          <th colSpan={3}>{t('analytic')}</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.bodyTr}>
          <td> {t('td1')}</td>
          <td style={{ whiteSpace: 'break-spaces' }}>{t('td2')}</td>
          <td style={{ whiteSpace: 'break-spaces' }}>
            <div className={styles.flex}>
              {t('td3')}{' '}
              <a
                href="http://www.google.com/analytics/learn/privacy.html"
                target="_blank"
                className={styles.link}
              >
                {t('click1')}
              </a>{' '}
              {t('td4')}
            </div>
            <a
              href="https://tools.qooqle.com/dlpaqe/qaoptout"
              target="_blank"
              className={styles.link}
            >
              {t('click2')}
            </a>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr className={styles.secondTr}>
          <th colSpan={3}>{t('technical')}</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.bodyTr}>
          <td>{t('td5')}</td>
          <td style={{ whiteSpace: 'break-spaces' }}>{t('td6')}</td>
          <td style={{ whiteSpace: 'break-spaces' }}>{t('td7')}</td>
        </tr>
      </tbody>
    </table>
  );
};
