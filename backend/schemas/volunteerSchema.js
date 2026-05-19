const { z } = require("zod");

const volunteerSchema = z.object({
  name: z.string().min(3, "Nome precisa ter no mínimo 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Telefone inválido"),
  message: z.string().min(10, "Mensagem precisa ter no mínimo 10 caracteres")
});

module.exports = {
  volunteerSchema
};