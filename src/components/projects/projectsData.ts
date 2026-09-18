export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'control-tower',
    number: '01',
    title: 'Control Tower',
    category: 'DATA & MONITORING',
    description:
      'Plataforma de monitoramento para acompanhamento de pipelines, notebooks, execuções e processos de dados no Microsoft Fabric.',
    technologies: [
      'Microsoft Fabric',
      'Spark',
      'Python',
      'SQL',
      'Power BI',
    ],
  },

  {
    id: 'data-platform',
    number: '02',
    title: 'Data Platform',
    category: 'DATA ENGINEERING',
    description:
      'Arquitetura de dados baseada em Lakehouse e arquitetura Medallion para ingestão, tratamento, governança e disponibilização de dados.',
    technologies: [
      'Microsoft Fabric',
      'Lakehouse',
      'Spark',
      'Python',
      'SQL',
    ],
  },

  {
    id: 'bi-analytics',
    number: '03',
    title: 'BI & Analytics',
    category: 'BUSINESS INTELLIGENCE',
    description:
      'Soluções de Business Intelligence para transformar dados operacionais em indicadores e informações para tomada de decisão.',
    technologies: [
      'Power BI',
      'DAX',
      'Power Query',
      'SQL',
      'Excel',
    ],
  },

  {
    id: 'automation',
    number: '04',
    title: 'Process Automation',
    category: 'AUTOMAÇÃO',
    description:
      'Automação de processos utilizando integração de dados, scripts e ferramentas de desenvolvimento para reduzir atividades manuais.',
    technologies: [
      'Python',
      'SQL',
      'APIs',
      'Power Automate',
      'JavaScript',
    ],
  },
];