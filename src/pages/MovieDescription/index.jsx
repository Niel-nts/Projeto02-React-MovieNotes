import { Container } from "./Styles"
import { Header } from "../../components/header"
import { Content } from "./Styles"
import { WidthResponsive } from "../../components/widthResponsive"
import { Avaliation } from "../../components/avaliation"
import { Tag } from "../../components/tags"
import { Section } from "../../components/section"
import { ButtonText } from "../../components/button"
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom"

export function MovieDescription(){
    return(
        <Container>
            <Header />
            <Content>
                <WidthResponsive>
                    <Link to="/">
                        <ButtonText title="Voltar">
                            <BsArrowLeft />
                        </ButtonText>
                    </Link>
                    <Section>
                    <div className="title">
                        <h1>Interestellar</h1>
                        <Avaliation punctuation = {4}/>
                    </div>
                    <div className="infoMovieDescription">
                        <img src={`https://github.com/niel-nts.png`} alt="imagem de perfil do Github" />
                        <span>Por {`Nataniel Souza`}</span>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48904 1.73077C4.94261 1.73077 2.06767 4.76146 2.06767 8.5C2.06767 12.2385 4.94261 15.2692 8.48904 15.2692C12.0355 15.2692 14.9104 12.2385 14.9104 8.5C14.9104 4.76146 12.0355 1.73077 8.48904 1.73077ZM0.900146 8.5C0.900146 4.08172 4.29781 0.5 8.48904 0.5C12.6803 0.5 16.0779 4.08172 16.0779 8.5C16.0779 12.9183 12.6803 16.5 8.48904 16.5C4.29781 16.5 0.900146 12.9183 0.900146 8.5Z" fill="#FF859B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48904 3.57692C8.81144 3.57692 9.0728 3.85244 9.0728 4.19231V7.88462H12.5754C12.8978 7.88462 13.1591 8.16013 13.1591 8.5C13.1591 8.83987 12.8978 9.11539 12.5754 9.11539H8.48904C8.16663 9.11539 7.90527 8.83987 7.90527 8.5V4.19231C7.90527 3.85244 8.16663 3.57692 8.48904 3.57692Z" fill="#FF859B"/>
                        </svg>
                        <span>04/12/22 ??s 08:00</span>
                    </div>
                    <div className="tags">
                        <Tag title="Fic????o Cient??fica"/>
                        <Tag title="Drama"/>
                        <Tag title="Fam??lia"/>
                    </div>
                    <p>
                    Pragas nas colheitas fizeram a civiliza????o humana regredir para uma sociedade agr??ria em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua fam??lia. Murphy, a filha de dez anos de Cooper, acredita que seu quarto est?? assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" ?? uma intelig??ncia desconhecida que est?? enviando mensagens codificadas atrav??s de radia????o gravitacional, deixando coordenadas em bin??rio que os levam at?? uma instala????o secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condi????es de sobreviv??ncia para a esp??cie humana. As "miss??es L??zaro" enviadas anos antes identificaram tr??s planetas potencialmente habit??veis orbitando o buraco negro Garg??ntua: Miller, Edmunds e Mann ??? nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habit??vel, a humanidade ir?? seguir para ele na instala????o da NASA, que ?? na realidade uma enorme esta????o espacial. A partida de Cooper devasta Murphy.
                    
                    Al??m de Cooper, a tripula????o da Endurance ?? formada pela bi??loga Amelia, filha de Brand; o cientista Romilly, o f??sico planet??rio Doyle, al??m dos rob??s TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, por??m descobrem que o planeta possui enorme dilata????o gravitacional temporal por estar t??o perto de Garg??ntua: cada hora na superf??cie equivale a sete anos na Terra. Eles entram em Miller e descobrem que ?? in??spito j?? que ?? coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripula????o enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
                    </p>
                    </Section>
                </WidthResponsive>
            </ Content>
        </Container>
    )
}