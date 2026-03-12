export interface Project {
  slug: string;
  titleTr: string;
  titleEn: string;
  descriptionTr: string;
  descriptionEn: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    slug: "evrenos-ika",
    titleTr: "EVRENOS Otonom Kara Aracı (İKA) Yazılımı",
    titleEn: "EVRENOS Unmanned Ground Vehicle (UGV) Software",
    descriptionTr:
      "Teknofest ve IGVC Auto-Nav yarışmaları için ROS 2 tabanlı otonom navigasyon mimarisi. Python, YOLO ve TensorFlow ile otonom hareket, engel tanıma ve rota planlama.",
    descriptionEn:
      "ROS 2-based autonomous navigation architecture for Teknofest and IGVC Auto-Nav competitions. Autonomous movement, obstacle detection, and route planning with Python, YOLO, and TensorFlow.",
    technologies: ["ROS 2", "Python", "YOLO", "TensorFlow", "Teknofest"],
    github: "https://github.com/samurkas",
    featured: true,
    category: "robotics",
  },
  {
    slug: "evrenos-control-station",
    titleTr: "Otonom Araç Kontrol Arayüzü ve Haberleşme Sistemi (EVRENOS)",
    titleEn: "UGV Control Interface & Communication System (EVRENOS)",
    descriptionTr:
      "İKA ile yer istasyonu arasında çift yönlü veri aktarımını sağlayan TCP/IP tabanlı haberleşme ağı ve PyQt kullanılarak geliştirilmiş özel kullanıcı arayüzü (UI).",
    descriptionEn:
      "TCP/IP-based bidirectional communication network between the UGV and ground station, with a custom user interface (UI) developed using PyQt.",
    technologies: ["PyQt", "TCP/IP", "Network Programming", "UI/UX"],
    github: "https://github.com/samurkas/UGV-control-station",
    featured: true,
    category: "robotics",
  },
  {
    slug: "rent-a-car",
    titleTr: "Samurkaş Rent A Car",
    titleEn: "Samurkas Rent A Car",
    descriptionTr:
      "C# ve Visual Studio kullanılarak sıfırdan geliştirilen, araç kiralama şirketlerinin günlük operasyonlarını dijitalleştiren kapsamlı veritabanı entegreli masaüstü otomasyonu.",
    descriptionEn:
      "A comprehensive desktop automation with database integration, built from scratch using C# and Visual Studio, digitalizing daily operations of car rental companies.",
    technologies: ["C#", "Visual Studio", "Desktop App", "Database"],
    github: "https://github.com/samurkas/Rent_a_Car_Otomasyon",
    featured: true,
    category: "desktop",
  },
  {
    slug: "mind-arena",
    titleTr: "Çok Oyunculu Mobil Trivia Oyunu",
    titleEn: "Multiplayer Mobile Trivia Game",
    descriptionTr:
      "Gerçek zamanlı çok oyunculu (multiplayer) altyapıya sahip, sunucu eşleştirmeli rekabetçi mobil bilgi yarışması.",
    descriptionEn:
      "A competitive mobile trivia game with real-time multiplayer infrastructure and server-based matchmaking.",
    technologies: ["Multiplayer", "Mobile Game", "Network", "Google Play"],
    github: "https://github.com/samurkas/Mind-Arena-",
    featured: true,
    category: "game",
  },
];
