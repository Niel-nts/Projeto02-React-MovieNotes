import { Container } from "./Styles"

export function Section({children, ...rest}){
    return(
        <Container>
            {children}
        </Container>        
    )
}