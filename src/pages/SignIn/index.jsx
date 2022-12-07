import { Container } from "./Styles";
import { BackgroundImg } from "../../components/Sign/Styles";
import { Sign } from "../../components/Sign";
import { Input } from "../../components/input";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/button";
import { Link } from "react-router-dom"

export function SignIn(){
    return(
        <Container>
            <Sign>
                <h2>Faça seu Login</h2>
                <Input placeholder="E-mail">
                    <AiOutlineMail />
                </Input>
                <Input placeholder="Senha">
                    <GiPadlock />
                </Input>
                <Button title="Entrar"/>
                
                <Link to="/register">
                    <ButtonText title="Criar conta"/>
                </Link>
                
            </Sign>
            <BackgroundImg />
        </Container>
    )
}