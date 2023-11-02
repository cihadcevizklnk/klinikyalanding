import styles from './styles.module.scss';
export const JunkDocumentTableTwo = () => {
  return (
    <div className={styles.table}>
      <div className={styles.row}>
        <div className={styles.title}>Adobe Analytics</div>
        <a href="http://www.adobe.com/uk/privacy/opt-out.html" target="_blank">
          http://www.adobe.com/uk/privacy/opt-out.html
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>AOL</div>
        <a
          href="https://help.aol.com/articles/restore-security-settings-and-enable-
          cookie-settings-on-browser"
          target="_blank"
        >
          https://help.aol.com/articles/restore-security-settings-and-enable-
          cookie-settings-on-browser
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Google Adwords</div>
        <a
          href="https://support.google.com/ads/answer/2662922?hl=en"
          target="_blank"
        >
          https://support.google.com/ads/answer/2662922?hl=en
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Google Analytics</div>
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">
          https://tools.google.com/dlpage/gaoptout
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Google Chrome</div>
        <a
          href={
            'http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647'
          }
          target="_blank"
        >
          {`http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647`}
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Internet Explorer</div>
        <a
          href={
            'https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies'
          }
          target="_blank"
        >
          {`https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies`}
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>MozillaFirefox</div>
        <a href={'http://support.mozilla.com/en-US/kb/Cookies'} target="_blank">
          {`http://support.mozilla.com/en-US/kb/Cookies`}
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Opera</div>
        <a
          href={'http://www.opera.com/browser/tutorials/security/privacy/'}
          target="_blank"
        >
          {`http://www.opera.com/browser/tutorials/security/privacy/`}
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Safari</div>
        <a
          href={'https://support.apple.com/kb/ph19214?locale=tr_TR'}
          target="_blank"
        >
          {`https://support.apple.com/kb/ph19214?locale=tr_TR`}
        </a>
      </div>
    </div>
  );
};
