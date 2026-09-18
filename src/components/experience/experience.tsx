import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

import { experiences } from './experienceData';

import './experience.css';

export function Experience() {
  return (
    <section id="experiencia" className="experience">
      <div className="experience__container">

        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="experience__label">
            03 EXPERIÊNCIA
          </span>

          <h2>
            Uma trajetória
            <br />
            <span>orientada por dados.</span>
          </h2>

          <p>
            Experiências construídas entre dados, tecnologia,
            automação, qualidade e melhoria contínua.
          </p>
        </motion.div>

        <div className="experience__timeline">

          <div className="experience__line" />

          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              className={
                index % 2 === 0
                  ? 'experience__item experience__item--left'
                  : 'experience__item experience__item--right'
              }
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
                margin: '-100px',
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              <div className="experience__node">
                <span />
              </div>

              <div className="experience__card">

                <div className="experience__top">
                  <span className="experience__period">
                    {experience.period}
                  </span>

                  <span className="experience__type">
                    {experience.type}
                  </span>
                </div>

                <div className="experience__company">
                  {experience.company}
                </div>

                <h3>
                  {experience.role}
                </h3>

                <div className="experience__location">
                  <MapPin size={14} />
                  <span>{experience.location}</span>
                </div>

                <p className="experience__description">
                  {experience.description}
                </p>

                <div className="experience__highlights">
                  {experience.highlights.map((highlight) => (
                    <span key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="experience__arrow">
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