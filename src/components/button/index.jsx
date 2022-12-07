import { Container } from "./Styles"
import { ContainerBtText } from "./Styles"

export function Button({title, children}){
    return(
        <Container>
            {children}
            {title}
        </Container>
    )
}

export function ButtonText({title, children}){
    return(
        <ContainerBtText>
            {children}
            {title}    
        </ContainerBtText>
    )
}