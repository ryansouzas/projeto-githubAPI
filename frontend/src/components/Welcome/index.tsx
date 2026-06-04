import { Link } from "react-router-dom";
import Button from "../Button";
import "./styles.css"

export default function HomePage() {
    return (
        <>
            <main>
                <div className="home-container">
                    <h1>Desafio GitHub API</h1>
                    <h3>DevSuperior - Escola de Programação</h3>
                </div>
                <Link to={"/before"}>
                    <Button text="Começar"/>
                </Link>
                
            </main>

        </>

    );
}