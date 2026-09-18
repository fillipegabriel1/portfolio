export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  location: string;
  role: string;
  type: string;
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'unifacisa',
    period: 'JUN 2026 — ATUAL',
    company: 'UNIFACISA',
    location: 'Campina Grande, PB',
    role: 'Analista de TIC Pleno',
    type: 'ATUAL',
    description:
      'Atuação com Engenharia de Dados, automação, BI e Inteligência Artificial, desenvolvendo soluções para transformar dados em informação e processos mais eficientes.',
    highlights: [
      'Engenharia e tratamento de dados',
      'Microsoft Fabric e Lakehouse',
      'Pipelines ETL/ELT',
      'Spark, Python e SQL',
      'Power BI e automações',
      'Inteligência Artificial',
    ],
  },

  {
    id: 'aec-coordenador',
    period: '2026',
    company: 'AeC',
    location: 'Campina Grande, PB',
    role: 'Coordenador de Qualidade e Dados Júnior',
    type: 'LIDERANÇA',
    description:
      'Atuação na liderança das áreas de Qualidade, Dados e Melhoria Contínua, acompanhando indicadores e desenvolvendo soluções para diferentes operações.',
    highlights: [
      'Gestão de Qualidade',
      'Gestão de Dados',
      'Melhoria Contínua',
      'Power BI',
      'SQL e Python',
      'Mais de 20 segmentos',
    ],
  },

  {
    id: 'aec-analista-pleno',
    period: '2025 — 2026',
    company: 'AeC',
    location: 'Campina Grande, PB',
    role: 'Analista de Dados Pleno',
    type: 'DADOS',
    description:
      'Atuação com análise de dados, indicadores de qualidade e desenvolvimento de soluções para suporte à tomada de decisão.',
    highlights: [
      'Análise de dados',
      'Indicadores de qualidade',
      'Dashboards em Power BI',
      'Relatórios gerenciais',
      'Gestão de indicadores',
    ],
  },

  {
    id: 'aec-analista-junior',
    period: '2022 — 2025',
    company: 'AeC',
    location: 'Campina Grande, PB',
    role: 'Analista de Dados Júnior',
    type: 'DADOS',
    description:
      'Atuação com dados, relatórios, indicadores e suporte às áreas internas através de informações para acompanhamento de desempenho.',
    highlights: [
      'Análise de dados',
      'Criação de relatórios',
      'Power BI',
      'Indicadores de desempenho',
      'Tratamento de dados',
    ],
  },
];