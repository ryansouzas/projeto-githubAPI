import "./styles.css"

export default function ProfileCard() {
    return (
        <>
            <div className="profile-card">

                <div className="profile-card-info">

                    <div className="profile-card_img">
                        <img src="*" alt="img" />
                    </div>

                    <div className="profile-card_content">
                        <h2 className="profile-card_title ">
                            Informações
                        </h2>

                        <ul className="profile-card_info-list">
                            <li className="profile-card_info-item">
                                <span>Perfil:</span>
                                <a href="">link</a>
                            </li>
                            <li className="profile-card_info-item">
                                <span>Seguidores:</span>
                                <a href="">5000</a>
                            </li>
                            <li className="profile-card_info-item">
                                <span>Localidade:</span>
                                <span>Jp</span>
                            </li>
                            <li className="profile-card_info-item">
                                <span>Nome:</span>
                                <span>Ryan</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}