'use client'

import Pagina from "@/app/Components/Pagina";
import ValidatorCategoria from "@/app/Validators/ValidatorCategoria";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {
  const route = useRouter();

  const categorias = JSON.parse(localStorage.getItem('categorias')) || [];
  const dados = categorias.find(item => item.id == params.id);
  const categoria = dados || { nome: '', descricao: '' };

  function salvar(dados) {
    if (categoria.id) {
      Object.assign(categoria, dados);
    } else {
      dados.id = v4();
      categorias.push(dados);
    }

    localStorage.setItem('categorias', JSON.stringify(categorias));
    return route.push('/Categoria');
  }

  return (
    <Pagina titulo="Categoria">
      <Formik
        initialValues={categoria}
        validationSchema={ValidatorCategoria}
        onSubmit={values => salvar(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
        }) => (
          <Form>
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
            <Form.Group className="mb-3" controlId="descricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handleChange('descricao')}
                isInvalid={!!errors.descricao}
              />
              <Form.Control.Feedback type="invalid">
                {errors.descricao}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link
                href="/Categoria"
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
