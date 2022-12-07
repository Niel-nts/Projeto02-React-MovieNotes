import { Container } from "./Styles";
import { Section } from "../section";

export function Sign({children}){
    return(
        <Container>
            <Section>
                <h1>Movie Notes</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>
                {children}
            </Section>
        </Container>
    )
}