import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

import { contactData } from './contactData';

import './contact.css';

export function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact__container">

        {/* CONTEÚDO PRINCIPAL */}
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="contact__label">
            06 CONTATO
          </span>

          <h2>
            Vamos criar algo
            <br />
            <span>juntos?</span>
          </h2>

          <p>
            Estou aberto a novos projetos, oportunidades e
            conversas sobre tecnologia, dados, automação e
            desenvolvimento de soluções.
          </p>

          <a
            href={`mailto:${contactData.email}`}
            className="contact__email"
          >
            <Mail size={18} />

            <span>
              {contactData.email}
            </span>

            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* LINKS */}
        <motion.div
          className="contact__links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >

          {/* LINKEDIN */}
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <div className="contact__link-icon contact__link-icon--linkedin">
              in
            </div>

            <div className="contact__link-info">
              <span>LINKEDIN</span>

              <strong>
                Conecte-se comigo
              </strong>
            </div>

            <ArrowUpRight size={18} />
          </a>

          {/* GITHUB */}
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <div className="contact__link-icon contact__link-icon--github">
              GH
            </div>

            <div className="contact__link-info">
              <span>GITHUB</span>

              <strong>
                Veja meus projetos
              </strong>
            </div>

            <ArrowUpRight size={18} />
          </a>

        </motion.div>

        {/* FOOTER */}
        <div className="contact__footer">
          <span>
            FILLIPE GABRIEL
          </span>

          <span>
            DATA • AUTOMATION • TECHNOLOGY
          </span>

          <span>
            2026
          </span>
        </div>

      </div>
    </section>
  );
}