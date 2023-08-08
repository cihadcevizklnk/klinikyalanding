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
      ProcessingGuide: "İşlem Rehberi",
      PGTitle1: 'Yüz Yüze Randevu Alınması',
      PGDesciption1: `
      Randevuyu almak istediğiniz hastane, departman veya doktor ismi ile arama yaparak arama sayfasına yönlendirileceksiniz. Burada iligli aramayı ve buna benzer sonuçlar gösterilecektir.

      İstenilen doktor seçildikten sonra. Randevu Tarihi ve Saati seçilir. Bir sonraki sayfada yapılan seçimin özeti gözükmektedir.
      
      Özet Sayfası onaylandığında Randevunuz sistem tarafından alınarak doktor/hastane onay mekanizmasına düşer. Bununla birlikte kullanıcı randevularım sayfasına aktarılır
      `,
      PGTitle2: 'Görüntülü Randevu Alınması',
      PGDesciption2: `
      Görüntülü görüşme seçeneği seçildiği durumda randevuyu almak istediğiniz hastane, departman veya doktor ismi ile arama yaparak arama sayfasına yönlendirileceksiniz. Burada iligli aramayı ve buna benzer sonuçlar gösterilecektir.

      İstenilen doktor seçildikten sonra. Randevu Tarihi ve Saati seçilir. Bir sonraki sayfada yapılan seçimin özeti gözükmektedir.
      
      Özet Sayfası onaylandığında kullanıcı videolu görüşme hizmet bedelini ödemesi için ödeme sayfasına yönlendirilir.
      `,
      PGTitle3: 'Görüntülü Randevu Hizmet Bedelinin Alınması',
      PGDesciption3: `
      Hastane veya doktor tarafından belirlenen videolu görüşme hizmet bedeli bu sayfada alınmaktadır. 

      Ödeme Seçenekleri ekranında kredi kartı ile ödeme yaparken kredi kartı bilgilerinizi doldurunuz. Eğer taksit seçeneği sunuluyorsa, istediğiniz taksit sayısını seçebilirsiniz. 3D Güvenli satış işlemi çerçevesinde, ödeme aşamalarını tamamlayıp “Randevuyu Al” butonuna tıkladıktan sonra, banka size bir SMS gönderecek ve web sitesine yönlendirecektir. Sonraki aşamada Ön Bilgilendirme Formunu ve Mesafeli Satış Sözleşmesini okumanız, kabul etmeniz ve “Ön Bilgilendirme Formunu ve Mesafeli Satış Sözleşmesini okudum, onaylıyorum.” seçeneğine tıklamanız gerekmektedir. Online olarak Mesafeli Satış Sözleşmesi kurulur ve ödeme bilgisi ile toplam tutar kalemler halinde gözükür.
      
      Sözleşmeleri kabul ettikten sonra, ödemenin yapılmasını sağlamak için “Randevuyu Al” butonuna tıklayarak siparişinizi tamamlayabilirsiniz.
      `,
      PGTitle4: 'Hizmet Teklif Oluşturulması',
      PGDesciption4: `
      Anasayfada bulunan operasyon teklifi, diğer teklifler(Hazır Paketler) veya Tekliflerim sayfası üzerinden teklif oluşturma sayfasına ulaşılmaktadır. Bu sayfa üzerinde ikinci görüş veya operasyon seçilebilmektedir. Tüm ilgili alanlar oluşturmak istediğiniz teklife uygun olacak şekilde adım adım doldurulur. Son adıma gelindiğinde kendinizle ilgili hastalıklarınızı ve kullandığınız ilaçları girerek hizmet teklifi oluşturulmaktadır.

      Bu teklif seçmiş olduğunuz operasyon veya departmana uygun olacak şekilde sadece ilgili hastaneler gönderilir. Girmiş olduğunuz bu bilgiler teklif için geçerli olup randevu ve diğer tekliflerinizde bu bilgileri tekrardan girmeniz istenecektir.
      `,
      PGTitle5: 'Gelen Hizmet Teklifine Cevap Verilmesi',
      PGDesciption5: `
      Hasta/Danışan tarafından gönderilen teklifler sadece teklif detayına göre ilgili hastaneler gönderilecektir. Ve teklife cevap veren kurumlar birbirlerinin teklif detaylarını göremezler. Teklif cevap sadece hasta ve hastane arasında gizli olarak gerçekleşmektedir.

      Hizmet teklifine uygun olacak şekilde bu operasyonu gerçekleştiren departman, fiyat, tarih ve açıklama bilgisi girilerek Hizmet Cevap Teklifi Hasta tarafına incelenmesi ve onay verilmesi için geri gönderilir.
      `,
      PGTitle6: 'Gelen Hizmet Cevap Teklifinin Onaylanması',
      PGDesciption6: `
      Hasta/Danışan ve Hastane arasında özel olarak gerçekleşen sürecin Gelen Hizmet Cevap Teklifi onaylama aşamasında istenildiği durumda uygulama içerisinden mesaj yoluyla daha  fazla bilgi karşılıklı olarak alınıp iletişim kurulabilir.

      Teklif onay aşamasında hastanede geçirilen süreyi ve deneyimi daha iyi bir şekilde sağlamak için istenildiği durumda kişisel asistan seçeneği seçilebilir. 
      
      Teklif değerlendirilip onaylandıktan sonra hasta/danışan hastane tarafından belirlenen ücretin ödenmesi için kişi ödeme sayfasına yönlendirilir.
      `,
      PGTitle7: 'Gelen Hizmet Cevap Teklifinin Ödemesinin Alınması',
      PGDesciption7: `
      Gelen Hizmet Cevap Teklifi Onaylandıktsan sonra hastanenin belirlediği hizmet bedeli tutarı bu sayfada alınmaktadır.

      Ödeme Seçenekleri ekranında kredi kartı ile ödeme yaparken kredi kartı bilgilerinizi doldurunuz. Eğer taksit seçeneği sunuluyorsa, istediğiniz taksit sayısını seçebilirsiniz. 3D Güvenli satış işlemi çerçevesinde, ödeme aşamalarını tamamlayıp “Teklifi Onayla” butonuna tıkladıktan sonra, banka size bir SMS gönderecek ve web sitesine yönlendirecektir. Sonraki aşamada Ön Bilgilendirme Formunu ve Mesafeli Satış Sözleşmesini okumanız, kabul etmeniz ve “Ön Bilgilendirme Formunu ve Mesafeli Satış Sözleşmesini okudum, onaylıyorum.” seçeneğine tıklamanız gerekmektedir. Online olarak Mesafeli Satış Sözleşmesi kurulur ve ödeme bilgisi ile toplam tutar kalemler halinde gözükür.
      
      Sözleşmeleri kabul ettikten sonra, ödemenin yapılmasını sağlamak için “Teklifi Onayla” butonuna tıklayarak siparişinizi tamamlayabilirsiniz.
      `,
      PGTitle8: 'Görüntülü Randevunun Gerçekleşmesi',
      PGDesciption8: `
      Ödemesi yapılan ve onaylanan randevu saati geldiğinde kullanıcı randevu detay sayfasından veya doktor ile hasta/danışan mesajlaşma sayfası üzerinden ilgili butona tıklayarak videolu görüşme sayfasını açmaktadır. Bu görüşmeler iki veya üç kişi ile gerçekleştirilebilir. Görüşme esnasında istenildiği durumlarda kamera ve mikrofon kapatıp tekrardan açılabilir. Bununla beraber tarafların istediği durumlarda videolu görüşmeden yapılabilmektedir.`,

      PGTitle9: 'Mesafeli satış sözleşmesine uygulama içerisinde nasıl ulaşılabileceği',
      PGDesciption9: `
      Ödeme ekranlarının içerisinde bulunan ilgili metin veya kutucuğa tıklayarak bu metne ulaşılabilir. Bununla beraber www.klinikya.com üzerinden ilgili sayfaya giderek metnin tamamına ulaşılabilir.`,
      PGTitle10: 'Kişisel verilere ilişkin gizlilik kuralları ve bunlara uygulama içerisinde nasıl ulaşabileceği',
      PGDesciption10: `
      Kayıt olma ekranlarının içerisinde bulunan ilgili metin veya kutucağa tıklayarak bu metne ulaşılabilir. Bununla beraber www.klinikya.com üzerinden ilgili sayfaya giderek metnin tamamına ulaşılabilir.`,
      PGTitle11: 'Uyuşmazlık çıkması halinde  alternatif uyuşmazlık çözüm mekanizmaları nelerdir?',
      PGDesciption11: `
      6502 Sayılı Tüketicinin Korunması Hakkında Kanun'un 68. maddesinin 1. fıkrasında belirtilen alt ve üst limitler doğrultusunda tüketici talepleri hakkında ilçe/il tüketici hakem heyetleri yetkilidir.`,
    },
  },
  en: {
    translation: {
      showAllProcedures: 'Show all health packages',
      logIn: 'Login',
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
        "ProcessingGuide": "Processing Guide",
        "PGTitle1": "Making an Appointment in Person",
        "PGDesciption1": "By searching with the name of the hospital, department, or doctor you want to make an appointment with, you will be directed to the search page. Relevant search results will be displayed.\n\nAfter selecting the desired doctor, choose the appointment date and time. The next page will show a summary of your selection.\n\nSummary Page confirmation will send your appointment to the doctor/hospital approval mechanism. Additionally, the user will be transferred to the 'My Appointments' page.",
        "PGTitle2": "Making a Video Appointment",
        "PGDesciption2": "If you choose the video consultation option, you will be directed to the search page based on the hospital, department, or doctor you want to make an appointment with. Relevant search results will be displayed.\n\nAfter selecting the desired doctor, choose the appointment date and time. The next page will show a summary of your selection.\n\nOnce the Summary Page is confirmed, the user will be directed to the payment page to pay for the video consultation service.",
        "PGTitle3": "Payment for Video Appointment Service",
        "PGDesciption3": "The video consultation service fee determined by the hospital or doctor will be collected on this page.\n\nOn the Payment Options screen, fill in your credit card information for payment. If installment options are available, you can choose the desired number of installments. As part of the 3D Secure sales process, after completing the payment steps and clicking the 'Get Appointment' button, the bank will send you an SMS and redirect you to the website. In the next step, read and accept the Preliminary Information Form and Distance Sales Agreement, and click the 'I have read and accepted the Preliminary Information Form and Distance Sales Agreement' option. An online Distance Sales Agreement will be established, displaying the payment information and total amount as separate items.\n\nAfter accepting the agreements, click the 'Get Appointment' button to complete your order and facilitate the payment.",
        "PGTitle4": "Creating a Service Offer",
        "PGDesciption4": "The service offer creation page can be accessed through the operation offer, other offers (Ready Packages), or the 'My Offers' page. On this page, you can select the second opinion or operation based on your desired offer. Fill in all relevant fields step by step to match the offer you want to create. In the final step, create the service offer by entering your relevant diseases and medications.\n\nThis offer will be sent only to the relevant hospitals suitable for the selected operation or department. The information you provide will be valid for the offer, and you may be prompted to enter this information again for your appointment and other offers.",
        "PGTitle5": "Responding to Received Service Offer",
        "PGDesciption5": "The offers sent by the patient/consultant will be sent only to the relevant hospitals based on the offer details. The responding institutions cannot see each other's offer details. The service response will take place confidentially between the patient and the hospital.\n\nEnter the department, price, date, and description information according to the offer, and send the Service Response Offer back to the patient for review and approval.",
        "PGTitle6": "Approval of Received Service Response Offer",
        "PGDesciption6": "During the approval stage of the received Service Response Offer, a private process takes place between the patient/consultant and the hospital. If desired, additional information can be obtained and communication can be established through messaging within the application.\n\nDuring the offer approval stage, the personal assistant option can be selected to enhance the experience and time spent at the hospital.\n\nAfter evaluating and approving the offer, the patient/consultant is directed to the payment page to pay the fee determined by the hospital.",
        "PGTitle7": "Payment Collection for Received Service Response Offer",
        "PGDesciption7": "The service fee determined by the hospital for the received Service Response Offer will be collected on this page.\n\nOn the Payment Options screen, fill in your credit card information for payment. If installment options are available, you can choose the desired number of installments. As part of the 3D Secure sales process, after completing the payment steps and clicking the 'Approve Offer' button, the bank will send you an SMS and redirect you to the website. In the next step, read and accept the Preliminary Information Form and Distance Sales Agreement, and click the 'I have read and accepted the Preliminary Information Form and Distance Sales Agreement' option. An online Distance Sales Agreement will be established, displaying the payment information and total amount as separate items.\n\nAfter accepting the agreements, click the 'Approve Offer' button to complete your order and facilitate the payment.",
        "PGTitle8": "Conducting the Video Appointment",
        "PGDesciption8": "Once the payment has been made and the video appointment has been approved, you can open the video consultation page from the appointment details page or the doctor-patient/consultant messaging page by clicking the relevant button. These meetings can be conducted with two or three participants. During the meeting, the camera and microphone can be turned on and off as desired. Additionally, parties can communicate without using video if preferred.",
        "PGTitle9": "Accessing the Distance Sales Agreement within the Application",
        "PGDesciption9": "You can access the Distance Sales Agreement by clicking on the relevant text or checkbox within the payment screens. Additionally, you can visit www.klinikya.com to go to the relevant page and access the full text.",
        "PGTitle10": "Privacy Rules for Personal Data and How to Access Them within the Application",
        "PGDesciption10": "You can access the Privacy Rules for Personal Data by clicking on the relevant text or checkbox within the registration screens. Additionally, you can visit www.klinikya.com to go to the relevant page and access the full text.",
        "PGTitle11": "Alternative Dispute Resolution Mechanisms in Case of Disputes",
        "PGDesciption11": "In accordance with Article 68, paragraph 1 of the Law on the Protection of the Consumer No. 6502, district/provincial consumer arbitration boards are authorized for consumer demands within the specified limits."
    },
  },
  ru: {
    translation: {
      showAllProcedures: 'Показать все пакеты здоровья',
      logIn: 'войти',
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
      "ProcessingGuide": "Руководство по обработке",
"PGTitle1": "Запись на личную встречу",
"PGDesciption1": "Поиск по имени больницы, отделения или врача, к которому вы хотите записаться на прием, направит вас на страницу поиска. Будут отображены соответствующие результаты поиска.\n\nПосле выбора нужного врача выберите дату и время приема. На следующей странице будет показано подтверждение вашего выбора.\n\nПодтверждение на странице суммаризации отправит вашу запись на одобрение врачу/больнице. Кроме того, пользователь будет перенаправлен на страницу 'Мои записи'.",
"PGTitle2": "Запись на видеоконсультацию",
"PGDesciption2": "Если вы выбираете опцию видеоконсультации, вас направят на страницу поиска на основе больницы, отделения или врача, к которому вы хотите записаться на прием. Будут отображены соответствующие результаты поиска.\n\nПосле выбора нужного врача выберите дату и время приема. На следующей странице будет показано подтверждение вашего выбора.\n\nПосле подтверждения страницы суммаризации вы будете направлены на страницу оплаты за услугу видеоконсультации.",
"PGTitle3": "Оплата за услугу видеоконсультации",
"PGDesciption3": "На этой странице будет взиматься плата за услугу видеоконсультации, определенная больницей или врачом.\n\nНа экране с вариантами оплаты заполните информацию о вашей кредитной карте. Если доступны варианты рассрочки, вы можете выбрать желаемое количество платежей. В рамках процесса продаж 3D Secure после завершения шагов оплаты и нажатия кнопки 'Получить прием', банк отправит вам SMS и перенаправит вас на веб-сайт. На следующем шаге ознакомьтесь и примите Предварительную информацию и Договор о дистанционной продаже, а затем нажмите на опцию 'Я ознакомился и принимаю Предварительную информацию и Договор о дистанционной продаже'. Будет установлен дистанционный договор о продаже, на котором будут отображены информация об оплате и общая сумма в отдельных позициях.\n\nПосле принятия соглашений нажмите кнопку 'Получить прием', чтобы завершить ваш заказ и упростить оплату.",
"PGTitle4": "Создание предложения о услуге",
"PGDesciption4": "Страницу создания предложения о услуге можно открыть через предложение операции, другие предложения (готовые пакеты) или страницу 'Мои предложения'. На этой странице вы можете выбрать второе мнение или операцию в соответствии с желаемым предложением. Поэтапно заполните все соответствующие поля для создания нужного предложения. На последнем шаге создайте предложение о услуге, указав соответствующие заболевания и лекарства.\n\nЭто предложение будет отправлено только соответствующим больницам, подходящим для выбранной операции или отделения. Предоставленная вами информация будет действительной для предложения, и вам может потребоваться ввести эту информацию снова при записи на прием и в других предложениях.",
"PGTitle5": "Ответ на полученное предложение о услуге",
"PGDesciption5": "Предложения, отправленные пациентом/консультантом, будут направлены только соответствующим больницам на основе деталей предложения. Ответные учреждения не могут видеть детали предложений друг друга. Ответ на предложение об услуге будет проводиться конфиденциально между пациентом и больницей.\n\nВведите информацию о отделении, цене, дате и описании в соответствии с предложением и отправьте ответное предложение об услуге пациенту для рассмотрения и утверждения.",
"PGTitle6": "Утверждение полученного ответного предложения об услуге",
"PGDesciption6": "Во время этапа утверждения полученного ответного предложения об услуге происходит конфиденциальный процесс между пациентом/консультантом и больницей. При желании можно получить дополнительную информацию и установить связь через сообщения в приложении.\n\nВо время этапа утверждения предложения можно выбрать опцию персонального помощника, чтобы улучшить опыт и время, проведенное в больнице.\n\nПосле оценки и утверждения предложения пациент/консультант будет направлен на страницу оплаты сбора, определенного больницей.",
"PGTitle7":"Сбор платы за полученное ответное предложение об услуге",
"PGDesciption7": "На этой странице будет взиматься плата за услугу, определенную больницей, за полученное ответное предложение об услуге.\n\nНа экране вариантов оплаты заполните информацию о вашей кредитной карте. Если доступны варианты рассрочки, вы можете выбрать желаемое количество платежей. В рамках процесса продаж 3D Secure после завершения шагов оплаты и нажатия кнопки 'Утвердить предложение', банк отправит вам SMS и перенаправит вас на веб-сайт. На следующем шаге ознакомьтесь и примите Предварительную информацию и Договор о дистанционной продаже, а затем нажмите на опцию 'Я ознакомился и принимаю Предварительную информацию и Договор о дистанционной продаже'. Будет установлен дистанционный договор о продаже, на котором будут отображены информация об оплате и общая сумма в отдельных позициях.\n\nПосле принятия соглашений нажмите кнопку 'Утвердить предложение', чтобы завершить ваш заказ и упростить оплату.",
"PGTitle8": "Проведение видеоконсультации",
"PGDesciption8": "После совершения оплаты и утверждения видеоконсультации вы можете открыть страницу видеоконсультации из страницы сведений о приеме или страницы переписки между врачом и пациентом/консультантом, нажав соответствующую кнопку. Эти встречи могут проводиться с двумя или тремя участниками. Во время встречи можно включать и отключать камеру и микрофон по желанию. Кроме того, стороны могут общаться без использования видео, если предпочтительно.",
"PGTitle9": "Доступ к договору о дистанционной продаже в приложении",
"PGDesciption9": "Вы можете получить доступ к договору о дистанционной продаже, нажав на соответствующий текст или флажок на экранах оплаты. Кроме того, вы можете посетить www.klinikya.com, чтобы перейти на соответствующую страницу и получить полный текст.",
"PGTitle10": "Правила конфиденциальности персональных данных и доступ к ним в приложении",
"PGDesciption10": "Вы можете получить доступ к Правилам конфиденциальности персональных данных, нажав на соответствующий текст или флажок на экранах регистрации. Кроме того, вы можете посетить www.klinikya.com, чтобы перейти на соответствующую страницу и получить полный текст.",
"PGTitle11": "Альтернативные механизмы разрешения споров в случае конфликтов",
"PGDesciption11": "В соответствии со статьей 68, параграф 1 Закона о защите прав потребителей № 6502 для рассмотрения требований потребителей в пределах установленных ограничений предусмотрены районные/областные арбитражные комиссии потребителей."
    },
  },
  de: {
    translation: {
      showAllProcedures: 'Alle Gesundheitspakete anzeigen',
      logIn: 'Anmelden',
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
      "ProcessingGuide": "Bearbeitungsleitfaden",
"PGTitle1": "Persönlich einen Termin vereinbaren",
"PGDesciption1": "Indem Sie nach dem Namen des Krankenhauses, der Abteilung oder des Arztes suchen, mit dem Sie einen Termin vereinbaren möchten, werden Sie zur Suchseite weitergeleitet. Relevante Suchergebnisse werden angezeigt.\n\nNach Auswahl des gewünschten Arztes wählen Sie das Termindatum und die Uhrzeit aus. Die nächste Seite zeigt eine Zusammenfassung Ihrer Auswahl an.\n\nDie Bestätigung auf der Zusammenfassungsseite sendet Ihren Termin an den Genehmigungsmechanismus des Arztes/Krankenhauses. Darüber hinaus werden Sie zur Seite 'Meine Termine' weitergeleitet.",
"PGTitle2": "Vereinbarung eines Video-Termins",
"PGDesciption2": "Wenn Sie die Option zur Video-Konsultation wählen, werden Sie zur Suchseite weitergeleitet, basierend auf dem Krankenhaus, der Abteilung oder dem Arzt, mit dem Sie einen Termin vereinbaren möchten. Relevante Suchergebnisse werden angezeigt.\n\nNach Auswahl des gewünschten Arztes wählen Sie das Termindatum und die Uhrzeit aus. Die nächste Seite zeigt eine Zusammenfassung Ihrer Auswahl an.\n\nNach Bestätigung der Zusammenfassungsseite werden Sie zur Zahlungsseite weitergeleitet, um den Video-Konsultationsdienst zu bezahlen.",
"PGTitle3": "Zahlung für den Video-Termin-Service",
"PGDesciption3": "Auf dieser Seite wird die vom Krankenhaus oder Arzt festgelegte Gebühr für den Video-Konsultationsdienst eingezogen.\n\nAuf der Zahlungsoptionsseite geben Sie Ihre Kreditkarteninformationen für die Zahlung ein. Wenn Ratenzahlungsoptionen verfügbar sind, können Sie die gewünschte Anzahl von Raten auswählen. Im Rahmen des 3D Secure-Verkaufsprozesses sendet Ihnen die Bank nach Abschluss der Zahlungsschritte und Klicken auf die Schaltfläche 'Termin erhalten' eine SMS und leitet Sie auf die Website weiter. Im nächsten Schritt lesen Sie das Vorvertragliche Informationsformular und die Fernabsatzvereinbarung durch und klicken auf die Option 'Ich habe das Vorvertragliche Informationsformular und die Fernabsatzvereinbarung gelesen und akzeptiert'. Es wird eine Online-Fernabsatzvereinbarung erstellt, in der die Zahlungsinformationen und der Gesamtbetrag als separate Positionen angezeigt werden.\n\nNach Annahme der Vereinbarungen klicken Sie auf die Schaltfläche 'Termin erhalten', um Ihre Bestellung abzuschließen und die Zahlung zu erleichtern.",
"PGTitle4": "Erstellung eines Serviceangebots",
"PGDesciption4": "Die Seite zur Erstellung des Serviceangebots kann über das Operationsangebot, andere Angebote (Ready Packages) oder die Seite 'Meine Angebote' aufgerufen werden. Auf dieser Seite können Sie die Zweitmeinung oder Operation gemäß Ihrem gewünschten Angebot auswählen. Füllen Sie schrittweise alle relevanten Felder aus, um das gewünschte Angebot abzugleichen. Im letzten Schritt erstellen Sie das Serviceangebot, indem Sie Ihre relevanten Krankheiten und Medikamente eingeben.\n\nDieses Angebot wird nur an die relevanten Krankenhäuser gesendet, die für die ausgewählte Operation oder Abteilung geeignet sind. Die von Ihnen angegebenen Informationen sind für das Angebot gültig, und Sie werden möglicherweise aufgefordert, diese Informationen erneut für Ihren Termin und andere Angebote einzugeben.",
"PGTitle5": "Antwort auf erhaltenes Serviceangebot",
"PGDesciption5": "Die vom Patienten/Berater gesendeten Angebote werden nur an die relevanten Krankenhäuser basierend auf den Angebotdetails gesendet. Die reagierenden Institutionen können die Angebotsdetails der anderen nicht sehen. Die Serviceantwort erfolgt vertraulich zwischen dem Patienten und dem Krankenhaus.\n\nGeben Sie gemäß dem Angebot die Abteilung, den Preis, das Datum und die Beschreibungsinformationen ein und senden Sie das Serviceantwortangebot zur Überprüfung und Genehmigung an den Patienten zurück.",
"PGTitle6": "Genehmigung des erhaltenen Serviceantwortangebots",
"PGDesciption6": "Während der Genehmigungsphase des erhaltenen Serviceantwortangebots findet ein privater Prozess zwischen dem Patienten/Berater und dem Krankenhaus statt. Falls gewünscht, können zusätzliche Informationen eingeholt und über die Messaging-Funktion innerhalb der Anwendung kommuniziert werden.\n\nWährend der Angebots-Genehmigungsphase kann die Option 'Persönlicher Assistent' ausgewählt werden, um das Erlebnis und die Zeit im Krankenhaus zu verbessern.\n\nNach Bewertung und Genehmigung des Angebots wird der Patient/Berater zur Zahlungsseite weitergeleitet, um die vom Krankenhaus festgelegte Gebühr zu bezahlen.",
"PGTitle7": "Zahlungseinzug für erhaltenes Serviceantwortangebot",
"PGDesciption7": "Die vom Krankenhaus für das erhaltene Serviceantwortangebot festgelegte Servicegebühr wird auf dieser Seite eingezogen.\n\nGeben Sie auf der Zahlungsoptionsseite Ihre Kreditkarteninformationen für die Zahlung ein. Wenn Ratenzahlungsoptionen verfügbar sind, können Sie die gewünschte Anzahl von Raten auswählen. Im Rahmen des 3D Secure-Verkaufsprozesses sendet Ihnen die Bank nach Abschluss der Zahlungsschritte und Klicken auf die Schaltfläche 'Angebot genehmigen' eine SMS und leitet Sie auf die Website weiter. Im nächsten Schritt lesen Sie das Vorvertragliche Informationsformular und die Fernabsatzvereinbarung durch und klicken auf die Option 'Ich habe das Vorvertragliche Informationsformular und die Fernabsatzvereinbarung gelesen und akzeptiert'. Es wird eine Online-Fernabsatzvereinbarung erstellt, in der die Zahlungsinformationen und der Gesamtbetrag als separate Positionen angezeigt werden.\n\nNach Annahme der Vereinbarungen klicken Sie auf die Schaltfläche 'Angebot genehmigen', um Ihre Bestellung abzuschließen und die Zahlung zu erleichtern.",
"PGTitle8": "Durchführung des Video-Termins",
"PGDesciption8": "Sobald die Zahlung erfolgt ist und der Video-Termin genehmigt wurde, können Sie von der Termindetails-Seite oder der Arzt-Patienten/Berater-Nachrichten-Seite aus durch Klicken auf die entsprechende Schaltfläche zur Video-Konsultationsseite gelangen. Diese Treffen können mit zwei oder drei Teilnehmern durchgeführt werden. Während des Treffens können Kamera und Mikrofon nach Belieben ein- und ausgeschaltet werden. Darüber hinaus können die Parteien bei Bedarf auch ohne Video kommunizieren.",
"PGTitle9": "Zugriff auf die Fernabsatzvereinbarung innerhalb der Anwendung",
"PGDesciption9": "Sie können auf die Fernabsatzvereinbarung zugreifen, indem Sie auf den entsprechenden Text oder das entsprechende Kontrollkästchen innerhalb der Zahlungsbildschirme klicken. Darüber hinaus können Sie www.klinikya.com besuchen, um zur entsprechenden Seite zu gelangen und den vollständigen Text einzusehen.",
"PGTitle10": "Datenschutzregeln für personenbezogene Daten und deren Zugriff in der Anwendung",
"PGDesciption10": "Sie können auf die Datenschutzregeln für personenbezogene Daten zugreifen, indem Sie auf den entsprechenden Text oder das entsprechende Kontrollkästchen innerhalb der Registrierungsbildschirme klicken. Darüber hinaus können Sie www.klinikya.com besuchen, um zur entsprechenden Seite zu gelangen und den vollständigen Text einzusehen.",
"PGTitle11": "Alternative Streitbeilegungsmechanismen im Streitfall",
"PGDesciption11": "Gemäß Artikel 68 Absatz 1 des Gesetzes zum Schutz des Verbrauchers Nr. 6502 sind Bezirks-/Provinz-Verbraucher-Schiedsstellen für Verbraucherforderungen innerhalb der festgelegten Grenzen zuständig."
    },
  },
  ar: {
    translation: {
      showAllProcedures: 'عرض كل العروض الصحية',
      logIn: 'تسجيل الدخول',
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
        'كلينيكيا تتيح لك العيادة الوصول إلى جميع احتياجات الرعاية الصحية الخاصة بك من خلال تطبيق واحد. اتصل بطبيبك والمستشفيات عبر الإنترنت ، واطلب عرضًا خاصًا ، واحصل على الوصفات الطبية عبر الإنترنت ، وقم بالوصول بسهولة إلى خدمات المختبر الطبية دون مغادرة منزلك.',
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
      "ProcessingGuide": "مرشد العمل",
"PGTitle1": "حجز موعد وجهاً لوجه",
"PGDesciption1": `
سيتم توجيهك إلى صفحة البحث حيث يمكنك البحث عن المستشفى أو القسم أو اسم الطبيب الذي ترغب في حجز موعد لديه. ستظهر نتائج مشابهة للبحث الذي تم إجراؤه.
بمجرد تحديد الطبيب المطلوب، يمكنك اختيار تاريخ ووقت الموعد. على الصفحة التالية، سيتم عرض ملخص الاختيار الذي تمت إجراؤه
بمجرد تأكيد الصفحة الملخصة، سيتم حجز موعدك في النظام وسيتم تحويله إلى آلية التأكيد من قبل الطبيب/المستشفى. بالإضافة إلى ذلك، سيتم نقل الموعد إلى صفحة "مواعيدي" الخاصة بك كمستخدم.
يرجى ملاحظة أن حجز المواعيد يخضع لموافقة الطبيب/المستشفى
`,
"PGTitle2": "موعد مرئي ( اتصال فيديو )عبر الإنترنت",
"PGDesciption2": `
عند اختيار خيار الموعد للمقابلة المرئية، سيتم توجيهك إلى صفحة البحث حيث يمكنك البحث عن المستشفى أو القسم أو اسم الطبيب الذي ترغب في حجز الموعد لديه. ستظهر نتائج مشابهة للبحث الذي تم إجراؤه.
بمجرد تحديد الطبيب المطلوب، يمكنك اختيار تاريخ ووقت الموعد. على الصفحة التالية، سيتم عرض ملخص الاختيار الذي تمت إجراؤه
بمجرد تأكيد الصفحة الملخصية، سيتم توجيه المستخدم إلى صفحة الدفع لدفع رسوم خدمة المحادثة المرئية.
يرجى ملاحظة أنه يجب على المستخدم دفع رسوم خدمة المحادثة المرئية بعد تأكيد الصفحة الملخصة
`,
"PGTitle3": "جمع رسوم خدمة الموعد عن بُعد",
"PGDesciption3": `
تُحصَل رسوم خدمة الموعد عن بُعد من قبل المستشفى أو الطبيب على هذه الصفحة
في شاشة خيارات الدفع، قم بملء معلومات بطاقة الائتمان الخاصة بك للدفع باستخدام بطاقة الائتمان. إذا تم توفير خيار التقسيط، يمكنك اختيار عدد الأقساط المطلوبة. ضمن إطار عمل البيع الآمن ثلاثي الأبعاد
، بمجرد استكمال مراحل الدفع والنقر على زر "حجز الموعد"، ستقوم البنك بإرسال رسالة نصية إليك وتوجيهك إلى موقع الويب. في الخطوة التالية، قم بقراءة نموذج المعلومات المسبقة وعقد البيع عن بُعد، وقم بالموافقة عليهما واختيار خيار "لقد قرأت نموذج المعلومات المسبقة وعقد البيع عن بُعد وأوافق عليهما". يتم إنشاء عقد البيع عن بُعد عبر الإنترنت ويظهر معلومات الدفع وإجمالي المبلغ بشكل مفصل.
بعد قبول العقود، يمكنك النقر على زر "حجز الموعد" لاستكمال الطلب وإتمام عملية الدفع

`,
"PGTitle4": "إنشاء عرض للاجراء",
"PGDesciption4": `يتم الوصول إلى صفحة إنشاء عرض الخدمة من خلال زر اخد عرض الموجود في الصفحة الرئيسية، أو عن طريق العروض الأخرى (الحزم الجاهزة) أو صفحة "عروضي". يمكن اختيار العرض الثاني أو العملية على هذه الصفحة. يتم ملء جميع الحقول ذات الصلة خطوة بخطوة وفقًا للعرض الذي ترغب في إنشائه. في المرحلة الأخيرة، يتم إنشاء عرض الخدمة عن طريق إدخال معلوماتك الخاصة بالأمراض التي تعاني منها والأدوية التي تتناولها.
يتم إرسال هذا العرض فقط إلى المستشفيات ذات الصلة وفقًا للعملية أو القسم الذي اخترته. تلك المعلومات التي أدخلتها صالحة لعرض الخدمة وسيُطلب منك إعادة إدخال تلك المعلومات في المواعيد والعروض الأخرى الخاصة بك
`,
"PGTitle5": "الرد على عرض الخدمة المتلقاة",
"PGDesciption5": `
سيتم إرسال عروض الخدمة التي يتم إرسالها من قبل المريض / المستشار فقط إلى المستشفيات ذات الصلة وفقًا لتفاصيل العرض. ولا يمكن للمؤسسات التي ترد على العرض أن ترى تفاصيل عروض بعضها البعض. يتم تنفيذ الرد على العرض بشكل سري بين المريض والمستشفى فقط.
يتم إدخال معلومات قسم العمل المنفذ لهذه العملية، والسعر، والتاريخ، والوصف المطابقة لعرض الخدمة. سيتم إعادة إرسال عرض الخدمة المتلقاة إلى المريض ليتم مراجعته والموافقة عليه

`,
"PGTitle6": "الموافقة على العرض المتلقى للخدمة",
"PGDesciption6": `
في مرحلة الموافقة على العرض المتلقى للخدمة، يمكن للمريض/المستشار والمستشفى التواصل والحصول على مزيد من المعلومات عن طريق الرسائل من خلال التطبيق، إذا رغبوا في ذلك، كجزء من العملية التي تتم بشكل سري بينهما.
في حال الرغبة في تحسين الوقت المقضى في المستشفى وتجربة المريض/المستشار بشكل أفضل في مرحلة الموافقة على العرض، يمكن اختيار خيار المساعد الشخصي.
بعد تقييم العرض والموافقة عليه، سيتم توجيه المريض/المستشار إلى صفحة الدفع لدفع المبلغ المحدد من قبل المستشفى

`,
"PGTitle7": "تحصيل مبلغ تكلفة الخدمة المحددة",
"PGDesciption7": `
بعد الموافقة على عرض الخدمة المتلقى، يتم تحصيل مبلغ تكلفة الخدمة المحددة من قبل المستشفى على هذه الصفحة.
عند الدفع بواسطة بطاقة الائتمان في شاشة خيارات الدفع، يرجى ملء معلومات بطاقة الائتمان الخاصة بك. إذا تم توفير خيار التقسيط، فيمكنك اختيار عدد الأقساط المطلوب.
في إطار عملية البيع الآمنة ثلاثية الأبعاد، بمجرد استكمال مراحل الدفع والنقر على زر "تأكيد العرض"، سترسل البنك إليك رسالة نصية وستوجه إلى موقع الويب. في المرحلة التالية، يجب عليك قراءة نموذج المعلومات الأولي وعقد البيع عن بُعد، والموافقة عليهما والنقر على الخيار "لقد قرأت نموذج المعلومات الأولي وعقد البيع عن بُعد وأوافق عليهما". يتم إنشاء عقد البيع عن بُعد عبر الإنترنت وتظهر معلومات الدفع والمبلغ الإجمالي على شكل بنود.
بعد قبول العقود، يمكنك النقر على زر "تأكيد العرض" لإتمام طلبك وإتمام الدفع

`,
"PGTitle8": "تنفيذ الموعد عبر المكالمة المرئية",
"PGDesciption8": `عندما يحين موعد المكالمة المرئية ويتم دفع الرسوم وتأكيد الحجز، يمكن للمستخدم فتح صفحة المكالمة المرئية عن طريق النقر على الزر المناسب في صفحة تفاصيل الموعد أو صفحة المراسلة بين الطبيب والمريض/المستشار. يمكن أن تكون المكالمة المرئية مع شخصين أو ثلاثة أشخاص. يمكن للأطراف إغلاق وفتح الكاميرا والميكروفون حسب الحاجة أثناء المكالمة. بالإضافة إلى ذلك، يمكن للأطراف تبادل المعلومات والنصوص والملفات خلال المكالمة المرئية، إذا رغبوا في ذلك`,
"PGTitle9": "يمكنك الوصول إلى عقد البيع عن بُعد داخل التطبيق باستخدام التعليمات التالية",
"PGDesciption9": `
في شاشة الدفع، قم بالنقر على النص أو المربع ذي الصلة. عادةً ما يكون هذا رابطًا مثل "نموذج المعلومات الأولي" أو "عقد البيع عن بُعد". عند النقر على هذا الرابط، ستتم إعادة توجيهك إلى عقد البيع عن بُعد
`,
"PGTitle10": "شروط الخصوصية المتعلقة بالبيانات الشخصية وكيفية الوصول إليها داخل التطبيق كما يلي",
"PGDesciption10": `
يمكنك الوصول إلى شروط الخصوصية المتعلقة بالبيانات الشخصية عن طريق النقر على النص أو المربع ذي الصلة داخل شاشات التسجيل. عادةً ما يكون هذا رابطًا مثل "سياسة الخصوصية" أو "بيان الخصوصية". عند النقر على هذا الرابط، ستتم إعادة توجيهك إلى صفحة شروط الخصوصية المتعلقة بالبيانات الشخصية.
بالإضافة إلى ذلك، يمكنك الوصول إلى النص الكامل لشروط الخصوصية المتعلقة بالبيانات الشخصية عن طريق زيارة www.klinikya.com والانتقال إلى الصفحة ذات الصلة.

`,
"PGTitle11": "عند حدوث تَعَارُض ، ما هي آليات تسوية التَعَارُض البديلة",
"PGDesciption11": `
وفقًا للمادة 68 من قانون حماية المستهلك رقم 6502، فإن لجان حكام المستهلك في المدينة أو المحافظة مخولة للنظر في مطالب المستهلك وفقًا للحدود الدنيا والعليا المحددة
`,
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
    fallbackLng: 'tr',
    keySeparator: false, // we do not use keys in form messages.welcome
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
