import { activeFields, type DirectoryEntry } from './directory.ts';

export const fields = [
  { id: 'ai', label: '人工智能' },
  { id: 'security', label: '网络安全' },
  { id: 'infrastructure', label: '基础设施' },
  { id: 'blockchain', label: '区块链' },
  { id: 'computing', label: '计算机科学' },
] as const;

export interface Person extends DirectoryEntry {
  id: string;
  portrait?: string;
  portraitNote: string;
  quote: string;
  principles: { title: string; text: string }[];
}

export const dean: Person = {
  id: 'dean',
  fields: ['ai', 'security', 'infrastructure'],
  projects: [
    { title: 'AirDB Hong Kong', summary: '数字金融、跨境贸易与 Agent 支付技术探索', href: 'https://airdb.hk/' },
    { title: 'AirDB', summary: '数据平台与 API 的产品探索', href: 'https://airdb.io/' },
  ],
  name: '阿正_Dean',
  role: 'Founder · 独立构建者',
  handle: 'root@airdb',
  portrait: '/images/team/dean-editorial-v1.png',
  portraitNote: 'AI 艺术形象 · 根据个人技术气质创作',
  quote: '把不可能，当成待办事项。',
  description: '从网络安全到 AI 系统，从一行代码到一个产品。喜欢深入系统的底层，也愿意把想法变成可以被使用的东西。',
  tags: ['网络安全', 'AI 系统', '基础设施', '开源', '独立创造'],
  principles: [
    { title: '保持好奇', text: '遇到一个问题，先追问它为什么存在，再动手寻找更好的解法。' },
    { title: '亲手构建', text: '让想法走出笔记，进入代码、产品与持续迭代的日常。' },
    { title: '愿意分享', text: '把独立判断带进协作，也为别人的专业与创造留出空间。' },
  ],
};
export const explorations = [
  { id: '01', title: 'AI 与基础设施', subtitle: 'BUILD THE FOUNDATION', text: '关注智能体、数据与系统工程，探索让技术真正进入日常工作的方法。', href: 'https://airdb.io/', label: '访问 AirDB 产品站' },
  { id: '02', title: '可编程支付', subtitle: 'CONNECT THE NEXT ECONOMY', text: '从跨境贸易到 Agent 支付，研究授权、支付编排与对账如何连接。', href: 'https://airdb.hk/', label: '了解香港站的探索' },
  { id: '03', title: '独立与连接', subtitle: 'INDEPENDENT, TOGETHER', text: '保持个体的独立与鲜明，探索创造者围绕具体问题相互连接的方式。', href: 'https://airdb.group/', label: '了解 AirDB Group' },
];

// Add confirmed members here. One person may appear under multiple fields.
export const bumu: Person = {
  id: 'bumu',
  name: 'bumu',
  role: '计算机专家 · 骨灰级电脑玩家',
  handle: '',
  portrait: '/images/team/bumu-editorial-v1.png',
  portraitNote: 'AI 艺术形象 · 根据人物描述创作',
  quote: '下班，关机',
  description: '拥有 30 年计算机使用经验的骨灰级电脑玩家，以通用计算机技术能力与知识，进行跨学科的深度研究。',
  fields: ['computing'],
  tags: ['30 年计算机使用经验', '通用计算机技术', '跨学科深度研究'],
  principles: [],
  projects: [],
};

export const aoke: Person = {
  id: 'aoke',
  name: 'aoke',
  role: 'AI 算法工程师 · 区块链专家',
  handle: '',
  portrait: '/images/team/aoke-editorial-v1.png',
  portraitNote: 'AI 艺术形象 · 根据人物描述创作',
  quote: '搞钱，搞钱，创造更高的价值',
  description: 'AI 算法工程师，曾就职于字节跳动。同时深耕区块链技术，能够构建可信联盟链，让多方协作建立在可信的技术基础之上。',
  fields: ['ai', 'blockchain'],
  tags: ['AI 算法', '区块链', '可信联盟链'],
  principles: [],
  projects: [],
};

export const people: Person[] = [dean, bumu, aoke];
const ids = new Set<string>();
for (const person of people) {
  if (!/^[a-z][a-z0-9-]*$/.test(person.id) || ids.has(person.id)) throw new Error(`Invalid or duplicate person ID: ${person.id}`);
  ids.add(person.id);
  if (person.fields.some(id => !fields.some(field => field.id === id))) throw new Error(`Unknown field for ${person.id}`);
}
export const directoryFields = activeFields(fields, people);
