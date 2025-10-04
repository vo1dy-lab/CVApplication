import "../styles/Header.css";
import { FaIdBadge } from "react-icons/fa";
import Container from "./Container";

function Header() {
  return (
    <header>
      <Container>
        <div className="logo-header">
          <FaIdBadge className="logo-icon" />
          <h2>ResumeBuilder</h2>
        </div>
      </Container>
    </header>
  );
}

export default Header;
