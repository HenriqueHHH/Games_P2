import * as Yup from "yup";

const ValidatorPedido = Yup.object().shape({
  cliente: Yup.string()
    .required("O nome do cliente é obrigatório")
    .min(3, "O nome deve ter no mínimo 3 caracteres"),
  produto: Yup.string()
    .required("O nome do produto é obrigatório")
    .min(2, "O nome do produto deve ter no mínimo 2 caracteres"),
  quantidade: Yup.number()
    .required("A quantidade é obrigatória")
    .min(1, "A quantidade mínima é 1"),
  preco: Yup.number()
    .required("O preço é obrigatório")
    .min(0.01, "O preço deve ser maior que zero"),
});

export default ValidatorPedido;
