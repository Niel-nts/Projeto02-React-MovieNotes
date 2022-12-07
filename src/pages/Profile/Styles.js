import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows: 14.4rem auto;
    grid-template-areas: "header" "content";
`

export const Header = styled.div`
    grid-area: header;
    background-color: ${({theme}) => theme.colors.pinkTransparency};
    
    div {
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
`

export const Content = styled.div`
    grid-area: content;

    div {
        max-width: 34rem; 
    }

    .profile {
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 6.4rem;
        margin-top: -13.3rem;

        img {
            border-radius: 50%;
            width: 18.6rem;
        }

        svg {
            transform: scale(1.5);
        }

        button {
            position: absolute;
            bottom: .4rem;
            right: 8.7rem;
            border-radius: 50%;
            width: 4.8rem;
            height: 4.8rem;

        }
    }

    section {
        height: calc(100vh - 42rem);
        
        div:nth-of-type(1), div:nth-of-type(3) {
            margin-bottom: -1.6rem;
        }

        button {
            opacity: 0.5;
        }
    }
`