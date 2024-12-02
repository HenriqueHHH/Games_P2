import * as Yup from "yup";

const ValidatorCategoria = Yup.object().shape({
    nome: Yup.string()
        .required('Campo obrigatório')
        .min(3, 'O mínimo de caracteres é 3!'),
    descricao: Yup.string()
        .required('Campo obrigatório')
        .min(10, 'A descrição deve ter pelo menos 10 caracteres'),
});

export default ValidatorCategoria;
