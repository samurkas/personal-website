export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  key: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "autonomous",
    skills: [
      { name: "ROS 2", icon: "🤖" },
      { name: "Otonom Hareket Planlama", icon: "🧭" },
      { name: "Sensör Entegrasyonu", icon: "📡" },
      { name: "Telemetri", icon: "📊" },
    ],
  },
  {
    key: "ai",
    skills: [
      { name: "YOLO", icon: "👁️" },
      { name: "PyTorch", icon: "🔥" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "Nesne Tespiti", icon: "🎯" },
    ],
  },
  {
    key: "languages",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "C#", icon: "#️⃣" },
      { name: "Java", icon: "☕" },
      { name: "8086 Assembly", icon: "⚙️" },
    ],
  },
  {
    key: "software",
    skills: [
      { name: "PyQt", icon: "🖥️" },
      { name: "Visual Studio", icon: "💻" },
      { name: "Masaüstü Otomasyon", icon: "🔧" },
      { name: "Ağ Programlama", icon: "🌐" },
    ],
  },
  {
    key: "systems",
    skills: [
      { name: "Linux (Ubuntu)", icon: "🐧" },
      { name: "Raspberry Pi", icon: "🍓" },
      { name: "TCP/IP Haberleşme", icon: "🔗" },
      { name: "TIA Portal (Siemens)", icon: "🏭" },
    ],
  },
];
