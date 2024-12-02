"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../Components/Pagina";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    setCategorias(JSON.parse(localStorage.getItem("categorias")) || []);
  }, []);

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = categorias.filter((item) => item.id !== id);
      localStorage.setItem("categorias", JSON.stringify(dados));
      setCategorias(dados);
    }
  }

  return (
    <Pagina titulo="Categorias">
      <Link href="/Categoria/form" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={`/Categoria/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
