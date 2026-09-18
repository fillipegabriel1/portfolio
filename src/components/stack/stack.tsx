import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { stackItems } from './stackData';

import './stack.css';

export function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="stack__container">

        <motion.div
          className="stack__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="stack__label">
            05 STACK
          </span>

          <h2>
            Ferramentas para
            <br />
            <span>construir soluções.</span>
          </h2>

          <p>
            Tecnologias que utilizo no desenvolvimento de soluções
            envolvendo dados, BI, automação e desenvolvimento.
          </p>
        </motion.div>

        <div className="stack__grid">
          {stackItems.map((item, index) => (
            <motion.article
              key={item.name}
              className="stack__card"
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
                margin: '-60px',
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
            >
              <div className="stack__card-top">
                <span className="stack__number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <ArrowUpRight
                  className="stack__icon"
                  size={18}
                />
              </div>

              <div className="stack__category">
                {item.category}
              </div>

              <h3>
                {item.name}
              </h3>

              <p>
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}