"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../Components/Pagina";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
    setVendedores(JSON.parse(localStorage.getItem("vendedores")) || []);
  }, []);

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = vendedores.filter((item) => item.id !== id);
      localStorage.setItem("vendedores", JSON.stringify(dados));
      setVendedores(dados);
    }
  }

  return (
    <Pagina titulo="Vendedores">
      <Link href="/Vendedores/form" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {vendedores.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={`/Vendedores/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
