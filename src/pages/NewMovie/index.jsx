import { Container } from "./Styles";
import { WidthResponsive } from "../../components/widthResponsive";
import { Header } from "../../components/header";
import { Content } from "./Styles";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/button";
import { BsArrowLeft } from "react-icons/bs";
import { Input } from "../../components/input";
import { TextArea } from "../../components/input";
import { Tag } from "../../components/tags";
import { IoClose } from "react-icons/io5";
import { IoAddOutline } from 'react-icons/io5';
import { Section } from "../../components/section";
import { Link } from "react-router-dom"


export function NewMovie(){
    return(
        <Container>
            <Header />
            <Content>
                <WidthResponsive>
                    <Link to="/">
                        <ButtonText title ="Voltar">
                            <BsArrowLeft />
                        </ButtonText>
                    </Link>
                    <Section>
                        <h1>Novo Filme</h1>
                        <div className="movieTitle">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                        </div>
                        <TextArea placeholder="Observações"/>
                        <h2>Marcadores</h2> 
                        <div className="tags">
                            <Tag title="React">
                                <Button>
                                    <IoClose />
                                </Button>
                            </ Tag>  
                            <div className="addTag">
                                <Input placeholder="Novo marcador">
                                    <Button>
                                        <IoAddOutline />
                                    </ Button>
                                </Input>                       
                            </div>
                        </div>  
                        <div className="buttonsEditions">
                            <Button title="Excluir filme"/>
                            <Button title="Salvar alterações"/>
                        </div>         
                    </Section>
                </WidthResponsive>
            </Content>
        </Container>
    )
}