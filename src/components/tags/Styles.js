import styled from "styled-components";

export const Container = styled.p`  
    width: fit-content;
    background-color: ${({theme}) => theme.colors.bgTag};
    padding: .5rem 1.6rem;
    border-radius: .8rem;
   
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.colors.fcTag};        
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;  
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    svg {
        font-size: 2.4rem;
        color: ${({theme}) => theme.colors.pink};
    }
`