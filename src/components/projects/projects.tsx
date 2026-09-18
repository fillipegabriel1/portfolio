import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { projects } from './projectsData';

import './projects.css';

export function Projects() {
  return (
    <section id="projetos" className="projects">
      <div className="projects__container">

        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects__label">
            04 PROJETOS
          </span>

          <h2>
            Transformando
            <br />
            <span>dados em soluções.</span>
          </h2>

          <p>
            Alguns projetos e soluções desenvolvidos envolvendo
            dados, tecnologia, BI e automação.
          </p>
        </motion.div>

        <div className="projects__grid">

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="projects__card"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-80px',
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >

              <div className="projects__card-top">
                <span className="projects__number">
                  {project.number}
                </span>

                <span className="projects__category">
                  {project.category}
                </span>
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="projects__technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="projects__footer">

                <span>
                  VER PROJETO
                </span>

                <div className="projects__arrow">
                  <ArrowUpRight size={18} />
                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}