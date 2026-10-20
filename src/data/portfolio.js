import {
  SiSpringboot,
  SiApachekafka,
  SiRedis,
  SiMysql,
  SiMongodb,
  SiReact,
  SiRedux,
  SiFlutter,
  SiDocker,
  SiGit,
} from 'react-icons/si';
import { PiTreeStructure } from 'react-icons/pi';
import {
  FaJava,
  FaAws,
} from 'react-icons/fa';

import {
  TbBrandOpenai,
} from 'react-icons/tb';
// export const technologies = [
//   { name: 'Java', group: 'Backend', mark: 'J' },
//   { name: 'Spring Boot', group: 'Backend', mark: 'S' },
//   { name: 'Kafka', group: 'Messaging', mark: 'K' },
//   { name: 'Redis', group: 'Cache / Data', mark: 'Rd' },
//   { name: 'MySQL', group: 'Database', mark: 'SQL' },

//   { name: 'MongoDB', group: 'Database', mark: 'M' },
//   { name: 'Spring AI', group: 'AI', mark: 'AI' },
//   { name: 'OpenAI', group: 'AI', mark: '◌' },
//   { name: 'Pinecone', group: 'Vector DB', mark: 'P' },
//   { name: 'AWS', group: 'Cloud', mark: 'AWS' },

//   { name: 'React', group: 'Frontend', mark: 'R' },
//   { name: 'Redux', group: 'Frontend', mark: 'Rx' },
//   { name: 'Flutter', group: 'Mobile', mark: 'F' },
//   { name: 'Docker', group: 'DevOps', mark: 'D' },
//   { name: 'Git', group: 'Version Control', mark: 'G' },
// ];

export const technologies = [
  { name: 'Java', group: 'Backend', icon: FaJava },
  { name: 'Spring Boot', group: 'Backend', icon: SiSpringboot },
  { name: 'Kafka', group: 'Messaging', icon: SiApachekafka },
  { name: 'Redis', group: 'Cache / Data', icon: SiRedis },
  { name: 'MySQL', group: 'Database', icon: SiMysql },

  { name: 'MongoDB', group: 'Database', icon: SiMongodb },
  { name: 'Spring AI', group: 'AI', icon: SiSpringboot },
  { name: 'OpenAI', group: 'AI', icon: TbBrandOpenai },
  { name: 'Pinecone', group: 'Vector DB', icon: PiTreeStructure },
  { name: 'AWS', group: 'Cloud', icon: FaAws },

  { name: 'React', group: 'Frontend', icon: SiReact },
  { name: 'Redux', group: 'Frontend', icon: SiRedux },
  { name: 'Flutter', group: 'Mobile', icon: SiFlutter },
  { name: 'Docker', group: 'DevOps', icon: SiDocker },
  { name: 'Git', group: 'Version Control', icon: SiGit },
];
export const projects = [
  {
    id: 1,
    title: 'MaintAI',
    eyebrow: 'FLAGSHIP PRODUCT',
    category: 'AI',
    description:
      'An AI-powered industrial troubleshooting platform designed to turn manuals, machine context and technician feedback into faster, more useful maintenance guidance.',
    detail:
      'Built around a Java/Spring backend with RAG-oriented knowledge retrieval, feedback approval workflows and a roadmap for OCR + vision-assisted diagnosis.',
    tags: ['Spring Boot', 'Spring AI', 'OpenAI', 'Pinecone', 'MongoDB', 'AWS', 'Flutter'],
    featured: true,
  },
  {
    id: 2,
    title: 'Banking Chargeback Platform',
    eyebrow: 'ENTERPRISE ENGINEERING',
    category: 'Backend',
    description:
      'Work on chargeback-related banking workflows with a focus on reliable enterprise services, operational correctness and maintainable backend systems.',
    detail:
      'A large-scale banking environment where clean APIs, controlled workflows and production reliability matter more than flashy demos.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'Enterprise'],
  },
  {
    id: 3,
    title: 'Trading Strategy Backtester',
    eyebrow: 'JAVA SYSTEM',
    category: 'Backend',
    description:
      'A Java-based backtesting engine for validating trading ideas against historical market data instead of relying on intuition alone.',
    detail:
      'Models entries, exits, stop losses, targets, fees and slippage, then reports win rate, profit factor, drawdown and other strategy metrics.',
    tags: ['Java', 'Backtesting', 'Data', 'Strategy Engine'],
  },
  {
    id: 4,
    title: 'AI Engineering Lab',
    eyebrow: 'EXPERIMENTS',
    category: 'AI',
    description:
      'A growing collection of experiments around LLM applications, embeddings, retrieval, tool use and agentic workflows using the Java ecosystem.',
    detail:
      'The goal is to understand the mechanics behind modern AI systems and then apply the useful pieces to real products.',
    tags: ['Spring AI', 'RAG', 'Embeddings', 'Agents', 'Java'],
  },
];
