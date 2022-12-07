import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    border-radius: 1rem;
    padding: 1.9rem 2.4rem;
    background-color: ${({theme}) => theme.colors.bgInput};
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${({theme}) => theme.colors.white};
    gap: 1rem;

    svg {
        color: ${({theme}) => theme.colors.fcSubtitle};
    }
    
    input {
        color: ${({theme}) => theme.colors.white};
        width: 100%; 
        background: none;
        border: none;
    }
    
`

export const ContainerTextArea = styled.textarea`
    width: 100%;    
    background-color: ${({theme}) => theme.colors.bgInput};         
    border-radius: 1rem;
    border: none;
    padding: 1.9rem 2.4rem;
    color: ${({theme}) => theme.colors.white}; 
    resize: none; 

    ::-webkit-scrollbar {
        width: .8rem;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: .8rem;
        background: ${({theme}) => theme.colors.pink};
    }
    
`