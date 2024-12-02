'use client'

import Pagina from "@/app/Components/Pagina";
import ValidatorVendedores from "@/app/Validators/ValidatorVendedores";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { mask } from "remask";
import { v4 } from "uuid";

export default function Page({ params }) {
  const route = useRouter();

  const vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];
  const dados = vendedores.find(item => item.id === params.id);
  const vendedor = dados || { nome: '', email: '', telefone: '' };

  function salvar(dados) {
    let atualizados = [...vendedores];

    if (vendedor.id) {
      // Atualiza o registro existente
      atualizados = vendedores.map(item =>
        item.id === vendedor.id ? { ...item, ...dados } : item
      );
    } else {
      // Adiciona um novo registro
      dados.id = v4();
      atualizados.push(dados);
    }

    localStorage.setItem('vendedores', JSON.stringify(atualizados));
    return route.push('/Vendedores');
  }

  return (
    <Pagina titulo="Vendedores">
      <Formik
        initialValues={vendedor}
        validationSchema={ValidatorVendedores}
        onSubmit={values => salvar(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
          errors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange('nome')}
                isInvalid={!!errors.nome}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nome}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange('email')}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="telefone"
                value={values.telefone}
                onChange={(value) => { setFieldValue('telefone', mask(value.target.value, '(99) 99999-9999')) }}
                isInvalid={!!errors.telefone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefone}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link
                href="/Vendedores"
                className="btn btn-danger ms-2"
              >
                <MdOutlineArrowBack /> Voltar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}


