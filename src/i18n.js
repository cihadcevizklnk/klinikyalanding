import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  tr: {
    translation: {
      logIn: 'Giriş Yap',
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
      SearchBar2Y: 'Konum seçin',
      SearchBar3Y: 'Tarih seçin',
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
        '7/24 birçok dil desteğiyle sekreter / çağrı merkezi / ulaşabileceğimiz her şeyi alın',
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
      videoCall: 'Video Görüşme',
      bTitle1:
        'Sağlıklı Yaşam İpuçları: Uzman Görüşleriyle Sağlıklı Yaşamın Sırları',
      bText1:
        'Beslenme, egzersiz, hastalıklar ve daha birçok konuda uzman görüşlerini içeren yazılarımızı okuyarak sağlıklı bir yaşam sürdürmek için ihtiyacınız olan bilgileri edinin. Sağlıklı yaşam blogumuz size sağlık ve zindelik konularında güncel ve bilimsel temellere dayalı bilgiler sunar.',
      showAllProcedures: 'Tüm sağlık paketlerini göster',
      language: 'dil',
      turkish: 'Türkçe',
      english: 'İngilizce',
      deutch: 'Almanca',
      arabic: 'Arapça',
      russian: 'Rusça',
      read: 'oku',
      DayNames: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
      DayLongNames: [
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi',
        'Pazar',
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
      SearchBar2Y: 'Choose a Location',
      SearchBar3Y: 'Choose a Date',
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
      read: 'read',
      videoCall: 'Video Call',
      bTitle1:
        'Healthy living tips: Secret of Healthy Living with Expert Opinions',
      bText1:
        'Get the information you need to maintain a healthy lifestyle by reading our articles on nutrition, exercise, diseases and many other topics with expert opinions. Our healthy living blog provides you with up to date and science based information on health and fitness.',
      language: 'Language',
      turkish: 'Turkish',
      english: 'English',
      deutch: 'German',
      arabic: 'Arabic',
      russian: 'Russian',
      DayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      DayLongNames: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      MonthNames: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
  },
  ru: {
    translation: {
      SearchBar2Y: 'Местоположение выберите',
      SearchBar3Y: 'Выберите дату ',
      application: 'Приложение',
      web: 'Разработка программного обеспечения',
      professional: 'Профессионалы',
      service: 'Услуги',
      blog: 'Блог',
      signIn: 'Регистрация',
      MainHeading: 'Одно приложение для всех ваших медицинских процедур',
      MainText:
        'Klinikya позволяет получить доступ ко всем вашим медицинским нуждам в одном приложении. Общайтесь с вашим врачом и больницами онлайн, запрашивайте индивидуальные предложения, получайте рецепты онлайн и легко получайте медицинские лабораторные услуги, не выходя из дома.',
      button: 'Откройте для себя наше приложение',
      SearchBar1: 'Найти врача, болезнь или процедуру',
      SearchBar2: 'Выберите подходящее местоположение',
      SearchBar3: 'Выберите подходящую дату',
      HealthPackagesTitle: 'Пакеты здоровья',
      HealthPackagesText:
        'С нашими специально подготовленными пакетами здоровья, вы можете получить необходимую поддержку для поддержания своего здоровья.',
      departmentsText:
        'Выберите необходимую медицинскую услугу, выбрав соответствующий отдел, и начните лечение.',
      womensHealth: 'Здоровье женщин',
      womensHealthText:
        'Мы предлагаем услуги опытных врачей в области женских заболеваний, родовспоможения и гинекологической хирургии.',
      Oncology: 'Онкология',
      OncologyText:
        'Мы предлагаем экспертные услуги по диагностике и лечению рака.',
      Rheumatology: 'Ревматология',
      RheumatologyText:
        'Мы предлагаем экспертные услуги по диагностике и лечению всех видов ревматологических заболеваний.',
      AestheticSurgery: 'Эстетическая хирургия',
      AestheticSurgeryText:
        'Мы предлагаем безопасные и эффективные решения с помощью наших опытных хирургов по пластической хирургии.',
      InternalMedicine: 'Внутренние болезни',
      InternalMedicineText:
        'Мы готовы предоставить вам наши услуги в области общих заболеваний с помощью наших квалифицированных врачей.',
      Neurology: 'Неврология',
      NeurologyText:
        'Мы готовы предоставить вам наши услуги в области общих заболеваний с помощью наших квалифицированных врачей.',
      Obesity: 'Ожирение',
      ObesityText:
        'Мы предлагаем вам лучшие решения для похудения с помощью наших квалифицированных диетологов и хирургических методов.',
      Hospitals: 'Больницы',
      HospitalsText:
        'Познакомьтесь с нашими лучшими больницами, с которыми мы сотрудничаем, чтобы предоставлять вам лучшие медицинские услуги.',
      blogText:
        'Вы можете получить необходимую информацию для поддержания здорового образа жизни, читая наши статьи, которые содержат экспертные мнения по питанию, упражнениям, болезням и многим другим темам.',
      FooterText:
        'Ваше здоровье имеет для нас значение, сделайте шаг к здоровой жизни вместе с Klinikya.',
      HealthcareProfessionals: 'Медицинские работники',
      download: 'Скачать приложение',
      search: 'Поиск',
      view: 'Просмотр',
      departments: 'Отделения',
      teeth: 'Зубы',
      teethText:
        'Мы предлагаем различные услуги, специально разработанные для врачей и здравоохранительных учреждений.',
      showAllBlogs: 'Показать все блоги',
      showAllHospitals: 'Показать все больницы',
      reachUs: 'Свяжитесь с нами',
      subscribe: 'Подпишитесь на обновления',
      email: 'Адрес электронной почты',
      subscribeBtn: 'Подписаться',
      wtitle1:
        'Klinikya предоставляет различные услуги для врачей и здравоохранительных учреждений.',
      wtext1:
        'Мы предоставляем специальные услуги для врачей и медицинских учреждений, работающих в сфере здравоохранения. Эти услуги помогают управлять бизнесом более эффективно и легко.',
      getStarted: 'Начать',
      wtitle2: 'Разработка Медицинского ПО',
      wtext2:
        'Мы предоставляем услугу, позволяющую врачам и медицинским учреждениям создавать свои собственные веб-сайты. Благодаря этой услуге пациенты смогут легче связаться с вами.',
      wtitle3: 'Разработка Мобильных Приложений',
      wtext3:
        'Использование мобильных приложений в медицинской сфере стремительно растет. Поэтому мы предоставляем услугу по разработке мобильных приложений для врачей и медицинских учреждений. Благодаря этому вы можете легче общаться с вашими пациентами, предоставлять консультации и записывать на прием.',
      wtitle4: 'Система Записи на Прием',
      wtext4:
        'Мы предоставляем систему, которая упрощает процесс планирования приема для врачей и медицинских учреждений. Эта система позволяет управлять расписанием приемов врачей и пациентов с легкостью.',
      wtitle5: 'Мониторинг дистанционных пациентов',
      wtext5:
        'Мы предлагаем систему отслеживания клиентов, которая помогает врачам улучшить отношения с пациентами. Эта система идеально подходит для отслеживания медицинской истории и процесса лечения пациентов.',
      wtitle6: 'Телемедицинские решения',
      wtext6:
        'Мы предоставляем телемедицинские решения, которые являются одним из самых важных нововведений в здравоохранении. Это позволяет вам связываться со своими пациентами удаленно, проводить консультации и выписывать рецепты через видеоконференцию.',
      ptitle1: 'Безопасное и удобное общение для здравоохранения',
      ptext1:
        'Мы работаем над тем, чтобы предоставлять лучший сервис для здравоохранения профессионалам. Наши инструменты обеспечивают комфортное общение между врачами и пациентами, что позволяет делать здравоохранение более безопасным и эффективным. Вы также можете воспользоваться нашими специальными услугами для здравоохранения профессионалов, чтобы облегчить свою работу.',
      ptitle2:
        'Klinikya позволяет пациентам и врачам получать медицинские услуги без ограничений во времени и месте',
      ptext2:
        'Klinikya позволяет врачам и пациентам встречаться онлайн и предоставлять медицинские услуги более легко и удобно.',
      ptitle3:
        'Klinikya помогает врачам делиться своей персональной и профессиональной информацией в интернете',
      ptext3:
        'Klinikya помогает врачам продвигать свои знания и навыки, дает потенциальным пациентам возможность узнать больше о врачах и позволяет врачам поддерживать связь с текущими пациентами.',
      ptitle4:
        'Ваши данные защищены шифрованием и мерами безопасности в облаке Klinikya.',
      ptext4:
        'Загрузка данных в облачное хранилище позволяет пациентам и врачам более легко получать доступ к данным.',
      ptitle5:
        'Klinikya CRM система обеспечивает более эффективное и продуктивное взаимодействие между врачами и пациентами.',
      ptext5:
        'CRM система собирает, хранит и управляет данными врачей и пациентов, а также способствует улучшению клиентских отношений. Это позволяет предоставлять медицинские услуги более эффективно и продуктивно.',
      htitle1: 'Поставщик медицинских услуг',
      htext1:
        'В мире существует 16 поставщиков медицинских услуг из 16 разных рынков, включая Германию, Великобританию, Северную Африку, Ближний Восток и Азербайджан.',
      htitle2: 'Доступ из 16 рынков',
      htitle3:
        'Специальный персональный ассистент, говорящий на языке иностранных пациентов.',
      htext3:
        'Klinikya представляет языки, наиболее распространенные по всему миру, для обеспечения доступности пациентов во всем мире.',
      htitle4:
        'Получите доступ к секретарю / колл-центру / всему, что вам нужно, с поддержкой многих языков 24/7',
      htext4:
        'В то время как во многих приложениях поддержка клиентов почти отсутствует, мы предлагаем поддержку 24/7, чтобы обеспечить удовлетворенность клиентов.',
      htitle5:
        'Мы можем помочь вам получить сертификат медицинского туризма, чтобы получить доступ к рынку медицинского туризма.',
      htext5:
        'Получение сертификата медицинского туризма может быть сложным. У Klinikya есть необходимые инструменты для упрощения процесса получения сертификата для медицинских профессионалов.',
      htitle6:
        'Получите мобильную / веб-систему для управления и отслеживания ваших пациентов',
      htext6:
        'Если ваша клиника полна новейших технологий, но нуждается в обновлении, сотрудничая с нами, вы получите обновленные мобильные и веб-системы для управления и отслеживания ваших пациентов.',
      htitle7: 'Решения для видеоконференций и цифрового преобразования',
      htext7:
        'Используя Klinikya, врачи могут записывать, редактировать и отслеживать календари пациентов, проводить видеоконсультации и устанавливать контакт с пациентами по всему миру, получая статистическую информацию о пациентах.',
      videoCall: 'Видеоконсультация',
      bTitle1:
        'Советы по Здоровому Образу Жизни: Секреты Здорового Образа Жизни от Экспертов',
      bText1:
        'Читая наши статьи, в которых содержатся мнения экспертов по вопросам питания, упражнений, болезней и многого другого, вы получите необходимые знания, чтобы вести здоровый образ жизни. Наш блог о здоровом образе жизни предоставляет вам актуальную информацию, основанную на научных исследованиях, на тему здоровья и фитнеса.',
      language: 'язык',
      turkish: 'турецкий',
      english: 'английский',
      deutch: 'Немецкий',
      arabic: 'Арабский',
      russian: 'Русский',
      DayNames: [' Пн ', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      DayLongNames: [
        'Понедельник ',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота ',
        'Воскресенье ',
      ],
      MonthNames: [
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июнь',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
      ],
    },
  },
  de: {
    translation: {
      SearchBar2Y: 'Wählen Sie einen Ort',
      SearchBar3Y: 'Wählen Sie ein Datum',
      application: 'Anwendung',
      web: 'Softwareentwicklung',
      professional: 'Profis',
      service: 'Dienstleistungen',
      blog: 'Blog',
      signIn: 'Anmeldung',
      MainHeading: 'Eine App für alle Ihre medizinischen Verfahren',
      MainText:
        'Klinikya ermöglicht es Ihnen, auf alle Ihre medizinischen Bedürfnisse in einer App zuzugreifen. Kommunizieren Sie online mit Ihrem Arzt und Krankenhäusern, fordern Sie personalisierte Angebote an, erhalten Sie Online-Rezepte und erhalten Sie medizinische Laborleistungen einfach und bequem von zu Hause aus.',
      button: 'Entdecken Sie unsere App',
      SearchBar1: 'Finden Sie einen Arzt, eine Krankheit oder ein Verfahren',
      SearchBar2: 'Wählen Sie den richtigen Standort aus',
      SearchBar3: 'Wählen Sie das richtige Datum aus',
      HealthPackagesTitle: 'Gesundheitspakete',
      HealthPackagesText:
        'Mit unseren speziell zusammengestellten Gesundheitspaketen erhalten Sie die notwendige Unterstützung, um Ihre Gesundheit zu erhalten.',
      departmentsText:
        'Wählen Sie die benötigte medizinische Dienstleistung aus, indem Sie die entsprechende Abteilung auswählen, und beginnen Sie mit der Behandlung.',
      womensHealth: 'Frauengesundheit',
      womensHealthText:
        'Wir bieten die Dienste erfahrener Ärzte in den Bereichen Frauenkrankheiten, Geburtshilfe und gynäkologische Chirurgie an.',
      Oncology: 'Onkologie',
      OncologyText:
        'Wir bieten Ihnen mit unseren erfahrenen Ärzten die besten Behandlungsoptionen bei der Diagnose und Behandlung von Krebs.',
      Rheumatology: 'Rheumatologie',
      RheumatologyText:
        'Wir bieten Ihnen mit unseren erfahrenen Ärzten die besten Behandlungsoptionen bei allen rheumatologischen Erkrankungen.',
      AestheticSurgery: 'Ästhetische Chirurgie',
      AestheticSurgeryText:
        'Wir bieten sichere und effektive Lösungen in der plastischen Chirurgie mit unseren erfahrenen Ärzten.',
      InternalMedicine: 'Innere Medizin',
      InternalMedicineText:
        'Wir stehen Ihnen mit unseren Fachärzten für allgemeine Gesundheitsprobleme zur Verfügung.',
      Neurology: 'Neurologie',
      NeurologyText:
        'Wir stehen Ihnen mit unseren Fachärzten für allgemeine Gesundheitsprobleme zur Verfügung.',
      Obesity: 'Adipositas',
      ObesityText:
        'Wir bieten Ihnen mit unseren erfahrenen Diätassistenten und chirurgischen Optionen die besten Lösungen zum Abnehmen.',
      Hospitals: 'Kliniken',
      HospitalsText:
        'Lernen Sie unsere ausgewählten Kliniken kennen, mit denen wir zusammenarbeiten, um Ihnen den besten Gesundheitsdienst zu bieten.',
      BlogText:
        'Lesen Sie unsere Artikel, die Expertenmeinungen zu Ernährung, Bewegung, Krankheiten und vielen anderen Themen enthalten, um das notwendige Wissen für ein gesundes Leben zu erlangen.',
      FooterText:
        'Ihre Gesundheit ist uns wichtig. Machen Sie mit Klinikya einen Schritt in ein gesundes Leben.',
      HealthcareProfessionals: 'Gesundheitsfachkräfte',
      download: 'Laden Sie unsere App herunter',
      search: 'Suche',
      view: 'Ansehen',
      departments: 'Abteilungen',
      teeth: 'Zähne',
      teethText:
        'Wir bieten Ihnen den Service unserer Experten-Zahnärzte in Fragen zur Mund- und Zahngesundheit.',
      showAllBlogs: 'Alle Blogbeiträge anzeigen',
      showAllHospitals: 'Alle Krankenhäuser anzeigen',
      reachUs: 'Kontaktieren Sie uns',
      subscribe: 'Abonnieren Sie für die neuesten Updates',
      email: 'E-Mail-Addresse',
      subscribeBtn: 'Abonnieren',
      wtitle1:
        'Klinikya bietet Ärzten und Gesundheitseinrichtungen verschiedene spezielle Dienstleistungen an.',
      wtext1:
        'Mit unseren speziell entwickelten Services für Ärzte und Gesundheitseinrichtungen im Gesundheitssektor helfen wir Ihnen, Ihre Arbeit einfacher und effektiver zu managen.',
      getStarted: 'Loslegen',
      wtitle2: 'Entwicklung von medizinischer Software',
      wtext2:
        'Wir bieten einen Service, der Ärzten und Gesundheitseinrichtungen ermöglicht, ihre eigenen Websites zu erstellen. Dadurch wird es für Patienten einfacher, mit Ihnen in Kontakt zu treten.',
      wtitle3: 'Entwicklung von mobilen Anwendungen',
      wtext3:
        'Die Verwendung von mobilen Anwendungen im Gesundheitsbereich hat in den letzten Jahren stark zugenommen. Deshalb bieten wir Ärzten und Gesundheitseinrichtungen einen speziellen Service zur Entwicklung von mobilen Anwendungen an. Dadurch können Sie leichter mit Ihren Patienten kommunizieren, Termine vereinbaren und medizinische Beratungsdienste anbieten.',
      wtitle4: 'Terminplanungssystem',
      wtext4:
        'Wir bieten ein System zur Vereinfachung der Terminplanung für Ärzte und Gesundheitseinrichtungen an. Dieses System ermöglicht es Ärzten und Patienten, Termine einfach zu verwalten.',
      wtitle5: 'Fernüberwachung von Patienten',
      wtext5:
        'Wir bieten ein Kundenverfolgungssystem an, das Ärzten hilft, eine bessere Beziehung zu ihren Kunden aufzubauen. Dieses System ist ideal zur Überwachung von Patientenmedizinischen Daten und Behandlungsprozessen.',
      wtitle6: 'Telemedizin-Lösungen',
      wtext6:
        'Wir ermöglichen Ihnen die Fernkommunikation mit Ihren Patienten durch Telemedizin-Lösungen, die eine der wichtigsten Innovationen im Gesundheitswesen sind. Auf diese Weise können Sie mit Ihren Patienten Videokonferenzen führen, medizinische Ratschläge geben und Rezepte ausstellen.',
      ptitle1: 'Sicherer und einfacher Kommunikation für Gesundheitsprofis',
      ptext1:
        'Wir bei Klinikya arbeiten daran, den Gesundheitsdienstleistern den bestmöglichen Service zu bieten. Mit unseren Werkzeugen, die den Ärzten eine einfache Kommunikation mit ihren Patienten ermöglichen, streben wir an, dass die Gesundheitsdienstleistungen sicherer und effizienter werden. Sie können auch von unseren speziellen Dienstleistungen für Gesundheitsdienstleister profitieren, um Ihre Arbeit zu erleichtern.',
      ptitle2:
        'Klinikya ermöglicht es Patienten und Ärzten, Gesundheitsdienstleistungen ohne Zeit- und Ortsbeschränkungen zu nutzen',
      ptext2:
        'Klinikya ermöglicht es Ärzten und Patienten, online zusammenzukommen und Gesundheitsdienstleistungen auf eine einfachere und praktischere Weise anzubieten.',
      ptitle3:
        'Klinikya hilft Ärzten dabei, ihre persönlichen und beruflichen Informationen online zu teilen',
      ptext3:
        'Klinikya hilft Ärzten, ihre eigenen Kenntnisse und Fähigkeiten zu präsentieren, potenzielle Patienten über Ärzte zu informieren und den Ärzten dabei zu helfen, mit ihren aktuellen Patienten in Kontakt zu treten.',
      ptitle4:
        'Ihre Daten werden bei Klinikya in der Cloud verschlüsselt und durch Sicherheitsmaßnahmen geschützt.',
      ptext4:
        'Daten werden in der Cloud hochgeladen, um Patienten und Ärzten einen einfacheren Zugriff auf die Daten zu ermöglichen.',
      ptitle5:
        'Klinikya CRM-System ermöglicht eine effektive und effiziente Kommunikation zwischen Ärzten und Patienten.',
      ptext5:
        'Das CRM-System sammelt, speichert und verwaltet die Daten von Ärzten und Patienten und zielt darauf ab, die Kundenbeziehungen zu verbessern. Dadurch können Gesundheitsdienstleistungen effektiver und effizienter angeboten werden.',
      htitle1: 'Gesundheitsdienstleister',
      htext1:
        'In 16 verschiedenen Märkten weltweit, darunter Deutschland, Großbritannien, Nordafrika, Naher Osten und Aserbaidschan, gibt es Gesundheitsdienstleister.',
      htitle2: 'Zugang zu 16 Märkten',
      htitle3:
        'Erhalten Sie einen persönlichen Assistenten, der die Sprache Ihrer ausländischen Patienten spricht.',
      htext3:
        'Einige der weltweit am häufigsten verwendeten Sprachen werden in der Klinkya-App dargestellt, um die weltweite Erreichbarkeit der Patienten zu gewährleisten.',
      htitle4:
        '24/7 Erhalten Sie Unterstützung von Sekretär / Call Center / Alles, was Sie erreichen können',
      htext4:
        'Während in vielen Anwendungen der Kundenservice fast nicht vorhanden ist, bieten wir rund um die Uhr Unterstützung, um die Zufriedenheit zu gewährleisten.',
      htitle5:
        'Wir können Ihnen bei der Erlangung eines medizinischen Tourismus-Zertifikats helfen, um Zugang zum medizinischen Tourismusmarkt zu erhalten.',
      htext5:
        'Es kann schwierig sein, ein medizinisches Tourismus-Zertifikat zu erhalten. Klinikya verfügt über die erforderlichen Werkzeuge, um den Prozess für Gesundheitsdienstleister zu vereinfachen.',
      htitle6:
        'Erhalten Sie ein mobiles / Web-System zur Verwaltung und Nachverfolgung Ihrer Patienten',
      htext6:
        'Wenn Ihre Klinik zwar mit den neuesten Technologien ausgestattet ist, aber aktualisiert werden muss, erhalten Sie durch eine Zusammenarbeit mit uns ein aktuelles mobiles und Web-System zur Verwaltung und Nachverfolgung Ihrer Patienten.',
      htitle7: 'Videoanruf- und Digitalisierungslösungen',
      htext7:
        'Mit Klinikya können Ärzte die Termine ihrer Patienten von jedem Computer, Tablet oder Mobilgerät aus schreiben, organisieren und verfolgen, Gespräche führen und durch Erfassung von Patientenstatistiken Verbindungen zu Patienten auf der ganzen Welt herstellen.',
      videoCall: 'Videoanruf',
      bTitle1:
        'Gesunde Lebensstil-Tipps: Die Geheimnisse eines gesunden Lebens mit Expertenmeinungen',
      bText1:
        'Lesen Sie unsere Artikel, die Expertenmeinungen zu Ernährung, Bewegung, Krankheiten und vielen anderen Themen enthalten, um die Informationen zu erhalten, die Sie für ein gesundes Leben benötigen. Unser gesunder Lebensstil-Blog bietet Ihnen aktuelle und wissenschaftlich fundierte Informationen zu Gesundheit und Fitness-Themen.',
      language: 'Sprache',
      turkish: 'Türkisch',
      english: 'Englisch',
      deutch: 'Deutsch',
      arabic: 'Arabisch',
      russian: 'Russisch',
      DayNames: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
      DayLongNames: [
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
        'Sonntag',
      ],
      MonthNames: [
        'Jan.',
        ' Feb',
        ' Mär',
        ' Apr',
        ' Mai',
        ' Jun',
        ' Jul',
        ' Aug',
        ' Sep',
        ' Okt',
        ' Nov',
        ' Dez',
      ],
    },
  },
  ar: {
    translation: {
      SearchBar2Y: 'اختر موقع',
      SearchBar3Y: 'اختر موعد',
      application: 'تطبيق',
      web: 'تطوير البرمجيات،',
      professional: 'الأخصائيين ',
      service: 'خدمات',
      blog: 'مدونة',
      signIn: 'مدونة',
      MainHeading: 'تطبيق واحد لجميع خدماتك الصحية',
      MainText:
        'تتيح لك العيادة الوصول إلى جميع احتياجات الرعاية الصحية الخاصة بك من خلال تطبيق واحد. اتصل بطبيبك والمستشفيات عبر الإنترنت ، واطلب عرضًا خاصًا ، واحصل على الوصفات الطبية عبر الإنترنت ، وقم بالوصول بسهولة إلى خدمات المختبر الطبية دون مغادرة منزلك.',
      button: 'اكتشف تطبيقنا',
      SearchBar1: 'ابحث عن طبيب أو مرض أو إجراء',
      SearchBar2: 'اختر موقعًا مناسبًا',
      SearchBar3: 'اختر تاريخا مناسبًا',
      HealthPackagesTitle: 'العروض الصحية',
      HealthPackagesText:
        'يمكنك الحصول على الدعم الذي تحتاجه لحماية صحتك من خلال باقاتنا التي اعددناها خصيصًا والتي يمكنك اختيارها من بين مختلف المجالات.',
      departmentsText:
        'ابحث عن الخدمة الصحية التي تحتاجها عن طريق الاختيار من الأقسام وابدأ علاجك.',
      womensHealth: 'صحة المرأة',
      womensHealthText:
        'نحن في خدمتك مع أطبائنا ذوي الخبرة في أمراض النساء والتوليد وجراحة النساء.',
      Oncology: 'الأورام',
      OncologyText:
        'نقدم لك أفضل خيارات العلاج مع أطبائنا الخبراء في تشخيص وعلاج السرطان.',
      Rheumatology: 'الروماتيزم',
      RheumatologyText:
        'نقدم لك أفضل خيارات العلاج مع أطبائنا الخبراء في جميع اضطرابات الروماتيزم.',
      AestheticSurgery: 'الجراحة التجميلية',
      AestheticSurgeryText:
        'نقدم لك حلولاً آمنة وفعالة مع أطبائنا ذوي الخبرة في الجراحة التجميلية.',
      InternalMedicine: 'طب الباطنية',
      InternalMedicineText:
        'نحن في خدمتك مع أطبائنا المتخصصين لمشاكلك الصحية العامة.',
      Neurology: 'طب العصبية',
      NeurologyText: 'نحن في خدمتك مع أطبائنا المتخصصين لمشاكلك الصحية العامة.',
      Obesity: 'السمنة',
      ObesityText:
        'نقدم لك أفضل الحلول مع اختصاصيي التغذية والخيارات الجراحية الخبراء في إنقاص الوزن.',
      Hospitals: 'المستشفيات',
      HospitalsText:
        'تعرف على المستشفيات المتميزة التي نتعاون معها لنقدم لك أفضل خدمة رعاية صحية.',
      BlogText:
        'يمكنك الحصول على المعلومات اللازمة للحفاظ على حياة صحية من خلال قراءة مقالاتنا التي تحتوي على آراء الخبراء حول التغذية والتمارين الرياضية والأمراض وغيرها الكثير.',
      FooterText:
        'صحتك مهمة بالنسبة لنا ، اتخذ خطوة نحو حياة صحية مع كلينيكيا.',
      HealthcareProfessionals: 'الأخصائيين الصحيين',
      download: 'قم بتنزيل تطبيقنا',
      search: 'ابحث',
      view: 'اعرض',
      departments: 'الاقسام',
      teeth: 'سن',
      teethText: 'نحن في خدمتك مع أطباء الأسنان الخبراء في صحة الفم والأسنان.',
      showAllBlogs: 'عرض جميع مشاركات المدونة',
      showAllHospitals: 'عرض جميع المستشفيات',
      reachUs: 'اتصل بنا',
      subscribe: 'اشترك للحصول على آخر تحديث',
      email: 'عنوان البريد الإلكتروني',
      subscribeBtn: 'Abonnieren',
      wtitle1:
        'تقدم العيادة خدمات متنوعة تم تطويرها خصيصًا للأطباء والمؤسسات الصحية.',
      wtext1:
        'من خلال خدماتنا المطورة خصيصًا للأطباء والمؤسسات الصحية التي تخدم في القطاع الصحي ، نتيح لك إدارة أعمالك بسهولة وفعالية أكبر.',
      getStarted: 'البدء',
      wtitle2: 'تطوير البرمجيات الطبية',
      wtext2:
        'نحن نقدم خدمة تتيح للأطباء ومؤسسات الرعاية الصحية إنشاء مواقع الويب الخاصة بهم. بفضل هذه الخدمة ، سيكون من السهل على المرضى الاتصال بك.',
      wtitle3: 'تطوير تطبيقات الهاتف المحمول',
      wtext3:
        'شهد استخدام تطبيقات الهاتف المحمول في قطاع الصحة زيادة سريعة في السنوات الأخيرة. لهذا السبب ، نقدم خدمات تطوير تطبيقات الهاتف المحمول الخاصة للأطباء والمؤسسات الصحية. بهذه الطريقة ، يمكنك التواصل بسهولة أكبر مع مرضاك وتحديد المواعيد وتقديم خدمات الاستشارات الطبية.',
      wtitle4: 'نظام المواعيد',
      wtext4:
        'نقدم نظامًا يسهل عملية جدولة مواعيد الأطباء والمؤسسات الصحية. يسمح هذا النظام للأطباء والمرضى بإدارة أوقات مواعيدهم بسهولة.',
      wtitle5: 'متابعة المريض عن بعد',
      wtext5:
        'نحن نقدم نظام تتبع للعملاء يساعد الأطباء على بناء علاقة أفضل مع عملائهم. هذا النظام مثالي لمراقبة التاريخ الطبي للمرضى ومدة العلاج.',
      wtitle6: 'حلول التطبيب عن بعد',
      wtext6:
        'مع حلول التطبيب عن بعد ، أحد أهم الابتكارات في القطاع الصحي ، نتيح لك التواصل مع مرضاك عن بُعد. وبهذه الطريقة ، يمكنك عقد اجتماعات مع مرضاك عبر مكالمة فيديو وتقديم المشورة الطبية وكتابة الوصفات الطبية.',
      ptitle1: 'اتصال آمن وسهل للمهنيين الصحيين',
      ptext1:
        'بصفتنا كلينيكيا ، نسعى جاهدين لتقديم أفضل خدمة لمتخصصي الرعاية الصحية. نهدف إلى جعل خدمات الرعاية الصحية أكثر أمانًا وكفاءة باستخدام أدواتنا التي تمكن أطبائنا من التواصل بشكل مريح مع المرضى. يمكنك أيضًا تسهيل عملك من خلال الاستفادة من خدماتنا الخاصة للمهنيين الصحيين.',
      ptitle2:
        'تسمح كلينيكيا للمرضى والأطباء بالوصول إلى الرعاية الصحية دون قيود الزمان والمكان.',
      ptext2:
        'تمكن كلينيكيا الأطباء والمرضى من الاجتماع عبر الإنترنت وتقديم الخدمات الصحية بطريقة أسهل وأكثر عملية.',
      ptitle3:
        'تساعد كلينيكيا الأطباء على مشاركة معلوماتهم الشخصية والمهنية عبر الإنترنت',
      ptext3:
        'تساعد كلينيكيا الأطباء على تعزيز معارفهم ومهاراتهم ، ويتعرف المرضى المحتملون على الأطباء ، ويتواصل الأطباء مع مرضاهم الحاليين.',
      ptitle4:
        'في كلينيكيا ، يتم تشفير بياناتك في cloud وحمايتها بإجراءات أمنية.',
      ptext4:
        'يساعد تحميل البيانات على cloud المرضى والأطباء في الوصول إلى البيانات بسهولة أكبر.',
      ptitle5:
        'مع نظام Klinikya CRM ، يتم إنشاء تواصل أكثر كفاءة وفعالية بين الأطباء والمرضى.',
      ptext5:
        'يقوم نظام CRM بجمع وتخزين وإدارة بيانات الأطباء والمرضى ويهدف أيضًا إلى تحسين العلاقات مع العملاء. بهذه الطريقة ، يمكن تقديم الخدمات الصحية بشكل أكثر كفاءة وفعالية.',
      htitle1: 'مقدّم الرعاية الصحية',
      htext1:
        'يتوفر مقدمو الرعاية الصحية من ستة عشر سوقًا مختلفًا في جميع أنحاء العالم ، بما في ذلك ألمانيا والمملكة المتحدة وشمال أفريقيا والشرق الأوسط و أذربيجان.',
      htitle2: 'الوصول إلى 16 سوقًا',
      htitle3: 'احصل على مساعد شخصي لمرضاك الأجانب يتحدث لغتهم',
      htext3:
        'يتم تمثيل بعض اللغات الأكثر شيوعًا في جميع أنحاء العالم على تطبيق Klinkya ، مما يضمن إمكانية الوصول إليها للمرضى في جميع أنحاء العالم',
      htitle4:
        'احصل على سكرتير / مركز اتصال / ما يمكننا الوصول إليه 24/7 بدعم العديد من اللغات ',
      htext4:
        'في حين أن خدمة العملاء غير متوفرة فعليًا في العديد من التطبيقات ، فإننا نقدم دعمًا  24/7  لإرضاء الجميع',
      htitle5:
        'يمكننا مساعدتك في الحصول على الشهادة الصحية السياحية للوصول إلى سوق السياحة العلاجية',
      htext5:
        'قد يكون الحصول على شهادة سياحة طبية أمرًا صعبًا. كلينيكيا لديها الأدوات اللازمة لتسهيل عملية مبسطة لمهن الرعاية الصحية',
      htitle6: 'احصل على نظام الهاتف المحمول / الويب لإدارة ومتابعة مرضاك',
      htext6:
        'سواء كانت عيادتك مليئة بأحدث التقنيات أو تحتاج إلى تحديث ، ستتلقى أحدث أنظمة الهاتف المحمول والويب لإدارة المرضى ومتابعتهم عند الشراكة معنا',
      htitle7: 'مكالمات الفيديو وحلول التكنولوجيا الرقمية',
      htext7:
        'باستخدام كلينيكيا، يمكن للأطباء كتابة وتعديل ومتابعة جداول المرضى وإجراء المكالمات وتلقي إحصائيات المرضى من أي جهاز كمبيوتر أو جهاز لوحي أو جهاز محمول ، مما يساعد على التواصل مع المرضى في جميع أنحاء العالم',
      videoCall: 'مكالمة فيديو',
      bTitle1: 'نصائح للحياة الصحية: أسرار الحياة الصحية مع آراء الخبراء',
      bText1:
        'احصل على المعلومات التي تحتاجها لتعيش حياة صحية من خلال قراءة مقالاتنا حول التغذية والتمارين الرياضية والأمراض والمزيد. تقدم لك مدونة الحياة الصحية الخاصة بنا معلومات محدثة وقائمة على أسس علمية حول الصحة والحياة الصحية.',
      read: 'أقرأ',
      language: 'لغة',
      turkish: 'التركية',
      english: 'الإنجليزي',
      deutch: 'الألمانية',
      arabic: 'العربية',
      russian: 'الروسية',
      DayNames: ['أ', 'ث', 'أر', 'خ', 'ج', 'س', 'أح'],
      DayLongNames: [
        'الأحد',
        'الاثنين',
        'الثلاثاء',
        'الأربعاء',
        'الخميس',
        'الجمعة',
        'السبت',
      ],
      MonthNames: [
        'يَنايِر',
        'فِبرايِر',
        'مارِس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر',
      ],
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
