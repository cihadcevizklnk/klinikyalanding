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
import i18n from './i18n';
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    const myObj = {
      key: key,
      location,
      choosenDistrictId,
      chooseCity,
      choosenLocation,
      videoVisit,
      date: value ? new Date(value)?.toISOString() : moment().toISOString(),
    };
    const encodedObj = encodeURIComponent(JSON.stringify(myObj));
    router.push(
      `https://portal-klinikya.azurewebsites.net/global-search?obj=${encodedObj}`
    );
  };
  const [procedures, setProcedures] = useState<any>();
  const [blogs, setBlogs] = useState<any>();
  const [hospitals, setHospitals] = useState<any>();
  const [dateFrom, setDateFrom] = useState<Date | undefined>(undefined);
  const [dateTo, setDateTo] = useState<Date | undefined>(undefined);
  const [key, setKey] = useState<string>('');
  const [choosenDistrictId, setChoosenDistrictId] = useState(null);
  const [chooseCity, setChooseCity] = useState();
  const [choosenLocation, setChoosenLocation] = useState(undefined);
  const [location, setLocation] = useState<any>();
  const [videoVisit, setVideoVisit] = useState(false);
  const { t } = useTranslation();
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
  const [number, setNumber] = useState(4);
  const [width, setWidth] = useState<any>();
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    width < 768 && setNumber(2);
  }, [width]);
  const handleClick2 = (id: number) => {
    router.push(`http://localhost:3000/hospital-details?id=53`);
  };
  const departments = useRef(null);
  const handleChange = useCallback(() => {
    setVideoVisit(!videoVisit);
  }, [videoVisit]);
  const [value, setValue] = useState<any>();

  const obj = {
    title1: 'Bel soğukluğu (gonore) nedir?',
    text1:
      'Bel soğukluğu(gonore), cinsel yolla bulaşan bir enfeksiyondur (CYBE). Neisseria gonorrhoeae bakterisinden kaynaklanır. Aşağıdakiler de dahil olmak üzere vücudun sıcak, nemli bölgelerinde bulunma eğilimindedir:',
    arr1: [
      'üretra (mesaneden idrarı boşaltan tüp)',
      'gözler',
      'boğaz',
      'vajina',
      'anüs',
      'dişi üreme sistemi (fallop tüpleri, serviks ve uterus)',
    ],
    text2:
      'Gonore, prezervatif veya başka bir önleyici yöntem kullanılmaması durumunda oral, anal veya vajinal seks yoluyla kişiden kişiye geçer. Bulaşmaya karşı en iyi koruma, uygun prezervatif veya başka bir koruyucu yöntemin kullanımıdır.',

    title3: 'Semptomları',
    text3:
      'Semptomlar genellikle virüse maruz kalındıktan 2 ila 14 gün sonra ortaya çıkar. Bununla birlikte, belsoğukluğuna yakalanan bazı kişilerde hiçbir zaman belirgin semptomlar gelişmeyebilir. \nBelirti göstermeyen ve aynı zamanda asemptomatik taşıyıcı olarak da adlandırılan belsoğukluğu olan bir kişinin enfeksiyonu yayabileceğini bilmek önemlidir. Bir kişinin, belirgin semptomları olmadığında, diğer partnerlere gonore bulaştırma olasılığı daha yüksektir.',
    title4: 'Erkeklerde veya penisi olanlarda görülen semptomlar',
    text4:
      'Penisi olan bir kişi birkaç hafta boyunca belirgin semptomlar geliştirmeyebilir. Bazı erkekler hiçbir zaman semptom geliştirmeyebilir. \n Tipik olarak, belirtiler bakteri vücuda bulaştıktan bir hafta sonra ortaya çıkmaya başlar. Erkeklerde ilk göze çarpan belirti genellikle idrara çıkma sırasında yanma veya ağrı hissidir. \n Hastalık ilerledikçe oluşabilecek diğer semptomlar şunları içerebilir:',
    arr4: [
      'Sık idrara çıkma ya da sıkışma durumunun hızlanması',
      'Penisten irin benzeri bir akıntı veya damlama (beyaz, sarı, bej veya yeşilimsi renklerde olabilir)',
      'Penisin uç kısmında şişme veya ağrı',
      'Testislerde şişme veya ağrı',
      'Kalıcı boğaz ağrısı',
    ],
    text5:
      'Nadir durumlarda, bel soğukluğu vücuda, özellikle üretra ve testislere zarar vermeye devam edebilir. Semptomlar tedavi edildikten sonra hastalık sebepli oluşan durumlar birkaç hafta vücutta kalacaktır. \n Ağrılar rectum bölgesine doğru da yayılabilir.',
    title6: 'Kadınlarda veya vajinası olanlarda görülen semptomlar',
    text6:
      'Vajinası olan birçok insan, açıktan herhangi bir bel soğukluğu semptomu göstermez. Semptomları göstermeye başladıklarında, hafif veya diğer tanılara benzer olma eğilimindedirler ve bu da onların hastalığını tanımlamayı zorlaştırır. \n Bel soğukluğu semptomları, yaygın vajinal mantar enfeksiyonlarına veya bakteriyel enfeksiyonlara çok benzeyebilir. \nSemptomlar şunları içerebilir:',
    arr6: [
      'vajinadan akıntı (sulu, kremsi veya hafif yeşil)',
      'idrar yaparken ağrı veya yanma hissi',
      'daha sık idrara çıkma dürtüsü',
      'daha ağır adet dönemleri veya lekelenme',
      'boğaz ağrısı',
      'cinsel ilişki sırasında ağrı',
      'alt karında keskin bir ağrı',
      'ateş',
    ],
    title7: 'Bel soğukluğu için testler',
    text7:
      'Sağlık uzmanları bel soğukluğunu çeşitli şekillerde teşhis edebilir. Semptomatik bölgeden (penis, vajina, rektum veya boğaz) bir sürüntü ile sıvı örneği alabilir ve bu örneği cam slayt üzerine yerleştirebilirler. \n Doktorunuz eklem veya kan enfeksiyonundan şüphelenirse, kan alarak veya semptomatik eklem içine bir iğne sokarak numuneyi alacaktır. \n Daha sonra numuneye bir boya ekleyecekler ve mikroskop altında inceleyecekler. Hücreler boyaya tepki verirse, gonore teşhisi konabilir. Bu yöntem nispeten hızlı ve kolaydır, ancak mutlak kesinlik sağlamaz. Bu test ayrıca bir laboratuvar teknisyeni tarafından da yapılabilir. \n İkinci bir yöntem, aynı türden numuneyi alıp özel bir kaba yerleştirmeyi içerir. Bu yöntemde, numune birkaç gün boyunca ideal büyüme koşulları altında inkübe edilecektir. Bel soğukluğu varsa, bir belsoğukluğu bakterisi kolonisi oluşacaktır. \n Bir erken sonuç 24 saat içinde hazır olabilir. Nihai sonuçların çıkması ise 3 güne kadar sürebilir.',
    title8: 'Komplikasyonları',
    text8:
      'Vajinası olan kişiler, tedavi edilmeyen bir bulaşma nedeniyle uzun vadeli komplikasyonlar için daha büyük risk altındadır. Tedavi edilmeyen bakteriler üreme kanalına tırmanabilir ve rahim, fallop tüpleri ve yumurtalıkları sarabilir. \n Bu durum pelvik inflamatuar hastalık (PID) olarak bilinir ve şiddetli ve kronik ağrıya ve üreme organlarında hasara neden olabilir. PID&#39;ye diğer CYBE&#39;ler de neden olabilir. \n Kadınlar ayrıca bundan kaynaklı gelecekteki hamileliği önleyebilecek veya ektopik(dış) hamileliğe neden olabilecek fallop tüplerinde tıkanma veya yara izine sahip olabilir. Dış gebelik, döllenmiş bir yumurtanın rahim dışına yerleşmesi durumudur. \n Bel soğukluğu doğum sırasında yeni doğmuş bir bebeğe de geçebilir. \n Penisi olan kişilerde üretrada yara izi görülebilir. Bel soğukluğu ayrıca penisin iç kısmında ağrılı bir apse gelişmesine neden olabilir. Bu, doğurganlığın veya sterilliğin azalmasına neden olabilir. \n Bel soğukluğu kan dolaşımına yayıldığında artrit, kalp kapağı hasarı veya beyin ya da omurilik zarında iltihaplanma meydana gelebilir. Bunlar nadiren olan fakat ciddi durumlardır.',
    arr8: [
      'Kan testleri veya diğer laboratuvar testleri diğer koşulları ekarte edebilir.',
      'Paterji testi, doktorunuzun cildinize steril bir iğne soktuğu ve bir ila iki gün sonra bölgeyi incelediği bir testtir . Test pozitifse, cildinizin altında iğnenin sokulduğu yerde küçük kırmızı bir yumru oluşur. Bu, bağışıklık sisteminizin küçük bir yaralanmaya aşırı tepki verdiğini gösterir.',
    ],
    title9: 'Tedavisi',
    text9:
      'Behçet hastalığının tedavisi yoktur. Hafif bir formunuz varsa, doktorunuz iltihaplarınızın ağrısını azaltmak ve iltihaplanmasını kontrol atında tutabilmek için ilaçlar önerebilir. İltihaplarınız yayılmıyorsa ilaca ihtiyacınız olmayabilir. \n Daha şiddetli belirti ve semptomlar için doktorunuz, iltihap ilaçlarına ek olarak, vücudunuzdaki Behçet hastalığını kontrol etmek için başka ilaçlar da reçete edebilir.',

    title10small:
      'Behçet hastalığının bireysel belirti ve semptomlarına yönelik tedaviler',
    text10:
      'İltihaplanmalarınız sırasında sahip olduğunuz belirti ve semptomları kontrol altına almak için kullanılan ilaçlar aşağıdakileri içerebilir:',
    arr10: [
      'Cilt kremleri, jeller ve merhemler. Topikal kortikosteroid ilaçlar, iltihabı ve ağrıyı azaltmak için doğrudan deriye ve genital yaralara uygulanır.',
      'Ağız gargaraları. Kortikosteroidler ve diğer etken maddeleri içeren özel gargaraların kullanılması ağız yaralarının ağrısını azaltabilir.',
      'Göz damlaları. Kortikosteroidler veya diğer iltihap önleyici ilaçlar içeren göz damlaları, iltihaplanma hafifse, gözlerinizdeki ağrı ve kızarıklığı giderebilir.',
    ],
    title11small: 'Behçet hastalığı için sistemik tedaviler',
    text11:
      'Topikal ilaçların yardımcı olmazsa, doktorunuz tekrarlayan oral ve genital yaralar için kolşisin (Colcrys, Mitigare) adlı bir ilaç önerebilir. Eklem şişmesi de kolşisin ile iyileşebilir. \n Şiddetli Behçet hastalığı vakaları, semptomların ortaya çıktığı süreçte hastalıktan kaynaklanan hasarı kontrol etmek için tedaviler gerektirir. Ortalama ya da şiddetli seviyede Behçet hastalığınız varsa, doktorunuz reçetenize şu ilaçları yazabilir:',
    arr11: [
      'İltihapları kontrol etmek için kortikosteroidler. Prednizon gibi kortikosteroidler, Behçet hastalığının neden olduğu iltihabı azaltmak için kullanılır. Doktorlar genellikle bağışıklık sisteminizin aktivitesini bastırmak için başka ilaçlar da reçete eder.',
      'Kortikosteroidlerin yan etkileri arasında kilo alımı, kalıcı mide ekşimesi, yüksek tansiyon ve kemik incelmesi (osteoporoz) bulunur.',
      'Bağışıklık sisteminizi baskılayan ilaçlar. Behçet hastalığına bağlı iltihaplanma, bağışıklık sisteminizin sağlıklı dokulara saldırmasını önleyen ilaçlarla azaltılabilir.',
      'Bağışıklık sisteminizin tepkisini değiştiren ilaçlar. İnterferon alfa-2b (Intron A), iltihabı kontrol etmek için bağışıklık sisteminizin aktivitesini düzenler.',
    ],
  };

  const result = JSON.stringify(obj);

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
          <div id="div">{result}</div>
          <div className={styles.partOneTop}>
            <div className={styles.partOneTopLeft}>
              <h1>{t('MainHeading')}</h1>
              <p className={`${'text18'}`}>{t('MainText')}</p>
              <button className={styles.button}>{t('button')}</button>
            </div>
            <img
              src="/icons/illustration.svg"
              alt="health-team"
              className={styles.partOneTopRight}
            />
          </div>
          <div className={styles.searchWrapper}>
            <div className={styles.searchWrapperInside}>
              <img
                src="/icons/search.svg"
                alt="search"
                className={styles.icon}
              />
              <input
                type="text"
                placeholder={t('SearchBar1') as string | undefined}
                onChange={(e) => setKey(e.target.value)}
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
            <div className={styles.searchWrapperInside2}>
              <CalendarComponent value={value} setValue={setValue} />
            </div>

            <div className={styles.line}></div>
            <div className={styles.searchWrapperInside2}>
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
            <div onClick={handleClick} className={styles.buttonSearch}>
              <img
                src="/icons/search-white.svg"
                alt="search"
                className={styles.icon}
              />
              <p>{t('search')}</p>
            </div>
          </div>
        </section>
        <section className={styles.partTwoWrapper}>
          <div>
            <h1 className={styles.title}>{t('HealthPackagesTitle')}</h1>
            <p className={styles.procedureText}>{t('HealthPackagesText')}</p>
          </div>
          <div className={styles.procedures}>
            {procedures?.slice(0, number)?.map((item: any) => (
              <div className={styles.boxWrapper}>
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
                <p className={styles.description}>{item?.Description}</p>
                <div className={styles.viewWrapper}>
                  <div className={styles.view}>{t('view')}</div>
                  <img src="/icons/Arrow.svg" alt="arrow" />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.partThreeWrapper} ref={departments}>
          <h1 className={styles.title}>{t('departments')}</h1>
          <p className={styles.departmentsText}>{t('departmentsText')}</p>
          <div className={styles.departments}>
            <div className={styles.department}>
              <img src="/icons/womanHealth.svg" alt="womanHealth" />
              <p className={styles.departmentTitle}>{t('womensHealth')}</p>
              <p className={styles.departmentText}>{t('womensHealthText')}</p>
            </div>
            <div className={styles.department}>
              <img src="/icons/oncology.svg" alt="oncology" />
              <p className={styles.departmentTitle}>{t('Oncology')}</p>
              <p className={styles.departmentText}>{t('OncologyText')}</p>
            </div>
            <div className={styles.department}>
              <img src="/icons/romatology.svg" alt="romatology" />
              <p className={styles.departmentTitle}>{t('Rheumatology')}</p>
              <p className={styles.departmentText}>{t('RheumatologyText')}</p>
            </div>
            <div className={styles.department}>
              <img src="/icons/estetic.svg" alt="estetic" />
              <p className={styles.departmentTitle}>{t('AestheticSurgery')}</p>
              <p className={styles.departmentText}>
                {t('AestheticSurgeryText')}
              </p>
            </div>
            <div className={styles.department}>
              <img src="/icons/teeth.svg" alt="teeth" />
              <p className={styles.departmentTitle}>{t('teeth')}</p>
              <p className={styles.departmentText}>{t('teethText')}</p>
            </div>
            <div className={styles.department}>
              <img src="/icons/norology.svg" alt="norology" />
              <p className={styles.departmentTitle}>{t('Neurology')}</p>
              <p className={styles.departmentText}>{t('NeurologyText')}</p>
            </div>
            <div className={styles.department}>
              <img src="/icons/medicine.svg" alt="medicine" />
              <p className={styles.departmentTitle}>{t('InternalMedicine')}</p>
              <p className={styles.departmentText}>
                {t('InternalMedicineText')}
              </p>
            </div>
            <div className={styles.department}>
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
              onClick={() => handleView(0, 4)}
            />
            <img
              src={
                start === 4
                  ? '/icons/Ellipse 145.svg'
                  : '/icons/Ellipse 146.svg'
              }
              alt="Ellipse"
              onClick={() => handleView(4, 8)}
            />
            <img
              src={
                start === 8
                  ? '/icons/Ellipse 145.svg'
                  : '/icons/Ellipse 146.svg'
              }
              alt="Ellipse"
              onClick={() => handleView(8, 10)}
            />
          </div>
          <button
            onClick={() => setShowModal(true)}
            className={styles.viewHospital}
          >
            {t('showAllHospitals')}
          </button>
        </section>
        {language === 'tr' && (
          <section className={styles.partFiveWrapper}>
            <h1 className={styles.title}>{t('Blog')}</h1>
            <p className={styles.blogText}>{t('BlogText')}</p>
            <div className={styles.blogs}>
              {blogs?.slice(0, 3)?.map((item: any) => (
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
