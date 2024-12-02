'use client';

import Pagina from "@/app/Components/Pagina";
import ValidatorPedido from "@/app/Validators/ValidatorPedido";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {
  const route = useRouter();

  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  const dados = pedidos.find((item) => item.id == params.id);
  const pedido = dados || { cliente: "", produto: "", quantidade: 1, preco: 0 };

  function salvar(dados) {
    if (pedido.id) {
      Object.assign(pedido, dados);
    } else {
      dados.id = v4();
      pedidos.push(dados);
    }

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    return route.push("/Pedidos");
  }

  return (
    <Pagina titulo="Pedido">
      <Formik
        initialValues={pedido}
        validationSchema={ValidatorPedido}
        onSubmit={(values) => salvar(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
          errors,
        }) => (
          <Form>
            <Form.Group className="mb-3" controlId="cliente">
              <Form.Label>Cliente</Form.Label>
              <Form.Control
                type="text"
                name="cliente"
                value={values.cliente}
                onChange={handleChange("cliente")}
                isInvalid={!!errors.cliente}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cliente}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="produto">
              <Form.Label>Produto</Form.Label>
              <Form.Control
                type="text"
                name="produto"
                value={values.produto}
                onChange={handleChange("produto")}
                isInvalid={!!errors.produto}
              />
              <Form.Control.Feedback type="invalid">
                {errors.produto}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="quantidade">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                type="number"
                name="quantidade"
                value={values.quantidade}
                onChange={handleChange("quantidade")}
                isInvalid={!!errors.quantidade}
              />
              <Form.Control.Feedback type="invalid">
                {errors.quantidade}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="preco">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                name="preco"
                value={values.preco}
                onChange={handleChange("preco")}
                isInvalid={!!errors.preco}
              />
              <Form.Control.Feedback type="invalid">
                {errors.preco}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link href="/Pedidos" className="btn btn-danger ms-2">
                <MdOutlineArrowBack /> Voltar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}
