import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { getBlogs, getHospitals, getProcedures } from '@/functions';
import { useEffect, useState, useRef } from 'react';
import Blog from '@/components/Blog';
import { useTranslation } from 'react-i18next';
import Hospital from '@/components/Hospital';
import CalendarComponent from '@/components/Calendar';
import Cities from '@/components/Cities';
import moment from 'moment';
import { useRouter } from 'next/router';
import HospitalModals from '@/components/HospitalsModal';
import Switch from 'react-switch';
import { useCallback } from 'react';
import Link from 'next/link';
import i18n from '../i18n';
export default function Home({ targetRef }: any) {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    const myObj = {
      key: inputValue,
      location,
      choosenDistrictId,
      chooseCity,
      choosenLocation,
      videoVisit,
      date: value ? new Date(value)?.toISOString() : moment().toISOString(),
      language: language,
    };
    const encodedObj = encodeURIComponent(JSON.stringify(myObj));
    router.push(`http://klinik.klinikya.com/global-search?obj=${encodedObj}`);
  };

  const [procedures, setProcedures] = useState<any>();
  const [blogs, setBlogs] = useState<any>();
  const [hospitals, setHospitals] = useState<any>();
  const [dateFrom, setDateFrom] = useState<Date | undefined>(undefined);
  const [dateTo, setDateTo] = useState<Date | undefined>(undefined);
  // const [key, setKey] = useState<string>('');
  const [choosenDistrictId, setChoosenDistrictId] = useState(null);
  const [chooseCity, setChooseCity] = useState();
  const [choosenLocation, setChoosenLocation] = useState(undefined);
  const [location, setLocation] = useState<any>();
  const [videoVisit, setVideoVisit] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [key, setKey] = useState(Date.now());
  const { t } = useTranslation();
  console.log(key, 'key');
  useEffect(() => {
    getProcedures(setProcedures);
    getBlogs(setBlogs);
    getHospitals(setHospitals);
  }, []);
  const language = i18n.language;
  const hospitalArr = hospitals?.filter(
    (item: any) =>
      item?.Id === 5 ||
      item?.Id === 51 ||
      item?.Id === 46 ||
      item?.Id === 128 ||
      item?.Id === 14 ||
      item?.Id === 53 ||
      item?.Id === 12 ||
      item?.Id === 152 ||
      item?.Id === 19 ||
      item?.Id === 147
  );
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const handleView = (a: number, b: number) => {
    setStart(a);
    setEnd(b);
  };
  const [showModal, setShowModal] = useState(false);

  const [width, setWidth] = useState<any>();
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const departments = useRef(null);
  const handleChange = useCallback(() => {
    setVideoVisit(!videoVisit);
  }, [videoVisit]);
  const [value, setValue] = useState<any>();
  const searchData = (id: number) => {
    const myObj = {
      id: id,
      language,
      date: moment().toISOString(),
      department: true,
    };
    const encodedObj = encodeURIComponent(JSON.stringify(myObj));
    router.push(`http://klinik.klinikya.com/global-search?obj=${encodedObj}`);
  };
  const handleApp = () => {
    router.push(`http://klinik.klinikya.com/?start=landing`);
  };
  const handleApp2 = (e: any) => {
    const myObj = {
      procedures: e,
      language,
    };
    const encodedObj = encodeURIComponent(JSON.stringify(myObj));
    router.push(
      `http://klinik.klinikya.com/global-ready-made-procedure?obj=${encodedObj}`
    );
  };
  const [startP, setStartP] = useState<any>(0);
  const [endP, setEndP] = useState<any>(4);
  useEffect(() => {
    setEndP(width < 767 ? 2 : 4);
  }, [width]);
  const handlePrev = () => {
    if (width > 767) {
      startP === 0 ? setStartP(procedures?.length - 4) : setStartP(startP - 4);
      endP === 4 ? setEndP(procedures?.length) : setEndP(endP - 4);
    } else if (width < 768) {
      startP === 0 ? setStartP(procedures?.length - 2) : setStartP(startP - 2);
      endP === 2 ? setEndP(procedures?.length) : setEndP(endP - 2);
    } else {
      startP === 0 ? setStartP(procedures?.length - 4) : setStartP(startP - 4);
      endP === 4 ? setEndP(procedures?.length) : setEndP(endP - 4);
    }
    if (myNumber === 1) {
      setMyNumber(totalNumber);
    } else {
      setMyNumber(myNumber - 1);
    }
  };
  const handleNext = () => {
    if (width > 767) {
      endP === procedures?.length ? setEndP(4) : setEndP(endP + 4);
      startP === procedures?.length - 4 ? setStartP(0) : setStartP(startP + 4);
    } else if (width < 768) {
      endP === procedures?.length ? setEndP(2) : setEndP(endP + 2);
      startP === procedures?.length - 2 ? setStartP(0) : setStartP(startP + 2);
    } else {
      endP === procedures?.length ? setEndP(4) : setEndP(endP + 4);
      startP === procedures?.length - 4 ? setStartP(0) : setStartP(startP + 4);
    }
    if (myNumber < totalNumber) {
      setMyNumber(myNumber + 1);
    } else {
      setMyNumber(1);
    }
  };
  const [myNumber, setMyNumber] = useState<any>(1);
  const [totalNumber, setTotalNumber] = useState<any>();
  useEffect(() => {
    if (width < 768) {
      setTotalNumber(Math.ceil(procedures?.length / 2));
    } else {
      setTotalNumber(Math.ceil(procedures?.length / 4));
    }
  }, [procedures, width]);
  const [blogCount, setBlogCount] = useState(3);
  useEffect(() => {
    width >= 768 && width < 1023 && setBlogCount(2);
  }, [width]);
  const handleClick4 = (id: number) => {
    const myObj = {
      id: 128,
      language: language,
    };
    const encodedObj = encodeURIComponent(JSON.stringify(myObj));
    router.push(
      `http://klinik.klinikya.com/hospital-details?obj=${encodedObj}`
    );
  };

  const videoRef = useRef<any>(null);
  const handlePause = () => {
    videoRef.current.pause();
  };
  const handlePlay = () => {
    videoRef.current.play();
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        {/* <div onClick={() => handleClick2(53)}>deneme</div>
        <div onClick={() => handleClick()}>deneme2</div> */}
        {showModal && (
          <HospitalModals hospitals={hospitals} setShowModal={setShowModal} />
        )}
        <section className={styles.partOneWrapper}>
          {/* <div id="div">{result}</div> */}
          <div className={styles.partOneTop}>
            <div className={styles.partOneTopLeft}>
              <h1>{t('MainHeading')}</h1>
              <p className={`${'text18'}`}>{t('MainText')}</p>
              <button className={styles.button} onClick={handleApp}>
                {t('button')}
              </button>
            </div>
            {/* <img
              src="/icons/gif3.gif"
              alt=""
              className={styles.partOneTopRight}
            /> */}
            <div
              className={styles.partOneTopRight}
              onMouseDown={handlePause}
              onMouseUp={handlePlay}
            >
              <video
                // src="/video.mp4"
                src={
                  language === 'en'
                    ? '/video.mp4'
                    : language === 'ru'
                    ? '/RUSÇA.mp4'
                    : language === 'de'
                    ? '/ALMANCA.mp4'
                    : language === 'ar'
                    ? '/ARAPÇA.mp4'
                    : '/video_tr.mp4'
                }
                autoPlay
                loop
                muted
                width={'100%'}
                ref={videoRef}
              ></video>
            </div>
            {/* <div className={styles.upWrapper}>
              <img
                src="/icons/next.svg"
                alt="prev"
                className={styles.prev}
                onClick={handlePrevU}
              />
              <div className={styles.upWrapperInside}>
                {procedures?.slice(startU, endU)?.map((item: any) => (
                  <button
                    className={styles.boxWrapper}
                    onClick={() => handleApp2(item)}
                  >
                    <div className={styles.boxWrapperTop}>
                      <img
                        src={item?.Hospital?.SmallLogoLocation}
                        alt="hospital-logo"
                        className={styles.imageHospital}
                      />
                      <div>
                        <p className={styles.operation}>
                          {item?.Operation?.Name}
                        </p>
                        <p className={styles.hospital}>
                          {item?.Hospital?.Name}
                        </p>
                      </div>
                    </div>
                    <div className={styles.longLine}></div>
                    <p className={styles.description}>
                      {item?.Description?.slice(0, 100)}
                      {item?.Description?.length > 100 && <span>...</span>}
                    </p>
                    <div className={styles.viewWrapper}>
                      <button className={styles.view}>{t('view')}</button>
                      <img src="/icons/Arrow.svg" alt="arrow" />
                    </div>
                  </button>
                ))}
              </div>
              <img
                src="/icons/next.svg"
                alt="prev"
                className={styles.next}
                onClick={handleNextU}
              />
            </div> */}
          </div>
          <form onSubmit={handleClick} className={styles.searchWrapper}>
            <div className={styles.searchWrapperInside}>
              <img
                src="/icons/search.svg"
                alt="search"
                className={styles.icon}
              />
              <input
                key={key}
                type="text"
                value={inputValue}
                placeholder={t('SearchBar1') as string | undefined}
                onChange={(e) => setInputValue(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.line}></div>
            <div className={styles.searchWrapperInside2}>
              <img src="/icons/location.svg" alt="location" />
              <Cities
                setChoosenDistrictId={setChoosenDistrictId}
                setChoosenLocation={setChoosenLocation}
                setChooseCity={setChooseCity}
                setLocation={setLocation}
                location={location}
              />
            </div>
            <div className={styles.line}></div>
            <div className={styles.searchWrapperInside3}>
              <CalendarComponent value={value} setValue={setValue} />
            </div>

            <div className={styles.line}></div>
            <div className={styles.searchWrapperInside4}>
              <p>{t('videoCall')}</p>
              <Switch
                offColor="#A9B3B2"
                onColor="#1A6B6B"
                onChange={handleChange}
                checked={videoVisit}
                checkedIcon={false}
                uncheckedIcon={false}
                height={19}
                width={36}
                handleDiameter={17}
              />
            </div>
            <button type="submit" className={styles.buttonSearch}>
              <img
                src="/icons/search-white.svg"
                alt="search"
                className={styles.icon}
              />
              <p>{t('search')}</p>
            </button>
          </form>
        </section>
        <section className={styles.partTwoWrapper}>
          <div>
            <h1 className={styles.title}>{t('HealthPackagesTitle')}</h1>
            <p className={styles.procedureText}>{t('HealthPackagesText')}</p>
          </div>
          <div className={styles.procedures}>
            {procedures?.slice(startP, endP)?.map((item: any) => (
              <button
                className={styles.boxWrapper}
                onClick={() => handleApp2(item)}
              >
                <div className={styles.boxWrapperTop}>
                  <img
                    src={item?.Hospital?.SmallLogoLocation}
                    alt="hospital-logo"
                    className={styles.imageHospital}
                  />
                  <div>
                    <p className={styles.operation}>{item?.Operation?.Name}</p>
                    <p className={styles.hospital}>{item?.Hospital?.Name}</p>
                  </div>
                </div>
                <div className={styles.longLine}></div>
                <p className={styles.description}>
                  {item?.Description?.slice(0, 100)}
                  {item?.Description?.length > 100 && <span>...</span>}
                </p>
                <div className={styles.viewWrapper}>
                  <button className={styles.view}>{t('view')}</button>
                  <img src="/icons/Arrow.svg" alt="arrow" />
                </div>
              </button>
            ))}
          </div>
          <div className={styles.arrowWrapper}>
            <img
              src="/icons/next.svg"
              alt="prev"
              className={styles.prev}
              onClick={handlePrev}
            />
            <div>
              {myNumber} / {totalNumber}
            </div>
            <img
              src="/icons/next.svg"
              alt="prev"
              className={styles.next}
              onClick={handleNext}
            />
          </div>
          <Link href="/all-health-packages" className={styles.viewHospital}>
            {t('showAllProcedures')}
          </Link>
        </section>
        <section className={styles.partThreeWrapper} ref={departments}>
          <h1 ref={targetRef} className={styles.title}>
            {t('departments')}
          </h1>
          <p className={styles.departmentsText}>{t('departmentsText')}</p>
          <div className={styles.departments}>
            <div className={styles.department} onClick={() => searchData(84)}>
              <img src="/icons/womanHealth.svg" alt="womanHealth" />
              <p className={styles.departmentTitle}>{t('womensHealth')}</p>
              <p className={styles.departmentText}>{t('womensHealthText')}</p>
            </div>
            <div className={styles.department} onClick={() => searchData(71)}>
              <img src="/icons/oncology.svg" alt="oncology" />
              <p className={styles.departmentTitle}>{t('Oncology')}</p>
              <p className={styles.departmentText}>{t('OncologyText')}</p>
            </div>
            <div className={styles.department} onClick={() => searchData(75)}>
              <img src="/icons/romatology.svg" alt="romatology" />
              <p className={styles.departmentTitle}>{t('Rheumatology')}</p>
              <p className={styles.departmentText}>{t('RheumatologyText')}</p>
            </div>
            <div className={styles.department} onClick={() => searchData(90)}>
              <img src="/icons/estetic.svg" alt="estetic" />
              <p className={styles.departmentTitle}>{t('AestheticSurgery')}</p>
              <p className={styles.departmentText}>
                {t('AestheticSurgeryText')}
              </p>
            </div>
            <div className={styles.department} onClick={() => searchData(104)}>
              <img src="/icons/teeth.svg" alt="teeth" />
              <p className={styles.departmentTitle}>{t('teeth')}</p>
              <p className={styles.departmentText}>{t('teethText')}</p>
            </div>
            <div className={styles.department} onClick={() => searchData(78)}>
              <img src="/icons/norology.svg" alt="norology" />
              <p className={styles.departmentTitle}>{t('Neurology')}</p>
              <p className={styles.departmentText}>{t('NeurologyText')}</p>
            </div>
            <div className={styles.department} onClick={() => searchData(60)}>
              <img src="/icons/medicine.svg" alt="medicine" />
              <p className={styles.departmentTitle}>{t('InternalMedicine')}</p>
              <p className={styles.departmentText}>
                {t('InternalMedicineText')}
              </p>
            </div>
            <div className={styles.department} onClick={() => searchData(131)}>
              <img src="/icons/obesity.svg" alt="obesity" />
              <p className={styles.departmentTitle}>{t('Obesity')}</p>
              <p className={styles.departmentText}>{t('ObesityText')}</p>
            </div>
          </div>
        </section>
        <section className={styles.partFourWrapper}>
          <h1 className={styles.title}>{t('Hospitals')}</h1>
          <p className={styles.departmentsText}>{t('HospitalsText')}</p>

          <div className={styles.hospitals}>
            {hospitalArr?.slice(start, end)?.map((item: any) => (
              <Hospital item={item} />
            ))}
          </div>

          <div className={styles.dots}>
            <img
              src={
                start === 0
                  ? '/icons/Ellipse 145.svg'
                  : '/icons/Ellipse 146.svg'
              }
              alt="Ellipse"
              onClick={() =>
                width >= 768 && width < 1024
                  ? handleView(0, 3)
                  : handleView(0, 4)
              }
            />
            <img
              src={
                start === 4
                  ? '/icons/Ellipse 145.svg'
                  : '/icons/Ellipse 146.svg'
              }
              alt="Ellipse"
              onClick={() =>
                width >= 768 && width < 1024
                  ? handleView(3, 6)
                  : handleView(4, 8)
              }
            />
            <img
              src={
                start === 8
                  ? '/icons/Ellipse 145.svg'
                  : '/icons/Ellipse 146.svg'
              }
              alt="Ellipse"
              onClick={() =>
                width >= 768 && width < 1024
                  ? handleView(6, 9)
                  : handleView(8, 10)
              }
            />
            {width >= 768 && width < 1024 && (
              <img
                src={
                  start === 9
                    ? '/icons/Ellipse 145.svg'
                    : '/icons/Ellipse 146.svg'
                }
                alt="Ellipse"
                onClick={() => handleView(9, 10)}
              />
            )}
          </div>
          <Link href="/all-hospitals" className={styles.viewHospital}>
            {t('showAllHospitals')}
          </Link>
        </section>
        {language === 'tr' && (
          <section className={styles.partFiveWrapper}>
            <h1 className={styles.title}>{t('Blog')}</h1>
            <p className={styles.blogText}>{t('BlogText')}</p>
            <div className={styles.blogs}>
              {blogs?.slice(0, blogCount)?.map((item: any) => (
                <Blog item={item} />
              ))}
            </div>
            <Link href="/blog" className={styles.viewHospital}>
              {t('showAllBlogs')}
            </Link>
          </section>
        )}
      </main>
    </>
  );
}
