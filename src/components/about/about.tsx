import { ArrowUpRight, BrainCircuit, Database, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

import './about.css';

const areas = [
  {
    number: '01',
    title: 'DATA ENGINEERING',
    description:
      'Construção de plataformas de dados, pipelines e processos ETL/ELT.',
    icon: Database,
  },
  {
    number: '02',
    title: 'BI & ANALYTICS',
    description:
      'Transformação de dados em indicadores, dashboards e informações para decisão.',
    icon: BrainCircuit,
  },
  {
    number: '03',
    title: 'AUTOMAÇÃO',
    description:
      'Automação de processos e desenvolvimento de soluções orientadas a dados.',
    icon: Workflow,
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className="about section"
    >
      <div className="container">

        {/* ====================================
            HEADER
        ==================================== */}

        <div className="about__header">

          <motion.div
            className="about__section-label"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span>
              02
            </span>

            <span>
              SOBRE
            </span>
          </motion.div>


          <motion.div
            className="about__intro"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <h2 className="about__title">
              Construindo soluções
              <span>
                a partir dos dados.
              </span>
            </h2>

            <p className="about__subtitle">
              Tecnologia, dados e automação para transformar
              problemas complexos em soluções práticas.
            </p>
          </motion.div>

        </div>


        {/* ====================================
            CONTENT
        ==================================== */}

        <div className="about__content">

          <motion.div
            className="about__text"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span className="about__eyebrow">
              QUEM SOU
            </span>

            <p>
              Sou <strong>Fillipe Gabriel</strong>, Analista de
              TIC Pleno com atuação em Engenharia de Dados,
              BI, automação de processos e desenvolvimento de
              soluções orientadas a dados.
            </p>

            <p>
              Atualmente atuo na construção de soluções de
              Engenharia de Dados utilizando Microsoft Fabric,
              Lakehouse, arquitetura Medallion, Spark, Python
              e SQL.
            </p>

            <p>
              Minha trajetória também inclui experiência em
              análise de dados, qualidade, melhoria contínua
              e liderança de equipes, conectando visão técnica
              e necessidades de negócio.
            </p>

            <button
              className="about__link"
              onClick={() =>
                document
                  .querySelector('#experiencia')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })
              }
            >
              VER EXPERIÊNCIA

              <ArrowUpRight size={16} />
            </button>

          </motion.div>


          {/* ====================================
              AREAS
          ==================================== */}

          <div className="about__areas">

            {areas.map((area, index) => {

              const Icon = area.icon;

              return (
                <motion.div
                  key={area.number}
                  className="about__area"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >

                  <div className="about__area-top">

                    <span className="about__area-number">
                      {area.number}
                    </span>

                    <Icon
                      size={19}
                      strokeWidth={1.5}
                    />

                  </div>

                  <h3>
                    {area.title}
                  </h3>

                  <p>
                    {area.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>


        {/* ====================================
            BOTTOM LINE
        ==================================== */}

        <motion.div
          className="about__bottom"
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        />

      </div>
    </section>
  );
}