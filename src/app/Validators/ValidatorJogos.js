import * as Yup from "yup";

const ValidatorJogos = Yup.object().shape({
  nome: Yup.string()
    .required("Campo obrigatório")
    .min(3, "O mínimo de caracteres é 3!"),
  preco: Yup.number()
    .required("Campo obrigatório")
    .min(0.01, "O preço deve ser maior que 0"),
  categoria: Yup.string()
    .required("Campo obrigatório")
    .min(3, "A categoria deve ter pelo menos 3 caracteres"),
});

export default ValidatorJogos;
