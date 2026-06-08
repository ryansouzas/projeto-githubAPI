import { useState } from "react";
import Button from "../Button";
import "./styles.css";

export default function SearchCard() {

    const [username, setUsername] = useState("");

    return (

        <div className="app-container search-card-container">

            <div className="search-card-content">
                <h1>Encontre um perfil no Github</h1>
                <input
                    type="text"
                    placeholder="Usuário GitHub"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <Button
                text="Encontrar"
                to={`/after/${username}`}
            />
        </div>

    );
}