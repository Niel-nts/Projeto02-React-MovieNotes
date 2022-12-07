import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    justify-content: center;
    
    height: 100%;
    width: 100%;
    padding: 0 2rem;
    
    border-bottom: 1px solid ${({theme}) => theme.colors.border};
    
    > div {
        display: flex;
        margin: 0;
        align-items: center;
        justify-content: space-between;

        > h1 {   
            white-space: nowrap;
            font-weight: 700;
            font-size: 2.4rem;
            color: ${({theme}) => theme.colors.pink};
            margin-right: 2rem;
        }
    }
`