import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.colors.pink};
    color: ${({theme}) => theme.colors.bgPage};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    padding: 1.6rem;
    border: 0;
    border-radius: 1rem;
    font-weight: 500; 
    font-size: 1.6rem;

    &:disabled {
        opacity: 0.5;
    }

`

export const ContainerBtText = styled.button`
    width: fit-content;    
    background: none;
    color: ${({theme}) => theme.colors.pink};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    
    border: 0;
    
    font-weight: 400; 
    font-size: 1.6rem;

    &:disabled {
        opacity: 0.5;
    }
`