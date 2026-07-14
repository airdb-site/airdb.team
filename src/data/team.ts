export type Domain = {
  id: string;
  label: string;
  en: string;
  seats: number; // 首批开放的目标席位（诚实的小数字，非既有规模）
  weight: number; // 能力条宽度权重 0-100，代表首批投入优先级
  core?: boolean;
};

export type Founder = {
  kind: "founder";
  name: string;
  company: string;
  role: string;
  field: string;
  place: string;
  focus: string;
  portrait: string;
  handle: string;
  motto: string;
  tags: string[];
  terminal: { cmd: string; out: string }[];
};

export type Opening = {
  kind: "opening";
  seat: string; // 招募的角色
  field: string;
  place: string; // 期望所在地/远程
  focus: string; // 方向
  status: string; // 招募状态
};

export type Entry = Founder | Opening;

export const domains: Domain[] = [
  { id: "ai", label: "人工智能", en: "AI & INTELLIGENCE", seats: 4, weight: 92, core: true },
  { id: "bio", label: "生物科技", en: "BIOTECH", seats: 3, weight: 74, core: true },
  { id: "aero", label: "航空航天", en: "AEROSPACE", seats: 2, weight: 66, core: true },
  { id: "ocean", label: "航海科技", en: "OCEAN SYSTEMS", seats: 2, weight: 58, core: true },
  { id: "materials", label: "先进材料", en: "MATERIALS", seats: 3, weight: 70, core: true },
  { id: "health", label: "医疗健康", en: "MEDTECH", seats: 3, weight: 78, core: true },
  { id: "robotics", label: "机器人", en: "ROBOTICS", seats: 0, weight: 0 },
  { id: "quantum", label: "量子计算", en: "QUANTUM", seats: 0, weight: 0 },
  { id: "semiconductor", label: "半导体", en: "SEMICONDUCTORS", seats: 0, weight: 0 },
  { id: "energy", label: "清洁能源", en: "CLEAN ENERGY", seats: 0, weight: 0 },
  { id: "fusion", label: "核聚变", en: "FUSION", seats: 0, weight: 0 },
  { id: "neuro", label: "神经科技", en: "NEUROTECH", seats: 0, weight: 0 },
  { id: "agri", label: "农业科技", en: "AGRITECH", seats: 0, weight: 0 },
  { id: "security", label: "网络安全", en: "CYBERSECURITY", seats: 0, weight: 0 },
  { id: "space", label: "空间资源", en: "SPACE RESOURCES", seats: 0, weight: 0 },
  { id: "geo", label: "地理空间", en: "GEOSPATIAL", seats: 0, weight: 0 },
  { id: "design", label: "工业设计", en: "INDUSTRIAL DESIGN", seats: 0, weight: 0 },
  { id: "climate", label: "气候科技", en: "CLIMATE TECH", seats: 0, weight: 0 },
];

export const founder: Founder = {
  kind: "founder",
  name: "阿正_Dean",
  company: "AIRDB",
  role: "Founder · 全栈黑客",
  field: "security",
  place: "未知节点 · Everywhere",
  focus: "网络安全 · AI 系统 · 基础设施",
  portrait: "p0",
  handle: "root@airdb",
  motto: "以键盘为剑，守护而非破坏。",
  tags: ["红客精神", "极客", "白帽", "开源", "全栈"],
  terminal: [
    { cmd: "whoami", out: "dean — founder / builder / red-team mind" },
    { cmd: "cat /etc/motto", out: "把不可能，当成待办事项。" },
    { cmd: "uptime", out: "building AIRDB since day 0 — never down" },
  ],
};

// 首批开放的招募位 — 真实的空位，不是虚构的成员。
export const openings: Opening[] = [
  { kind: "opening", seat: "AI 系统研究员", field: "ai", place: "远程 / 全球", focus: "多模态智能 · 自主系统", status: "招募中" },
  { kind: "opening", seat: "生物科技创始人", field: "bio", place: "远程 / 全球", focus: "合成生物 · 精准诊断", status: "招募中" },
  { kind: "opening", seat: "航空航天工程师", field: "aero", place: "远程 / 全球", focus: "新型推进 · 飞行器制造", status: "招募中" },
  { kind: "opening", seat: "海洋机器人专家", field: "ocean", place: "远程 / 全球", focus: "水下机器人 · 海洋观测", status: "招募中" },
  { kind: "opening", seat: "先进材料科学家", field: "materials", place: "远程 / 全球", focus: "超材料 · 先进制造", status: "招募中" },
  { kind: "opening", seat: "数字医疗创始人", field: "health", place: "远程 / 全球", focus: "数字医疗 · 临床智能", status: "招募中" },
];

export const entries: Entry[] = [founder, ...openings];

export const capabilities = domains.filter((domain) => domain.core);

// 诚实的规模叙事：1 位创始人已就位，首批开放席位，规划领域。
export const totalSeats = domains.reduce((sum, domain) => sum + domain.seats, 0);
export const openDomainIds = new Set(
  entries.map((entry) => entry.field),
);
