import { Link } from "react-router-dom";
import Container from "../Containner";

import styles from "../Navbar/Navbar.module.css";
//Importar logo

function Navbar(){
    return(
        <div className="{styles.navbar}">
            <Container>
                <Link to="/">
                    <img src="logo" alt="logo" />
                </Link>
                <ul className="{styles.list}">
                    <li className="{styles.item}">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="{styles.item}">
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className="{styles.item}">
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className="{styles.item}">
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </div>
    );
}

export default Navbar;