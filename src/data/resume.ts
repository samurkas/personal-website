export interface ResumeEntry {
  titleTr: string;
  titleEn: string;
  organizationTr: string;
  organizationEn: string;
  dateTr: string;
  dateEn: string;
  descriptionTr: string;
  descriptionEn: string;
}

export const experience: ResumeEntry[] = [
  {
    titleTr: "Otonom Sistemler Geliştiricisi",
    titleEn: "Autonomous Systems Developer",
    organizationTr: "EVRENOS Takımı",
    organizationEn: "EVRENOS Team",
    dateTr: "2025 - Devam ediyor",
    dateEn: "2025 - Present",
    descriptionTr:
      "ROS 2 tabanlı otonom navigasyon mimarisi geliştirme. YOLO ve TensorFlow ile engel tanıma, rota planlama. PyQt ile yer istasyonu kontrol arayüzü ve TCP/IP haberleşme sistemi.",
    descriptionEn:
      "Developing ROS 2-based autonomous navigation architecture. Obstacle detection and route planning with YOLO and TensorFlow. Ground station control interface with PyQt and TCP/IP communication system.",
  },
  {
    titleTr: "Bağımsız Geliştirici",
    titleEn: "Independent Developer",
    organizationTr: "Yazılım ve Mobil Oyun Geliştiricisi",
    organizationEn: "Software & Mobile Game Developer",
    dateTr: "2025 - Devam ediyor",
    dateEn: "2025 - Present",
    descriptionTr:
      "C# ile masaüstü otomasyon yazılımları ve veritabanı entegreli uygulamalar. Çok oyunculu mobil oyun geliştirme ve Google Play yayınlama.",
    descriptionEn:
      "Desktop automation software and database-integrated applications with C#. Multiplayer mobile game development and Google Play publishing.",
  },
  {
    titleTr: "Pres Operatörü",
    titleEn: "Press Operator",
    organizationTr: "Ferkan Yedek Parça A.Ş.",
    organizationEn: "Ferkan Spare Parts Inc.",
    dateTr: "2022",
    dateEn: "2022",
    descriptionTr:
      "Endüstriyel üretim süreçlerinde pres makinesi operasyonu.",
    descriptionEn:
      "Press machine operation in industrial manufacturing processes.",
  },
];

export const education: ResumeEntry[] = [
  {
    titleTr: "Bilgisayar Mühendisliği (%30 İngilizce)",
    titleEn: "B.Sc. Computer Engineering (30% English)",
    organizationTr: "Karabük Üniversitesi",
    organizationEn: "Karabuk University",
    dateTr: "2022 - Devam ediyor",
    dateEn: "2022 - Present",
    descriptionTr:
      "Yazılım mühendisliği, algoritmalar, veri yapıları, veritabanı sistemleri, bilgisayar ağları ve otonom sistemler üzerine eğitim.",
    descriptionEn:
      "Software engineering, algorithms, data structures, database systems, computer networks, and autonomous systems.",
  },
];

export interface AwardEntry {
  titleTr: string;
  titleEn: string;
  organizationTr: string;
  organizationEn: string;
  dateTr: string;
  dateEn: string;
}

export const awards: AwardEntry[] = [
  {
    titleTr: "Türkiye 5.'liği (İKA)",
    titleEn: "5th Place in Turkey (UGV)",
    organizationTr: "Teknofest",
    organizationEn: "Teknofest",
    dateTr: "2025",
    dateEn: "2025",
  },
  {
    titleTr: "Finalist (İHA)",
    titleEn: "Finalist (UAV)",
    organizationTr: "Teknofest",
    organizationEn: "Teknofest",
    dateTr: "2025",
    dateEn: "2025",
  },
  {
    titleTr: "Auto-Nav Kategorisi Resmi Kabulü",
    titleEn: "Auto-Nav Category Official Acceptance",
    organizationTr: "IGVC Amerika",
    organizationEn: "IGVC USA",
    dateTr: "2026",
    dateEn: "2026",
  },
];

export interface VolunteerEntry {
  titleTr: string;
  titleEn: string;
  organizationTr: string;
  organizationEn: string;
  dateTr: string;
  dateEn: string;
  descriptionTr: string;
  descriptionEn: string;
}

export const volunteer: VolunteerEntry[] = [
  {
    titleTr: "Saha Gönüllüsü",
    titleEn: "Field Volunteer",
    organizationTr: "Damla Gönüllülük Hareketi - Gençlik ve Spor Bakanlığı",
    organizationEn: "Damla Volunteer Movement - Ministry of Youth and Sports",
    dateTr: "Ağustos 2022",
    dateEn: "August 2022",
    descriptionTr: "Gümüşhane'de saha gönüllülüğü çalışmaları.",
    descriptionEn: "Field volunteer activities in Gümüşhane.",
  },
  {
    titleTr: "Proje Katılımcısı",
    titleEn: "Project Participant",
    organizationTr: "SİYAMDER & Erasmus+ - \"Geleceğin Yolu\" Projesi",
    organizationEn: "SIYAMDER & Erasmus+ - \"Path of the Future\" Project",
    dateTr: "Eylül 2023",
    dateEn: "September 2023",
    descriptionTr: "Muş'ta Erasmus+ kapsamında \"Geleceğin Yolu\" projesine katılım. Youthpass Sertifikası.",
    descriptionEn: "Participation in the \"Path of the Future\" project under Erasmus+ in Muş. Youthpass Certificate.",
  },
  {
    titleTr: "Aktif Gönüllü",
    titleEn: "Active Volunteer",
    organizationTr: "AFAD & Türk Kızılayı",
    organizationEn: "AFAD & Turkish Red Crescent",
    dateTr: "Devam ediyor",
    dateEn: "Ongoing",
    descriptionTr: "Saha organizasyonu ve sosyal destek operasyonları.",
    descriptionEn: "Field organization and social support operations.",
  },
];

export interface CertificationEntry {
  titleTr: string;
  titleEn: string;
  dateTr: string;
  dateEn: string;
}

export const certifications: CertificationEntry[] = [
  {
    titleTr: "Endüstriyel Otomasyon ve PLC Programlama (TIA Portal)",
    titleEn: "Industrial Automation and PLC Programming (TIA Portal)",
    dateTr: "2026",
    dateEn: "2026",
  },
  {
    titleTr: "Universiti Utara Malaysia (UUM) Seminer Katılımı",
    titleEn: "Universiti Utara Malaysia (UUM) Seminar Participation",
    dateTr: "",
    dateEn: "",
  },
];
