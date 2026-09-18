import {
  ArrowDown,
  ArrowUpRight,
  Database,
  Workflow,
} from 'lucide-react';

import { motion } from 'framer-motion';

import heroPhoto from '../../assets/herophoto.jpg';

import './hero.css';

export function Hero() {
  function scrollToProjects() {
    document
      .querySelector('#projetos')
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  }

  return (
    <section
      id="inicio"
      className="hero"
    >
      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="hero__background">
        <div className="hero__grid" />
        <div className="hero__dots" />
        <div className="hero__glow" />
      </div>

      {/* ========================================
          MAIN CONTAINER
      ======================================== */}

      <div className="hero__container container">

        {/* ======================================
            LEFT CONTENT
        ====================================== */}

        <div className="hero__main">

          {/* STATUS */}

          <motion.div
            className="hero__eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span className="hero__status" />

            DISPONÍVEL PARA NOVOS DESAFIOS
          </motion.div>


          {/* ====================================
              TITLE
          ==================================== */}

          <motion.h1
            className="hero__title"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span>
              Engenharia de
            </span>

            <span>
              <strong>
                Dados.
              </strong>
            </span>

            <span>
              Automação que
            </span>

            <span>
              <strong>
                evolui.
              </strong>
            </span>
          </motion.h1>


          {/* ====================================
              DESCRIPTION
          ==================================== */}

          <motion.p
            className="hero__description"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
          >
            Sou <strong>Fillipe Gabriel</strong>, Analista
            de TIC Pleno especializado em Engenharia de
            Dados, BI, automação de processos e
            desenvolvimento de soluções orientadas a dados.
          </motion.p>


          {/* ====================================
              ACTIONS
          ==================================== */}

          <motion.div
            className="hero__actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >

            <button
              className="hero__primary-button"
              onClick={scrollToProjects}
            >
              <Database size={18} />

              <span>
                Explorar projetos
              </span>

              <ArrowUpRight size={17} />
            </button>


            <a
              href="https://github.com/fillipegabriel1"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__secondary-button"
            >
              <span>
                GitHub
              </span>

              <ArrowUpRight size={17} />
            </a>

          </motion.div>


          {/* ====================================
              STATS
          ==================================== */}

          <motion.div
            className="hero__stats"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
          >

            <div className="hero__stat">

              <strong>
                +5
              </strong>

              <span>
                ANOS DE EXPERIÊNCIA
              </span>

            </div>


            <div className="hero__stat">

              <strong>
                20+
              </strong>

              <span>
                SEGMENTOS
              </span>

            </div>


            <div className="hero__stat">

              <strong>
                FABRIC
              </strong>

              <span>
                DATA PLATFORM
              </span>

            </div>

          </motion.div>

        </div>


        {/* ======================================
            RIGHT VISUAL
        ====================================== */}

        <motion.div
          className="hero__visual"
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          {/* ====================================
              ORBIT
          ==================================== */}

          <div
            className="
              hero__orbit
              hero__orbit--outer
            "
          />

          <div
            className="
              hero__orbit
              hero__orbit--inner
            "
          />


          {/* ====================================
              PHOTO
          ==================================== */}

          <div className="hero__photo-frame">

            <div className="hero__photo">

              <img
                src={heroPhoto}
                alt="Fillipe Gabriel"
                className="hero__photo-image"
              />

              <div className="hero__photo-overlay" />

            </div>

          </div>


          {/* ====================================
              TOP TAG
          ==================================== */}

          <motion.div
            className="
              hero__tag
              hero__tag--top
            "
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Database size={16} />

            <span>
              <small>
                01
              </small>

              DATA
            </span>

          </motion.div>


          {/* ====================================
              BOTTOM TAG
          ==================================== */}

          <motion.div
            className="
              hero__tag
              hero__tag--bottom
            "
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >

            <Workflow size={16} />

            <span>
              <small>
                02
              </small>

              AUTOMATION
            </span>

          </motion.div>

        </motion.div>

      </div>


      {/* ========================================
          HERO FOOTER
      ======================================== */}

      <div className="hero__footer">

        <div className="hero__scroll">

          <ArrowDown size={15} />

          <span>
            SCROLL TO EXPLORE
          </span>

        </div>


        <span className="hero__section-number">
          01
        </span>

      </div>

    </section>
  );
}