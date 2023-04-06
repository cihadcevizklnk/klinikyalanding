import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  tr: {
    translation: {
      application: 'Uygulama',
      web: 'Yazılım Geliştirme',
      professional: 'Profesyoneller',
      service: 'Hizmetler',
      blog: 'Blog',
      signIn: 'Kayıt Ol',
      MainHeading: 'Tüm sağlık işlemleriniz için tek bir uygulama',
      MainText:
        'Klinikya, tüm sağlık ihtiyaçlarınıza tek bir uygulama içinde erişmenizi sağlar. Doktorunuz ve hastaneler ile online görüşün, size özel teklif isteyin, reçetelerinizi online olarak alın ve evinizden ayrılmadan tıbbi laboratuvar hizmetlerine kolayca ulaşın.',
      button: 'Uygulamamızı Keşfedin',
      SearchBar1: 'Doktor, Hastalık veya İşlem Ara',
      SearchBar2: ' Uygun bir konum seçin',
      SearchBar3: 'Uygun bir tarih seçin',
      HealthPackagesTitle: 'Sağlık Paketleri',
      HealthPackagesText:
        'Özel olarak hazırlanmış, çeşitli alanlardan seçebileceğiniz paketlerimizle sağlığınızı korumak için gereken desteği alabilirsiniz. ',
      departmentsText:
        'Departmanlar arasından seçim yaparak ihtiyacınız olan sağlık hizmetini bulun ve tedavinizi başlatın.',
      womensHealth: 'Kadın Sağlığı',
      womensHealthText:
        'Kadın hastalıkları, doğum ve jinekolojik cerrahi gibi konularda deneyimli doktorlarımızla hizmetinizdeyiz.',
      Oncology: 'Onkoloji',
      OncologyText:
        'Kanser teşhisi ve tedavisi konularında uzman hekimlerimizle size en iyi tedavi seçeneklerini sunuyoruz.',
      Rheumatology: 'Romatoloji',
      RheumatologyText:
        'Tüm romatolojik rahatsızlıklar konusunda uzman hekimlerimizle size en iyi tedavi seçeneklerini sunuyoruz.',
      AestheticSurgery: 'Estetik Cerrahi',
      AestheticSurgeryText:
        'Plastik cerrahi konularında deneyimli doktorlarımızla güvenli ve etkili çözümler sunuyoruz.',
      InternalMedicine: 'Dahiliye',
      InternalMedicineText:
        'Genel sağlık sorunlarınız için uzman hekimlerimizle hizmetinizdeyiz.',
      Neurology: 'Nöroloji',
      NeurologyText:
        'Genel sağlık sorunlarınız için uzman hekimlerimizle hizmetinizdeyiz.',
      Obesity: 'Obezite',
      ObesityText:
        'Kilo verme konusunda uzman diyetisyenlerimiz ve cerrahi seçeneklerimizle size en iyi çözümleri sunuyoruz.',
      Hospitals: 'Hastaneler',
      HospitalsText:
        'Sizlere en iyi sağlık hizmetini sunmak için işbirliği yaptığımız seçkin hastanelerimizle tanışın.',
      BlogText:
        'Beslenme, egzersiz, hastalıklar ve daha birçok konuda uzman görüşlerini içeren yazılarımızı okuyarak sağlıklı bir yaşam sürdürmek için gerekli bilgileri edinebilirsiniz.',
      FooterText:
        'Sağlığınız bizim için önemli, Klinikya ile sağlıklı bir yaşama adım atın.',
      HealthcareProfessionals: 'Sağlık Profesyonelleri',
      download: 'Uygulamamızı indirin',
      search: 'Ara',
      view: 'Görüntüle',
      departments: 'Departmanlar',
      teeth: 'Diş',
      teethText:
        'Ağız ve diş sağlığı konularında uzman diş hekimlerimizle hizmetinizdeyiz.',
      showAllBlogs: 'Tüm blog yazılarını göster',
      showAllHospitals: 'Tüm hastaneleri göster',
      reachUs: 'Bize Ulaşın',
      subscribe: 'En son güncellemeler için abone olun',
      email: 'Email Adresi',
      subscribeBtn: 'Abone Ol',
      wtitle1:
        'Klinikya, doktorlara ve sağlık kurumlarına özel geliştirilmiş çeşitli hizmetler sunmaktadır.',
      wtext1:
        'Sağlık sektöründe hizmet veren doktorlar ve sağlık kurumları için özel geliştirilmiş servislerimizle, işlerinizi daha kolay ve etkili bir şekilde yönetmenizi sağlıyoruz',
      getStarted: 'Başlayın',
      wtitle2: 'Tıbbi Yazılım Geliştirme',
      wtext2:
        'Doktorların ve sağlık kurumlarının kendi web sitelerini kurmalarına olanak tanıyan bir hizmet sunuyoruz. Bu hizmet sayesinde, hastaların sizinle iletişime geçmeleri daha kolay olacak.',
      wtitle3: 'Mobil Uygulama Geliştirme',
      wtext3:
        'Sağlık sektöründe mobil uygulama kullanımı son yıllarda hızla artıyor. Bu nedenle, doktorlara ve sağlık kurumlarına özel mobil uygulama geliştirme hizmeti sunuyoruz. Bu sayede, hastalarınızla daha kolay bir şekilde iletişim kurabilir, randevu alabilir ve tıbbi danışmanlık hizmetleri sunabilirsiniz.',
      wtitle4: 'Randevu Sistemi',
      wtext4:
        'Doktorların ve sağlık kurumlarının randevu planlama sürecini kolaylaştıran bir sistem sunuyoruz. Bu sistem, doktorların ve hastaların randevu saatlerini kolaylıkla yönetmelerini sağlıyor.',
      wtitle5: 'Uzaktan Hastaların Takibi',
      wtext5:
        'Doktorların müşterileriyle daha iyi bir ilişki kurmalarına yardımcı olan bir müşteri takip sistemi sunuyoruz. Bu sistem, hastaların tıbbi geçmişlerini ve tedavi süreçlerini izlemek için idealdir.',
      wtitle6: 'Telemedicine Çözümleri',
      wtext6:
        'Sağlık sektöründe en önemli yeniliklerden biri olan telemedicine çözümleri ile hastalarınızla uzaktan iletişim kurmanızı sağlıyoruz. Bu sayede, hastalarınızla görüşmelerinizi video konferans yoluyla gerçekleştirebilir, tıbbi tavsiyelerde bulunabilir ve reçete yazabilirsiniz.',
      ptitle1: 'Sağlık Profesyonelleri İçin Güvenli ve Kolay İletişim',
      ptext1:
        'Klinikya olarak, sağlık profesyonellerine en iyi hizmeti sunmak için çalışıyoruz. Doktorlarımızın hastalarla rahat iletişim kurmalarını sağlayan araçlarımızla, sağlık hizmetlerinin daha güvenli ve verimli hale gelmesini amaçlıyoruz. Siz de sağlık profesyonellerine yönelik özel hizmetlerimizden yararlanarak işinizi kolaylaştırabilirsiniz.',
      ptitle2:
        'Klinikya hastaların ve doktorların zaman ve mekan sınırlamaları olmadan sağlık hizmetlerine erişebilmelerine olanak tanır',
      ptext2:
        'Klinikya doktorların ve hastaların online olarak bir araya gelerek, sağlık hizmetlerini daha kolay ve pratik bir şekilde sunmalarını sağlar.',
      ptitle3:
        'Klinikya doktorların internet ortamında kişisel ve mesleki bilgilerini paylaşmalarına yardımcı olur',
      ptext3:
        'Klinikya doktorların kendi bilgi ve becerilerini tanıtmalarına, potansiyel hastaların doktorlar hakkında bilgi edinmelerine ve doktorların mevcut hastalarıyla iletişim kurmalarına yardımcı olur.',
      ptitle4:
        'Klinikya’da verileriniz cloud ortamında şifrelenir ve güvenlik önlemleri ile korunur.',
      ptext4:
        'Verilerin cloud ortamına yüklenmesi, hastaların ve doktorların verilere daha kolay erişebilmelerine yardımcı olur.',
      ptitle5:
        'Klinikya CRM sistemi ile doktorlar ve hastalar arasında daha verimli ve etkin bir iletişim kurulur.',
      ptext5:
        'CRM sistemi, doktorların ve hastaların verilerini toplar, saklar ve yönetir ve aynı zamanda müşteri ilişkilerini geliştirmeyi amaçlar. Bu sayede, sağlık hizmetleri daha verimli ve etkin bir şekilde sunulabilir.',
      htitle1: 'Sağlık Hizmeti Sağlayıcısı',
      htext1:
        'Dünya genelinde Almanya, Birleşik Krallık, Kuzey Afrika, Ortadoğu ve Azerbaycan da dahil olmak üzere 16 farklı pazardan sağlık hizmeti sağlayıcıları mevcuttur.',
      htitle2: '16 pazardan erişim sağlayın',
      htitle3:
        'Yabancı hastalarınız için kendi dillerinde konuşan bir kişisel asistan edinin.',
      htext3:
        'Dünya genelinde en yaygın kullanılan dillerden bazıları, Klinkya uygulamasında temsil edilerek, hastaların dünya genelinde erişilebilirliği sağlanır.',
      htitle4:
        '24/7 birçok dil desteğiyle sekreter / çağrı merkezi / ulaşabileceğimiz her şeyi alın',
      htext4:
        'Birçok uygulamada müşteri hizmetleri neredeyse bulunmazken, memnuniyeti sağlamak için 7/24 destek sunuyoruz.',
      htitle5:
        'Tıbbi turizm pazarına erişim sağlamak için size turizm sağlık sertifikası alma konusunda yardımcı olabiliriz.',
      htext5:
        'Tıbbi turizm sertifikası edinmek zor olabilir. Klinikya, sağlık profesyonelleri için basitleştirilmiş bir süreci kolaylaştırmak için gereken araçlara sahiptir.',
      htitle6:
        'Hastalarınızı yönetmek ve takip etmek için mobil / web sistemi edinin',
      htext6:
        'Kliniğiniz son teknolojiyle dolu olsa da güncellenmesi gerekiyorsa, bizimle işbirliği yaparak hastaları yönetmek ve takip etmek için güncel mobil ve web sistemleri alacaksınız.',
      htitle7: 'Video görüşmesi ve dijitalleştirme çözümleri',
      htext7:
        "Klinikya'yı kullanarak, doktorlar herhangi bir bilgisayar, tablet veya mobil cihazdan hastaların takvimlerini yazabilir, düzenleyebilir ve takip edebilir, görüşmeler yapabilir ve hasta istatistiklerini alarak dünya genelindeki hastalarla bağlantı kurabilir.",
      DayNames: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
      DayLongNames: [
        'Pazar',
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi',
      ],
      MonthNames: [
        'Oca',
        'Şub',
        'Mar',
        'Nis',
        'May',
        'Haz',
        'Tem',
        'Ağu',
        'Eyl',
        'Eki',
        'Kas',
        'Ara',
      ],
    },
  },
  en: {
    translation: {
      application: 'Application',
      web: 'Software Development,',
      professional: 'Professionals',
      service: 'Services',
      blog: 'Blog',
      signIn: 'Sign In',
      MainHeading: 'All your healthcare solutions are under one app',
      MainText:
        'Klinikya enables you to access all your healthcare needs in a single application. Consult with your doctor and hospitals online, request personalized offers, get your prescriptions online, and easily access medical laboratory services without leaving your home.',
      button: 'Discover Our Application',
      SearchBar1: 'Doctor, Illness or procedure search',
      SearchBar2: 'Select a suitable location',
      SearchBar3: 'Select a suitable date',
      HealthPackagesTitle: 'Health packages',
      HealthPackagesText:
        'You can get the necessary support to maintain your health with our specially prepared packages that you can choose from various fields.',
      departments:
        'Find the health service you need by selecting from our departments and start your treatment.',
      womensHealth: "Women's Health",
      womensHealthText:
        "We are at your service with our experienced doctors in women's health issues such as gynecology, obstetrics and gynecological surgery.",
      Oncology: 'Oncology',
      OncologyText:
        'We offer you the best treatment options with our expert physicians in cancer diagnosis and treatment.',
      Rheumatology: 'Rheumatology',
      RheumatologyText:
        'We offer you the best treatment options with our expert physicians in all rheumatologic disorders.',
      AestheticSurgery: 'Aesthetic Surgery',
      AestheticSurgeryText:
        'We provide safe and effective solutions with our experienced doctors in plastic surgery.',
      InternalMedicine: 'Internal Medicine',
      InternalMedicineText:
        'We are at your service with our expert physicians for your general health problems.',
      Neurology: 'Neurology',
      NeurologyText:
        'We are at your service with our expert physicians for your general health problems.',
      Obesity: 'Obesity',
      ObesityText:
        'We offer you the best solutions with our expert dietitians and surgical options for weight loss.',
      Hospitals: 'Hastaneler',
      HospitalsText:
        'Sizlere en iyi sağlık hizmetini sunmak için işbirliği yaptığımız seçkin hastanelerimizle tanışın.',
      BlogText:
        'You can acquire the necessary information to maintain a healthy lifestyle by reading our articles that include expert opinions on nutrition, exercise, diseases and many other topics.',
      FooterText:
        'Your Health is important to us, take a step towards a health life with Klinikya.',
      HealthcareProfessionals: 'Healthcare professionals',
      download: 'Download our app.',
      search: 'Search',
      view: 'View',
      departments: 'Departments',
      teeth: 'Tooth',
      teethText:
        'We are at your service with out expert dentists in the field of oral and dental health.',
      showAllBlogs: 'Show all blog posts',
      showAllHospitals: 'Show all hospitals',
      reachUs: 'Contact us',
      subscribe: 'Subscribe for the latest update',
      email: 'Email address',
      subscribeBtn: 'Subscribe',
      wtitle1:
        'Klinikya provides various services specially developed for doctors and healthcare institutions.',
      wtext1:
        'With our specially developed services for doctors and healthcare institutions operating in the healthcare sector, we enable you to manage your work more easily and effectively.',
      getStarted: 'Get Started',
      wtitle2: 'Medical Software Development',
      wtext2:
        'We offer a service that allows doctors and healthcare institutions to set up their own websites. Thanks to this service, it will be easier for patients to contact you.',
      wtitle3: 'Mobile Application Development',
      wtext3:
        'The use of mobile applications in the healthcare sector has been rapidly increasing in recent years. Therefore, we offer a special mobile application development service for doctors and healthcare institutions. This way, you can communicate more easily with your patients, make appointments and provide medical cunsultation services.',
      wtitle4: 'Appointment System',
      wtext4:
        'We offer a system that facilitates the appointment planning process for doctors and healthcare institutions. This system enables doctors and patients to easily manage their appointment times.',
      wtitle5: 'Remote Patients Monitoring',
      wtext5:
        'We offer customer tracking system that helps doctors establish better relationships with their patients. This system is ideal for tracking patients medical histories and treatment processes.',
      wtitle6: 'Telemedicine Solutions',
      wtext6:
        'We enable you to communicate with your patients remotely using telemedicine solutions, which are one of the most important innovations in the healthcare sector. This way, you can conduct your appointments with patients via video conferencing, provide medical advice and prescribe medication.',
      ptitle1: 'Secure and easy communication for healthcare professionals.',
      ptext1:
        'At Klinikya, we are committed to providing the best service to healthcare professionals. With our tools that enable doctors to communicate with their patients more easily, we aim to make healthcare services safer and more efficient. You too can benefit from our special services designed for healthcare professionals to make your job easier.',
      ptitle2:
        'Klinikya enables patients and doctors to access healthcare services without time and location constraints.',
      ptext2:
        'Klinikya allows doctors and patients to come together online, making it easier and more convenient to provide healthcare services.',
      ptitle3:
        'Klinikya helps doctors to share their personal and professional information online.',
      ptext3:
        'Klinikya helps doctors to showcase their own knowledge and skills online, enables potential patients to learn about doctors and facilitates communication between doctors and their current patients.',
      ptitle4:
        'At Klinikya, your data is encyrypted and protected by security measures in a cloud environment.',
      ptext4:
        'Uploading data to the cloud environment helps patients and doctors to access the date more easily.',
      ptitle5:
        "Klinikya's CRM system enables more efficient and effective communication between doctors and patients.",
      ptext5:
        'The CRM system collects, stores and manages data of doctors and patients and aims to improve customer relationships. This enables health services to be provided more efficiently and effectively.',
      htitle1: 'Healthcare Provider',
      htext1:
        'Healthcare providers are available from sixteen different markets worldwide,including Germany, United Kingdom, North Africa, Middle East and Azerbaijan.',
      htitle2: 'Have access to 16 markets',
      htitle3:
        'Get your foreign patients a personal assistant that speaks their language',
      htext3:
        'Some of the most common worldwide languages are represented on the Klinikya app, ensuring it is accessible for patients worldwide',
      htitle4:
        'Get a secretary/call center/what we can reach 24/7 with many languages supports',
      htext4:
        'While customer service is virtually unavailable in many apps, we offer 24/7 support to keep everyone satisfied',
      htitle5:
        'We can help you to get tourism health certificate to access medical tourism market',
      htext5:
        'Acquiring a medical tourism certificate can be challenging. Klinikya has the tools to facilitate a simplified process for healthcare professions',
      htitle6: 'Get the mobile/web system to manage and follow your patients',
      htext6:
        'Whether your clinic is filled with state-of-the-art technology or needs to be updated, you will receive up-to-date mobile and web systems to manage and follow patients when partnering with us',
      htitle7: 'Video call and digitalization solutions',
      htext7:
        'Using Klinikya, doctors can write, edit and follow patient schedules, conduct calls and receive patient stats from any computer, tablet or mobile device, helping connect with patients across the globe',
    },
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'tr', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
