import Button from "../Button";
import "./styles.css"

export default function BeforePage(){
    return(
     
            <div className="app-card-container">
                <div >
                    <h1>Enconte um perfil no Github</h1>
                    <input type="text" placeholder="Usuário GitHub"/>
                    <Button text="Encontrar"/>
                </div>
            </div>
       
    );
}