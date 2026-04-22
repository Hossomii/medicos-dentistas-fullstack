import s from './index.module.scss'
import { Link } from 'react-router-dom'

import iconeSaude from '@/assets/icon-saude.png'
import imgMedico from '@/assets/foto-medico.png'

import InfoCard from '@/components/ui/InfoCard'

const HomeSection = () => {
  return (
    <main>
      <section className={s.mainBannerContainer}>
        <div className={s.mainSection}>
          <div className={s.mainDiv}>
            <div className={s.saudeTodosContainer}>
              <div className={s.btnSaudeTodos}>
                <img src={iconeSaude} alt="Ícone de saúde" />
                <p>Saúde para todos</p>
              </div>
            </div>

            <div className={s.texts}>
              <h1>Saúde e cuidado sem barreiras</h1>
              <p>
                Um projeto dedicado a oferecer atendimento médico e odontológico gratuito
                para pessoas que mais precisam na nossa comunidade.
              </p>
            </div>

            <div className={s.btnContainer}>
              <Link to="/voluntario" className={s.btnVerde}>
                Seja Voluntário
              </Link>

              <Link to="/voluntario" className={s.btnComoAjudar}>
                Como Ajudar
              </Link>
            </div>
          </div>

          <article>
            <img src={imgMedico} alt="Médico sorrindo" />
          </article>
        </div>
      </section>

      <section className={s.cardsSection}>
        <div className={s.cardsDiv}>
          <h2 className={s.cardsTituloSection}>Nossa Missão</h2>
          <p className={s.cardsDescricaoSection}>
            Transformar vidas através do acesso universal à saúde de qualidade
          </p>

          <div className={s.cards}>
            <InfoCard
              variant="green"
              titulo="Acesso Equitativo"
              descricao="Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira."
            />
            <InfoCard
              variant="green"
              titulo="Comunidade Forte"
              descricao="Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo."
            />
            <InfoCard
              variant="green"
              titulo="Bem-Estar Total"
              descricao="Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida."
            />
          </div>
        </div>
      </section>

      <section className={s.cardsSection2}>
        <div className={s.cardsDiv2}>
          <h2 className={s.cardsTituloSection2}>Nosso Impacto</h2>
          <p className={s.cardsDescricaoSection2}>
            Transformando a saúde da comunidade, um paciente de cada vez
          </p>

          <div className={s.cards2}>
            <InfoCard variant="white" titulo="2,500+" descricao="Pessoas Atendidas" />
            <InfoCard variant="white" titulo="150+" descricao="Profissionais Voluntários" />
            <InfoCard variant="white" titulo="98%" descricao="Satisfação dos Pacientes" />
            <InfoCard variant="white" titulo="5+" descricao="Anos de Dedicação" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomeSection