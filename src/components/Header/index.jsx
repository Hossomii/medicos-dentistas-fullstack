import s from "./index.module.scss"
import { Link } from "react-router-dom"
import iconCoracao from "../../assets/icon-coracao.png"

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        <img src={iconCoracao} alt="Ícone de coração" />
        <h2>Médicos & Dentistas</h2>
      </div>

      <nav className={s.nav}>
        <Link to="/" className={s.btnDefault}>Home</Link>
        <Link to="/voluntario" className={s.btnVerde}>Seja Voluntário</Link>
      </nav>
    </header>
  )
}

export default Header