import { Container } from "./Styles"
import { ContainerTextArea } from "./Styles"

export function Input({children, content=false, ...rest}){
    return(
        <Container {...rest}>
            {children}
            { content ? content : <input {...rest} />}            
        </Container>
    )
}

export function TextArea({...rest}){
    return(
        <ContainerTextArea {...rest}/>
    )
}