import "./styles.css"

export default function ProfileCard() {
    return (
        <>
            <div className="app-card-container profile-card">

                <div className="profile-card_img">
                    <img src="*" alt="img" />
                </div>

                <div className="profile-card_content">
                    <h2 className="profile-card_title ">
                        Informações
                    </h2>

                    <div className="profile-card_info-list">

                        <div className="profile-card__info-item">
                            <p>Perfil:</p>{" "}
                            <a href={""}>a</a>
                        </div>

                        <div className="profile-card__info-item">
                            <p>Seguidores:</p>{" "}
                            <a href={""}>a</a>
                        </div>

                        <div className="profile-card__info-item">
                            <p>Localidade:</p>{" "}
                            <a href={""}>a</a>
                        </div>

                        <div className="profile-card__info-item">
                            <p>Nome:</p>{" "}
                            <a href={""}>a</a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}