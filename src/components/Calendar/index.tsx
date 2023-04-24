import moment from 'moment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CalendarComponent = ({ value, setValue }: any) => {
  const year = moment().year();
  const month = moment().month() + 1;
  const day = moment().date();
  const { t } = useTranslation();
  const minimumDate = {
    year: year,
    month: month,
    day: day,
  };
  const MonutNames: any = t('MonthNames', { returnObjects: true });
  const Days: any = t('DayLongNames', { returnObjects: true });
  const shortDays: any = t('DayNames', { returnObjects: true });
  const myCustomLocale = {
    months: [
      MonutNames[0],
      MonutNames[1],
      MonutNames[2],
      MonutNames[3],
      MonutNames[4],
      MonutNames[5],
      MonutNames[6],
      MonutNames[7],
      MonutNames[8],
      MonutNames[9],
      MonutNames[10],
      MonutNames[11],
    ],

    weekDays: [
      {
        name: Days[0],
        short: shortDays[0],
        isWeekend: true,
      },
      {
        name: Days[1],
        short: shortDays[1],
      },
      {
        name: Days[2],
        short: shortDays[2],
      },
      {
        name: Days[3],
        short: shortDays[3],
      },
      {
        name: Days[4],
        short: shortDays[4],
      },
      {
        name: Days[5],
        short: shortDays[5],
      },
      {
        name: Days[6],
        short: shortDays[6],
        isWeekend: true,
      },
    ],
    weekStartingIndex: 0,
    getToday(gregorainTodayObject: any) {
      return gregorainTodayObject;
    },
    toNativeDate(date: any) {
      return new Date(date.year, date.month - 1, date.day);
    },
    getMonthLength(date: any) {
      return new Date(date.year, date.month, 0).getDate();
    },
    transformDigit(digit: any) {
      return digit;
    },
    nextMonth: t('nextMonth'),
    previousMonth: t('previousMonth'),
    openMonthSelector: t('openMonthSelector'),
    openYearSelector: t('openYearSelector'),
    closeMonthSelector: t('closeMonthSelector'),
    closeYearSelector: t('closeYearSelector'),
    defaultPlaceholder: t('defaultPlaceholder'),
    from: t('from'),
    to: t('to'),
    digitSeparator: ',',
    yearLetterSkip: 0,
    isRtl: false,
  };
  const [width, setWidth] = useState<any>();
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={
          width >= 768 && width < 1024 ? t('SearchBar3Y') : t('SearchBar3')
        }
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
};

export default CalendarComponent;
