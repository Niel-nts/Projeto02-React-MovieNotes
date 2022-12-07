import { Container } from "./Styles";
import { BackgroundImg } from "../../components/Sign/Styles";
import { Sign } from "../../components/Sign";
import { Input } from "../../components/input";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/button";
import { AiOutlineUser } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom"

export function SignUp(){
    return(
        <Container>
            <BackgroundImg />
            <Sign>
                <h2>Crie sua conta</h2>
                <Input placeholder="Nome">
                    <AiOutlineUser />
                </Input>
                <Input placeholder="E-mail">
                    <AiOutlineMail />
                </Input>
                <Input placeholder="Senha">
                    <GiPadlock />
                </Input>
                <Button title="Cadastrar"/>
                <Link to="/">    
                    <ButtonText title="Voltar para o login">
                        <BsArrowLeft />
                    </ButtonText>
                </Link>
            </Sign>
        </Container>
    )
}