import { Link } from "react-router-dom";
import Button from "../Button";
import "./styles.css"

export default function SearchCard(){
    return(
     
            <div className="app-card-container search-card-container">
                    <h1>Enconte um perfil no Github</h1>
                    <input type="text" placeholder="Usuário GitHub"/>
                    <Link to={"/after"}>
                        <Button text="Encontrar"/>
                    </Link>
                    
            </div>
       
    );
}