import api from "@/services/api";
import { useState } from "react";
import s from "./index.module.scss";
import checkIcon from "@/assets/check-mark.png";

const FormVoluntario = () => {
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.target);

    const volunteerData = {
      name: formData.get("firstName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      await api.post("/volunteers", volunteerData);
      setEnviado(true);
      e.target.reset();
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Erro ao enviar inscrição"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.formVoluntarioContainer}>
      {enviado ? (
        <div className={s.mensagemEnviada}>
          <img src={checkIcon} alt="Ícone de cadastro bem-sucedido" />
          <p>
            Cadastro realizado com sucesso. Entraremos em contato para mais
            informações.
          </p>
        </div>
      ) : (
        <>
          <div className={s.formTitleContainer}>
            <h2 className={s.formTitle}>Inscrição para Voluntários</h2>
          </div>

          <form className={s.formVoluntario} onSubmit={handleSubmit}>
            <fieldset className={s.fieldset}>
              <legend className={s.legend}>Dados Pessoais</legend>

              <div className={s.inputsLine1Container}>
                <div className={s.inputWrapper}>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Seu Nome *"
                    pattern="^[A-Za-zÀ-ÿ\s]{2,}$"
                    title="Digite apenas letras, mínimo 2 caracteres."
                  />
                </div>

                <div className={s.inputWrapper}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Seu Email *"
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title="Digite um e-mail válido"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className={s.inputsLine2}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Seu telefone *"
                  pattern="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$"
                  title="Digite um telefone válido"
                  autoComplete="tel"
                />
              </div>
            </fieldset>

            <div className={s.messageContainer}>
              <label htmlFor="message" className={s.legend}>
                Mensagem Adicional
              </label>

              <textarea
                id="message"
                name="message"
                rows="10"
                required
                placeholder="Conte-nos porque você quer ser voluntário..."
              />
            </div>

            <p className={s.infoText}>
              Entraremos em contato para mais informações
            </p>

            {errorMessage && (
              <p className={s.errorMessage}>{errorMessage}</p>
            )}

            <button
              type="submit"
              className={s.submitButton}
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Inscrição"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default FormVoluntario;