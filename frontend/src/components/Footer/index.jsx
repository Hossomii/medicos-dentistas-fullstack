import { Link } from "react-router-dom"
import s from "./index.module.scss"

import iconCoracao from "../../assets/icon-coracao.png"
import email from "../../assets/email.png"
import phone from "../../assets/phone.png"
import localizacao from "../../assets/localizacao.png"

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <div className={s.footerColumn1}>
          <div className={s.column1IconH2}>
            <img src={iconCoracao} alt="Ícone de coração" />
            <h2>Médicos & Dentistas</h2>
          </div>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        <div className={s.footerColumn2}>
          <h3>Contato</h3>

          <div className={s.column2Icon}>
            <img src={email} alt="Ícone de email" />
            <p>contato@medico-dentista.org</p>
          </div>

          <div className={s.column2Icon}>
            <img src={phone} alt="Ícone de telefone" />
            <p>(11) 3000-0000</p>
          </div>

          <div className={s.column2Icon}>
            <img src={localizacao} alt="Ícone de localização" />
            <p>São Paulo, Brasil</p>
          </div>
        </div>

        <nav className={s.column3Links}>
          <h3>Redes Sociais</h3>
          <div>
            <Link to="/" className={s.linkFooter}>Facebook</Link>
            <Link to="/" className={s.linkFooter}>Instagram</Link>
            <Link to="/" className={s.linkFooter}>LinkedIn</Link>
          </div>
        </nav>
      </div>

      <p className={s.pFooter}>
        &copy; 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer