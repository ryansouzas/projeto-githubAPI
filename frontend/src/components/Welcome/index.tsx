import Button from "../Button";
import "./styles.css";

export default function HomePage() {
    return (
        <>
            <main>
                <div className="home-container">
                    <h1>Desafio GitHub API</h1>
                    <h3>DevSuperior - Escola de Programação</h3>
                </div>
                <Button
                    text="Começar"
                    to="/before"
                />
                
            </main>

        </>

    );
}