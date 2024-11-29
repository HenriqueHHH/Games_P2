import { LuUserSquare } from "react-icons/lu";
import { CgGames } from "react-icons/cg";
import { TbCategoryFilled } from "react-icons/tb";
import { BsBasket } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

export default function Home() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Games Net</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Gerenciamento Games Net
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <a href="/Usuario" style={linkStyle}>
            <LuUserSquare style={iconStyle} />
            Usuário
          </a>
          <a href="/Jogos" style={linkStyle}>
            <CgGames style={iconStyle} />
            Jogos
          </a>
          <a href="/Categoria" style={linkStyle}>
            <TbCategoryFilled style={iconStyle} />
            Categoria
          </a>
          <a href="/Pedidos" style={linkStyle}>
            <BsBasket style={iconStyle} />
            Pedidos
          </a>
          <a href="/Vendedores" style={linkStyle}>
            <FaUserTie style={iconStyle} />
            Vendedores
          </a>
        </div>
      </div>
      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#555" }}>
      </footer>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh", // Altura total da viewport
  fontFamily: "Arial, sans-serif",
};

const contentStyle = {
  textAlign: "center",
  maxWidth: "700px", // Limita a largura do conteúdo
  border: "3px solid #0070f3", // Margem azul fina ao redor
  borderRadius: "8px", // Bordas arredondadas
  padding: "1rem", // Espaçamento interno menor
};

const linkStyle = {
  textDecoration: "none",
  color: "#0070f3",
  fontSize: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  transition: "color 0.2s ease-in-out",
};

const iconStyle = {
  fontSize: "2.5rem",
  color: "#0070f3",
};



