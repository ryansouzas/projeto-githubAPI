import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { UserDTO } from "../../models/User";
import "./styles.css";

export default function ProfileCard() {

    const { username } = useParams();
    const [userData, setUserData] = useState<UserDTO | undefined>();
    const navigate = useNavigate();


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);
                setUserData(response.data);
            } catch (error) {
                navigate("/after/NotFound", { replace: true });
                console.log("Erro ao buscar usuário:", error);
            }
        };

        if (username) {
            fetchUser();
        } else {
            navigate("/after/NotFound", { replace: true });
        }
    }, [username, navigate]);


    return (
        <>
            <div className="profile-card">

                <div className="profile-card-info">

                    <div className="profile-card_img">
                        <img src={userData?.avatar_url} alt={userData?.name} />
                    </div>

                    <div className="profile-card_content">
                        <h2 className="profile-card_title ">
                            Informações
                        </h2>

                        <ul className="profile-card_info-list">
                            <li className="profile-card_info-item">
                                <span>Perfil:</span>
                                <a href={userData?.html_url} target="_blank" >{userData?.html_url}
                                </a>
                            </li>
                            <li className="profile-card_info-item">
                                <span>Seguidores:</span>
                                <span>{userData?.followers}</span>
                            </li>
                            <li className="profile-card_info-item">
                                <span>Localidade:</span>
                                <span>{userData?.location}</span>
                            </li>
                            <li className="profile-card_info-item">
                                <span>Nome:</span>
                                <span>{userData?.name}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}