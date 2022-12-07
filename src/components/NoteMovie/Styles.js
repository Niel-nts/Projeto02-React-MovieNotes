import styled from "styled-components";

export const Container = styled.section`
    background-color: ${({theme}) => theme.colors.bgSection};
    min-height: 23rem;
    padding: 3.2rem;
    gap: 2.4rem;
    border-radius: 1.6rem;

    > a h1 {
        color: ${({theme}) => theme.colors.fcTitle};
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.2rem;
    }

    > p {    
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.colors.fcParagraph};
        text-align: justify;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;     
        margin-bottom: 3rem;
    }
`