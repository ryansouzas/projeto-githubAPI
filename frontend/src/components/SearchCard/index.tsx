import Button from "../Button";
import "./styles.css";

export default function SearchCard() {
    return (

        <div className="app-container search-card-container">

            <div className="search-card-content">
                <h1>Enconte um perfil no Github</h1>
                <input type="text" placeholder="Usuário GitHub" />
            </div>

            <Button
                text="Encontrar"
                to="/after"
            />
        </div>

    );
}