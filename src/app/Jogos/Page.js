"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../Components/Pagina";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    setJogos(JSON.parse(localStorage.getItem("jogos")) || []);
  }, []);

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = jogos.filter((item) => item.id !== id);
      localStorage.setItem("jogos", JSON.stringify(dados));
      setJogos(dados);
    }
  }

  return (
    <Pagina titulo="Jogos">
      <Link href="/Jogos/form" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {jogos.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={`/Jogos/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.nome}</td>
              <td>R$ {item.preco.toFixed(2)}</td>
              <td>{item.categoria}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
