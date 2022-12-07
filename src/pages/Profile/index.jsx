import { Container } from "./Styles";
import { WidthResponsive } from "../../components/widthResponsive";
import { Header } from "./Styles";
import { Content } from "./Styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Section } from "../../components/section";
import { GiPadlock } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { ButtonText } from "../../components/button";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { Link } from "react-router-dom"

export function Profile(){
    return(
        <Container>
            <Header>
                <WidthResponsive>
                    <Link to="/">
                        <ButtonText title="Voltar">
                            <BsArrowLeft />
                        </ButtonText>
                    </Link>
                </WidthResponsive>
            </Header>
            <Content>
                <WidthResponsive>
                        <div className="profile">
                            <img src={`https://github.com/${"niel-nts"}.png`} alt="imagem de perfil do Github" />
                            <Button>
                                <AiOutlineCamera />
                            </Button>
                        </div>
                    <Section>
                        <Input content="Nataniel Souza">
                            <AiOutlineUser />
                        </Input>
                        <Input content="meuemail@mail.com">
                            <AiOutlineMail />
                        
                        </Input>
                        <Input placeholder="Senha atual" type="password">
                            <GiPadlock />
                        </Input>
                        <Input placeholder="Nova senha" type="password">
                            <GiPadlock />
                        </Input>                        
                        <Button title="Salvar"/>
                    </Section>
                </WidthResponsive>
            </Content>
        </Container>
    )
}