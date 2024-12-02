"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../Components/Pagina";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    setPedidos(JSON.parse(localStorage.getItem("pedidos")) || []);
  }, []);

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = pedidos.filter((item) => item.id !== id);
      localStorage.setItem("pedidos", JSON.stringify(dados));
      setPedidos(dados);
    }
  }

  return (
    <Pagina titulo="Pedidos">
      <Link href="/Pedidos/form" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={`/Pedidos/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.cliente}</td>
              <td>{item.produto}</td>
              <td>{item.quantidade}</td>
              <td>R$ {(item.quantidade * item.preco).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
