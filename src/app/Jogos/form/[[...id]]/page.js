'use client'

import Pagina from "@/app/Components/Pagina";
import ValidatorJogos from "@/app/Validators/ValidatorJogos";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {
  const route = useRouter();

  const jogos = JSON.parse(localStorage.getItem('jogos')) || [];
  const dados = jogos.find(item => item.id == params.id);
  const jogo = dados || { nome: '', preco: '', categoria: '' };

  function salvar(dados) {
    if (jogo.id) {
      Object.assign(jogo, dados);
    } else {
      dados.id = v4();
      jogos.push(dados);
    }

    localStorage.setItem('jogos', JSON.stringify(jogos));
    return route.push('/Jogos');
  }

  return (
    <Pagina titulo="Jogos">
      <Formik
        initialValues={jogo}
        validationSchema={ValidatorJogos}
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
            <Form.Group className="mb-3" controlId="preco">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                name="preco"
                value={values.preco}
                onChange={handleChange('preco')}
                isInvalid={!!errors.preco}
              />
              <Form.Control.Feedback type="invalid">
                {errors.preco}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="categoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                name="categoria"
                value={values.categoria}
                onChange={handleChange('categoria')}
                isInvalid={!!errors.categoria}
              />
              <Form.Control.Feedback type="invalid">
                {errors.categoria}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link
                href="/Jogos"
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
