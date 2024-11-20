'use client';

import Pagina from "@/app/Components/Page";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { mask } from "remask";
import { v4 } from "uuid";
import * as Yup from "yup";

// Validador com Yup
const CadastroValidator = Yup.object().shape({
  nome: Yup.string().required("O campo Nome é obrigatório."),
  telefone: Yup.string()
    .min(14, "Digite um telefone válido.")
    .required("O campo Telefone é obrigatório."),
  cpf: Yup.string()
    .min(14, "Digite um CPF válido.")
    .required("O campo CPF é obrigatório."),
  email: Yup.string()
    .email("Digite um email válido.")
    .required("O campo Email é obrigatório."),
});

export default function Page({ params }) {
  const router = useRouter();

  const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
  const dados = cadastros.find((item) => item.id == params?.id);
  const cadastro = dados || { nome: "", telefone: "", cpf: "", email: "" };

  function salvar(dados) {
    if (cadastro.id) {
      const index = cadastros.findIndex((item) => item.id === cadastro.id);
      cadastros[index] = dados;
    } else {
      dados.id = v4();
      cadastros.push(dados);
    }

    localStorage.setItem("cadastros", JSON.stringify(cadastros));
    router.push("/cadastro");
  }

  return (
    <Pagina titulo="Cadastro">
      <Formik
        initialValues={cadastro}
        validationSchema={CadastroValidator}
        onSubmit={(values) => salvar(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange("nome")}
                isInvalid={touched.nome && errors.nome}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nome}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="telefone"
                value={values.telefone}
                onChange={(e) => {
                  setFieldValue(
                    "telefone",
                    mask(e.target.value, ["(99) 9999-9999", "(99) 9 9999-9999"])
                  );
                }}
                isInvalid={touched.telefone && errors.telefone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="cpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                name="cpf"
                value={values.cpf}
                onChange={(e) => {
                  setFieldValue("cpf", mask(e.target.value, "999.999.999-99"));
                }}
                isInvalid={touched.cpf && errors.cpf}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cpf}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange("email")}
                isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="text-center">
              <Button type="submit" variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link href="/cadastro" className="btn btn-danger ms-2">
                <MdOutlineArrowBack /> Voltar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}
