import s from "./index.module.scss"

const InfoCard = ({ titulo, descricao, variant = "green" }) => {
  const cardClass = `${s.card} ${s[variant]}`

  return (
    <article className={cardClass}>
      <h3 className={s.title}>{titulo}</h3>
      <p className={s.description}>{descricao}</p>
    </article>
  )
}

export default InfoCard