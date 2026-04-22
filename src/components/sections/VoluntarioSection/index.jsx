import s from "./index.module.scss"
import FormVoluntario from "@/components/ui/FormVoluntario"
import InfoCard from "@/components/ui/InfoCard"

const VoluntarioSection = () => {
  return (
    <main>
      <section className={s.cardsSection}>
        <div className={s.cardsDiv}>
          <h1 className={s.cardsTituloSection}>Seja Voluntário</h1>
          <p className={s.cardsDescricaoSection}>
            Junte-se a nós e faça a diferença na vida de pessoas que precisam
          </p>

          <div className={s.cards}>
            <InfoCard
              variant="voluntario"
              titulo="Impacto Direto"
              descricao="Sua dedicação salva vidas e transforma comunidades"
            />
            <InfoCard
              variant="voluntario"
              titulo="Crescimento Pessoal"
              descricao="Desenvolva habilidades e cresça profissionalmente"
            />
            <InfoCard
              variant="voluntario"
              titulo="Comunidade"
              descricao="Faça parte de uma rede de profissionais comprometidos"
            />
          </div>
        </div>
      </section>

      <section className={s.formSection}>
        <div className={s.formContainer}>
          <FormVoluntario />
        </div>
      </section>
    </main>
  )
}

export default VoluntarioSection