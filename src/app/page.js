import { LuUserSquare } from "react-icons/lu";
import { CgGames } from "react-icons/cg";
import { TbCategoryFilled } from "react-icons/tb";
import { BsBasket } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

export default function Home() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Games Net</h1>
        <p style={subtitleStyle}>Gerenciamento Games Net</p>

        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <a href="/usuario" style={linkStyle}>
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
  height: "100vh", 
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#000", 
  color: "#fff", 
};

const contentStyle = {
  textAlign: "center",
  maxWidth: "700px", 
  border: "3px solid #0070f3", 
  borderRadius: "8px", 
  padding: "1rem", 
};

const titleStyle = {
  fontSize: "2.5rem",
  marginBottom: "1.5rem",
  color: "#fff", 
};

const subtitleStyle = {
  fontSize: "1.2rem",
  marginBottom: "2rem",
  color: "#fff", 
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




