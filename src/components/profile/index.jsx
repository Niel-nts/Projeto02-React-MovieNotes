import { ProfileStyle } from "./Styles"
import { Link } from "react-router-dom"

export function Profile({user, userId}){
    return(
        <ProfileStyle>
            <div>
                <Link to="/profile">
                    <strong>{user}</strong>
                </Link>
                <span>Sair</span>
            </div>
            <img src={`https://github.com/${userId}.png`} alt="imagem de perfil do Github" />
        </ProfileStyle>
    )
}