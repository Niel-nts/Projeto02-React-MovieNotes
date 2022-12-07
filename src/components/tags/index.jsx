import { Container } from "./Styles"

export function Tag({title, children, ...rest}){
    return(
        <Container>
            {title}
            {children}
        </Container>        
    )
}