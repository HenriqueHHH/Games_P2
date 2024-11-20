"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import Pagina from "../Components/Page";

export default function Page() {
  const [usuarios, setUsuarios] = useState([]);

  // Carrega os dados do LocalStorage ao montar o componente
  useEffect(() => {
    setUsuarios(JSON.parse(localStorage.getItem("usuarios")) || []);
  }, []);

  // Função para excluir um registro
  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = usuarios.filter((item) => item.id != id);
      localStorage.setItem("usuarios", JSON.stringify(dados));
      setUsuarios(dados);
    }
  }

  return (
    <Pagina titulo="Usuários">
      <Link href="/usuario/form" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.nome}</td>
              <td>{item.telefone}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>
                <Link href={`/Cadastro/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger ms-2"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
