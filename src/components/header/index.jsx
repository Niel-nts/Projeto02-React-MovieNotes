import { Container } from "./Styles"
import { Profile } from "../profile"
import { Input } from "../input"
import { WidthResponsive } from "../widthResponsive"

export function Header(){
    return(
        <Container> 
                <WidthResponsive>
                    <h1>Movie Notes</h1>
                    <Input placeholder="Pesquisar pelo título"/>
                    <Profile user="Nataniel Souza" userId="niel-nts"/>
                </WidthResponsive>     
        </Container>
    )
}