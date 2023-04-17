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
export default function Home({ setClicked }: any) {
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
  // const obj = {
  //   title1: 'Genel Bakış',
  //   text1:
  //     'Diabetes mellitus, vücudunuzun kan şekerini (glikoz) nasıl kullandığını etkileyen bir grup hastalığı ifade eder. \nGlikoz vücudunuzun sağlığı için hayati önem taşır çünkü kaslarınızı ve dokularınızı oluşturan hücreler için önemli bir enerji kaynağıdır. Aynı zamanda beyninizin ana yakıt kaynağıdır. \nDiyabetin altında yatan nedenler türüne göre değişir. Ancak, ne tür diyabetiniz olursa olsun, kanınızda aşırı şeker bulunmasına neden olabilir. Kanınızda çok fazla şeker bulunması ciddi sağlık sorunlarına yol açabilir. \nKronik diyabet hastalığı, tip 1 ve tip 2 diyabet olarak ikiye ayrılır. İyileşebilen diyabet hastalıkları arasında prediyabet ve gestasyonel diyabet bulunur. \nPrediyabet, kan şekeri seviyesi normalden yüksek olduğunda ancak diyabet olarak sınıflandırılacak kadar yüksek olmadığında ortaya çıkar. İlerlemesini önlemek için uygun önlemler alınmadıkça, prediyabet genellikle diyabetin öncüsüdür. Gestasyonel diyabet hamilelik sırasında ortaya çıkar ancak bebek doğduktan sonra düzelebilir.',
  //   title2: 'Semptomlar',
  //   text2:
  //     'Diyabet belirtileri, kan şekerinizin ne kadar yükseldiğine bağlı olarak değişir. Bazı kişilerde, özellikle prediyabet veya tip 2 diyabet hastalığı olanlarda bazen semptomlar görülmeyebilir. Tip 1 diyabette semptomlar hızla ortaya çıkma ve daha şiddetli olma eğilimindedir. \nTip 1 diyabet ve tip 2 diyabetin bazı belirti ve semptomları aşağıdaki gibi listelenebilir:',
  //   arr2: [
  //     'Artan susuzluk',
  //     'Sık idrara çıkma',
  //     'Aşırı açlık',
  //     'Açıklanamayan kilo kaybı',
  //     'İdrarda keton varlığı (ketonlar, yeterli insülin olmadığında meydana gelen kas ve yağın parçalanmasının bir yan ürünüdür)',
  //     'Yorgunluk',
  //     'Sinirlilik',
  //     'Bulanık görme',
  //     'Yavaş iyileşen yaralar',
  //     'Diş etleri veya cilt enfeksiyonları ve vajinal enfeksiyonlar gibi sık görülen enfeksiyonlar',
  //   ],
  //   text3:
  //     'Tip 1 diyabet her yaşta gelişebilir, ancak sıklıkla çocukluk veya ergenlik döneminde ortaya çıkar. Daha yaygın olan tip 2 diyabet ise her yaşta gelişebilir, ancak 40 yaşından büyük kişilerde daha sık görülür.',
  //   title4small: 'Ne zaman hastaneye başvurmalıyız?',
  //   arr4: [
  //     'Sizde veya çocuğunuzda diyabet olabileceğinden şüpheleniyorsanız. Herhangi bir olası diyabet belirtisi fark ederseniz, doktorunuzla iletişime geçin. Durum ne kadar erken teşhis edilirse, tedavi o kadar erken başlayabilir.',
  //     'Eğer size zaten diyabet teşhisi konulduysa. Size teşhisiniz konulduktan sonra, kan şekeri seviyeleriniz stabilize olana kadar yakın tıbbi takibe ihtiyacınız olacaktır.',
  //   ],
  //   title5: 'Nedenleri',
  //   text5:
  //     'Diyabeti anlamak için öncelikle glikozun vücutta normal olarak nasıl işlendiğini anlamalısınız.',
  //   title6small: 'İnsülin nasıl çalışır',
  //   text6:
  //     'İnsülin, midenin arkasında ve altında bulunan bir bezden salgılanan bir hormondur.',
  //   arr6: [
  //     'Pankreas kan dolaşımına insülin salgılar.',
  //     'Kanda dolaşan insülin, şekerin hücrelere geçişini sağlar.',
  //     'İnsülin kandaki serbest şekerin azalmasına sebep olur.',
  //     'Kanda azalan şeker ile birlikte, pankreastan salınan insülin salınımı da azalır.',
  //   ],
  //   title7small: 'Glikozun Görevi',
  //   text7:
  //     'Glikoz - bir tür şeker - kas ve dokuların yapı taşı olan hücrelerin temel enerji kaynağıdır.',
  //   arr7: [
  //     'Glikoz iki temel kaynaktan gelir: besinler ve karaciğer',
  //     'Şeker kana emilir ve burada insülin yardımı ile hücrelere geçer.',
  //     'Karaciğeriniz glikoz üretir ve depolar.',
  //     'Kandaki glikoz miktarı düşünce, örneğin uzun süre aç kaldığınızda, karaciğerde depolanmış olan glikojen glikoz formunda kana salınarak şeker miktarını dengede tutar.',
  //   ],
  //   title8small: 'Tip 1 diyabetin nedenleri',
  //   text8:
  //     'Tip 1 diyabetin kesin nedeni bilinmemektedir. Bilinen şu ki, normalde zararlı bakteri veya virüslerle savaşan bağışıklık sisteminiz pankreastaki insülin üreten hücrelere saldırır ve onları yok eder. Bu size çok az veya hiç insülin bırakmaz. Bu durum şekerin hücrelerinize taşınmak yerine, kan dolaşımınızda şeker birikmesine neden olur. \nTip 1 diyabetin genetik yatkınlık ve çevresel faktörlerin bir kombinasyonundan kaynaklandığı düşünülmektedir, ancak bu faktörlerin hala tam olarak ne olduğu belirsizdir. Kilonun tip 1 diyabette bir faktör olduğuna inanılmamaktadır.',
  //   title9small: 'Prediyabet ve tip 2 diyabetin nedenleri',
  //   text9:
  //     'Tip 2 diyabette ve buna sebep olabilen prediyabette, hücreleriniz insüline karşı direnç kazanır ve pankreasınız bu direnci kıracak miktarda insülin üretemez. Dolayısıyla, kanınızdaki şeker hücrelerinize geçmek yerine kanda birikmeye başlar. \nKesin sebebi belli olmamakla birlikte, tip 2 diyabetin sebepleri arasında genetik ve çevresel faktörlerin de rol oynadığı düşünülür. Aşırı kilolu olmak ve tip 2 diyabet arasında güçlü bir bağlantı olmakla birlikte, tüm tip 2 diyabet hastalarının kilolu olmadıkları gözlemlenmiştir.',
  //   title10small: 'Gestasyonel diyabetin nedenleri',
  //   text10:
  //     'Hamilelik döneminde, plasenta hamileliğin devamı için bazı hormonlar salgılar. Bu hormonlar insülin direncinin daha da yükselmesine sebep olur. \nNormal koşullarda, pankreasınız fazladan insülin üreterek bu direncin üstesinden gelir. Ancak bazen pankreas bu görevde başarısız olur. Bu durum, kandaki şekerin ancak çok az bir kısmının hücreye geçişini sağlar ve geriye kalan fazla şeker gestasyonel diyabete sebep olur.',
  //   title11: 'Risk faktörleri',
  //   text11: 'Diyabet için risk faktörleri diyabet tipine göre değişir.',
  //   title12small: 'Tip 1 diyabet için risk faktörleri',
  //   text12:
  //     'Tip 1 diyabetin kesin nedeni bilinmemekle birlikte, risk artışına neden olabilecek faktörler şunlardır:',
  //   arr12: [
  //     'Aile öyküsü. Bir ebeveyninizde veya bir kardeşinizde tip 1 diyabet varsa riskiniz artar.',
  //     'Çevresel faktörler. Virütik bir hastalığa maruz kalmak gibi bazı durumlar da tip 1 diyabete sebep olur.',
  //     'Zararlı bağışıklık sistemi hücrelerinin varlığı (otoantikorlar). Bazen tip 1 diyabetli kişilerin aile üyeleri, diyabet otoantikorlarının varlığı için test edilir. Bu otoantikorlara sahip olan herkes diyabet olmaz. Ancak bu otoantikorlara sahipseniz, tip 1 diyabet olma riskiniz artar.',
  //   ],
  //   title13: 'Prediyabet ve tip 2 diyabet için risk faktörleri',
  //   text13:
  //     'Araştırmacılar, neden bazı insanların tip 2 diyabete ve prediyabete yakalandığını ve bazı insanların yakalanmadıklarını tam olarak çözümlememişlerdir. Ancak, bu hastalıklara yol açan bazı faktörler kesin olarak bilinmektedir:',
  //   arr13: [
  //     'Kilo. Daha yağlı dokular, daha yüksek insülin direncine sebep olur.',
  //     'Aktivite eksikliği. Ne kadar az hareket ederseniz, hastalığa yakalanma riskiniz o kadar artar. Fiziksel aktivite kilonuzu kontrol etmenize yardımcı olur, fazla glikozu harcayarak hücrelerinizin insülin direncini düşürür.',
  //     'Aile öyküsü. Bir ebeveyninizde veya bir kardeşinizde tip 2 diyabet varsa riskiniz artar.',
  //     'Yaş. Yaşınız ilerledikçe yakalanma riskiniz artar. Bunun sebebi daha az hareket etmek ya da vücutta kasların azalıp yağların artması olabilir. Ancak, günümüzde tip 2 diyabete, daha genç yaş gruplarında da sık rastlanmaktadır.',
  //     'Gestasyonel diyabet. Hamileyken gestasyonel diyabete yakalanırsanız, sonrasında prediyabet ve tip 2 diyabete yakalanma riskiniz artar. Doğan bebek 4 kilodan daha ağırsa, tip 2 diyabete yakalanma riskiniz artar.',
  //     ,
  //     'Polikistik over sendromu. Kadınlarda polikistik over sendromu - sıklıkla düzensiz menstrual döngü, fazla kıl büyümesi ve obezite ile sonuçlanır - diyabet riskini artırır.',
  //     'Yüksek kan basıncı. 140/90 milimetre civadan (mmHg) yüksek olan kan basıncı tip 2 diyabet riskinde artışa sebep olur.',
  //     'Anormal kolesterol ve trigliserit seviyeleri. Eğer fazla miktarda yüksek yoğunluklu lipoprotein (HDL) veya &quot;iyi,&quot; kolesterole sahipseniz, tip 2 diyabete yakalanma riskiniz artar. Trigliseritler kanda taşınan bir yağ çeşididir. yüksek miktarda trigliserite sahip olan insanlarda yüksek seviyede tip 2 diyabete yakalanma riski vardır. Doktorunuz trigliserit ve kolesterol seviyeleriniz hakkında sizi bilgilendirebilir.',
  //   ],
  //   title14small: 'Gestasyonel diyabet için risk faktörleri',
  //   text14:
  //     'Hamile kadınlarda gestasyonel diyabet gelişebilir. Bazı kadınlar diğer kadınlara göre daha fazla risk altındadır. Gestasyonel diyabet için risk faktörleri şunları içerir:',
  //   arr14: [
  //     'Yaş. 25 yaşından büyük kadınlarda risk daha fazladır.',
  //     'Aile veya kişisel geçmiş. Tip 2 diyabetin öncüsü olan prediyabetiniz varsa veya ebeveyn veya kardeş gibi yakın bir aile üyenizde tip 2 diyabet varsa riskiniz artar. Ayrıca, önceki bir hamilelik sırasında gestasyonel diyabetiniz varsa, çok büyük bir bebek doğurduysanız veya açıklanamayan bir ölü doğum yaptıysanız daha büyük risk grubundasınızdır.',
  //     'Kilo. Hamilelikten önce fazla kilolu olmak gestasyonel diyabet riskini artırır.',
  //     'Irk ya da etnik köken.Sebepleri tam olarak bilinmeyen nedenlerden dolayı, Siyah, Hispanik, Amerikan Kızılderili veya Asyalı Amerikalı kadınların gestasyonel diyabet geliştirme olasılığı daha yüksektir.',
  //   ],
  //   title15: 'Komplikasyonları',
  //   text15:
  //     'Diyabetin uzun vadeli komplikasyonları yavaş yavaş gelişir. Diyabetiniz ne kadar uzun sürerse ve kan şekerinizi ne kadar az kontrol ederseniz, komplikasyon riski o kadar yüksek olur. Sonunda, diyabet komplikasyonları sakat bırakabilir ve hatta ölümle sonuçlanabilir. Olası komplikasyonlar şunları içerir:',
  //   arr15: [
  //     'Kalp-damar hastalığı. Diyabet, göğüs ağrısı (anjina), kalp krizi, inme ve arterlerin daralması (ateroskleroz) ile birlikte koroner arter hastalığı dahil olmak üzere çeşitli kardiyovasküler problemlerin riskini önemli ölçüde artırır. Şeker hastalığınız varsa, kalp hastalığı veya felç geçirme olasılığınız daha yüksektir.',
  //     'Sinir hasarı (nöropati). Aşırı şeker, özellikle bacaklarınızdaki sinirlerinizi besleyen küçük kan damarlarının (kılcal damarlar) duvarlarına zarar verebilir. Bu, genellikle ayak parmaklarının veya parmakların uçlarında başlayan ve yavaş yavaş yukarı doğru yayılan karıncalanma, uyuşma, yanma veya ağrıya neden olabilir.',
  //     'Tedavi edilmezse, etkilenen uzuvlardaki tüm hisleri kaybedebilirsiniz. Sindirimle ilgili sinirlerin zarar görmesi mide bulantısı, kusma, ishal veya kabızlık sorunlarına neden olabilir. Erkeklerde erektil disfonksiyona neden olabilir.',
  //     'Böbrek hasarı (nefropati). Böbrekler, kanınızdaki atıkları filtreleyen milyonlarca küçük kan damarı kümesi (glomerül) içerir. Şeker hastalığı bu hassas filtreleme sistemine zarar verebilir. Şiddetli hasar, böbrek yetmezliğine veya diyaliz veya böbrek nakli gerektirebilecek geri dönüşü olmayan son evre böbrek hastalığına yol açabilir.',
  //     'Göz hasarı (retinopati). Diyabet, retinanın kan damarlarına zarar verebilir (diyabetik retinopati),ve bu potansiyel olarak körlüğe yol açabilir. Diyabet, katarakt ve glokom gibi diğer ciddi görme hastalığı risklerini de artırır.',
  //     'Ayak hasarı. Ayaklardaki sinir hasarı veya ayaklara zayıf kan akışı, çeşitli ayak hastalıkları riskini artırır. Tedavi edilmeyen kesikler ve kabarcıklar, genellikle gittikçe kötüleşen ciddi enfeksiyonlara sebep olabilir. Bu enfeksiyonlar nihayetinde ayak parmağı, ayak veya bacak amputasyonu gerektirebilir.',
  //     'Cilt problemleri. Diyabet, sizi bakteri ve mantar enfeksiyonları da dahil olmak üzere cilt sorunlarına karşı daha duyarlı hale getirebilir.',
  //     'İşitme bozukluğu. İşitme sorunları diyabetli kişilerde daha sık görülür.',
  //     'Depresyon. Tip 1 ve tip 2 diyabetli kişilerde depresyon belirtileri yaygındır. Depresyon diyabet yönetimini etkileyebilir.',
  //   ],
  //   title16: 'Gestasyonel diyabet komplikasyonları',
  // };
  // const result = JSON.stringify(obj);

  const searchData = (id: number) => {
    const myObj = {
      id: id,
      language,
      date: moment().toISOString(),
      department: true,
    };
    const encodedObj = encodeURIComponent(JSON.stringify(myObj));
    router.push(`http://localhost:3000/global-search?obj=${encodedObj}`);
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
            <img
              src="/icons/gif3.gif"
              alt=""
              className={styles.partOneTopRight}
            />
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
          <h1 className={styles.title}>{t('departments')}</h1>
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
