export interface StackItem {
  name: string;
  category: string;
  description: string;
}

export const stackItems: StackItem[] = [
  {
    name: 'Python',
    category: 'DATA & AUTOMATION',
    description:
      'Desenvolvimento de soluções, automações, tratamento de dados e processos ETL.',
  },
  {
    name: 'SQL',
    category: 'DATA',
    description:
      'Consultas, transformação, análise e modelagem de dados.',
  },
  {
    name: 'Power BI',
    category: 'BI & ANALYTICS',
    description:
      'Dashboards, indicadores, modelagem semântica e análise de dados.',
  },
  {
    name: 'Microsoft Fabric',
    category: 'DATA PLATFORM',
    description:
      'Lakehouse, pipelines, notebooks, Dataflows e arquitetura de dados.',
  },
  {
    name: 'Spark',
    category: 'DATA ENGINEERING',
    description:
      'Processamento e transformação de grandes volumes de dados.',
  },
  {
    name: 'DAX',
    category: 'BI & ANALYTICS',
    description:
      'Criação de medidas, indicadores e cálculos para modelos semânticos.',
  },
  {
    name: 'Power Query',
    category: 'DATA TRANSFORMATION',
    description:
      'Tratamento, limpeza e transformação de dados.',
  },
  {
    name: 'JavaScript',
    category: 'DEVELOPMENT',
    description:
      'Desenvolvimento de aplicações e automações.',
  },
  {
    name: 'TypeScript',
    category: 'DEVELOPMENT',
    description:
      'Desenvolvimento de aplicações web com código tipado e escalável.',
  },
  {
    name: 'React',
    category: 'FRONT-END',
    description:
      'Desenvolvimento de interfaces e aplicações web.',
  },
  {
    name: 'Node.js',
    category: 'BACK-END',
    description:
      'Desenvolvimento de APIs, integrações e aplicações back-end.',
  },
  {
    name: 'Git',
    category: 'TOOLS',
    description:
      'Versionamento e organização de projetos de software.',
  },
];