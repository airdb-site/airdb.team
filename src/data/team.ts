export type Domain = {
  id: string;
  label: string;
  en: string;
  count: number;
  core?: boolean;
};

export type Member = {
  name: string;
  company: string;
  role: string;
  field: string;
  place: string;
  focus: string;
  portrait: string;
  founder?: boolean;
  handle?: string;
  motto?: string;
  tags?: string[];
  terminal?: { cmd: string; out: string }[];
};

export const domains: Domain[] = [
  { id: "ai", label: "人工智能", en: "AI & INTELLIGENCE", count: 42, core: true },
  { id: "bio", label: "生物科技", en: "BIOTECH", count: 21, core: true },
  { id: "aero", label: "航空航天", en: "AEROSPACE", count: 18, core: true },
  { id: "ocean", label: "航海科技", en: "OCEAN SYSTEMS", count: 14, core: true },
  { id: "materials", label: "先进材料", en: "MATERIALS", count: 17, core: true },
  { id: "health", label: "医疗健康", en: "MEDTECH", count: 23, core: true },
  { id: "robotics", label: "机器人", en: "ROBOTICS", count: 16 },
  { id: "quantum", label: "量子计算", en: "QUANTUM", count: 8 },
  { id: "semiconductor", label: "半导体", en: "SEMICONDUCTORS", count: 11 },
  { id: "energy", label: "清洁能源", en: "CLEAN ENERGY", count: 15 },
  { id: "fusion", label: "核聚变", en: "FUSION", count: 6 },
  { id: "neuro", label: "神经科技", en: "NEUROTECH", count: 9 },
  { id: "agri", label: "农业科技", en: "AGRITECH", count: 12 },
  { id: "security", label: "网络安全", en: "CYBERSECURITY", count: 19 },
  { id: "space", label: "空间资源", en: "SPACE RESOURCES", count: 7 },
  { id: "geo", label: "地理空间", en: "GEOSPATIAL", count: 13 },
  { id: "design", label: "工业设计", en: "INDUSTRIAL DESIGN", count: 10 },
  { id: "climate", label: "气候科技", en: "CLIMATE TECH", count: 14 },
];

export const founder: Member = {
  name: "阿正_Dean",
  company: "AIRDB",
  role: "Founder · 全栈黑客",
  field: "security",
  place: "未知节点 · Everywhere",
  focus: "网络安全 · AI 系统 · 基础设施",
  portrait: "p0",
  founder: true,
  handle: "root@airdb",
  motto: "以键盘为剑，守护而非破坏。",
  tags: ["红客精神", "极客", "白帽", "开源", "全栈"],
  terminal: [
    { cmd: "whoami", out: "dean — founder / builder / red-team mind" },
    { cmd: "cat /etc/motto", out: "把不可能，当成待办事项。" },
    { cmd: "uptime", out: "building AIRDB since day 0 — never down" },
  ],
};

export const members: Member[] = [
  founder,
  { name: "林澄", company: "VECTOR INTELLIGENCE", role: "AI Systems Researcher", field: "ai", place: "Singapore", focus: "多模态智能 · 自主系统", portrait: "p1" },
  { name: "Arjun Mehta", company: "ORBITAL FOUNDRY", role: "Aerospace Engineer", field: "aero", place: "Bengaluru", focus: "新型推进 · 飞行器制造", portrait: "p2" },
  { name: "Amara Okafor", company: "HELIX ONE", role: "Biotech Founder", field: "bio", place: "Boston", focus: "合成生物 · 精准诊断", portrait: "p3" },
  { name: "Elias North", company: "PELAGIC SYSTEMS", role: "Marine Roboticist", field: "ocean", place: "Oslo", focus: "水下机器人 · 海洋观测", portrait: "p4" },
  { name: "王恺", company: "LATTICE MATTER", role: "Materials Scientist", field: "materials", place: "Shanghai", focus: "超材料 · 先进制造", portrait: "p5" },
  { name: "Noor Al-Sayed", company: "CLINICA NEXT", role: "MedTech Founder", field: "health", place: "Dubai", focus: "数字医疗 · 临床智能", portrait: "p6" },
];

export const capabilities = domains.filter((domain) => domain.core);
