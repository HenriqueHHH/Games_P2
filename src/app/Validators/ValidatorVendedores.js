import * as Yup from "yup";

const ValidatorVendedores = Yup.object().shape({
  nome: Yup.string()
    .required("Campo obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: Yup.string()
    .required("Campo obrigatório")
    .email("Formato de email inválido"),
  telefone: Yup.string()
    .required("Campo obrigatório")
});

export default ValidatorVendedores;
