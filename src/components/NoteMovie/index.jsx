import { Container } from "./Styles"
import { Link } from "react-router-dom"

export function NoteMovie({title, children, ...rest}){
    return(
        <Container>
            <Link to="/moviedescription/:id">
                <h1>{title}</h1>             
            </Link>
            {children}            
        </Container>        
    )
}