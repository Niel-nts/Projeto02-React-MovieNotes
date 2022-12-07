import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: "header" "content";
 
`

export const Content = styled.div`
    grid-area: content;
    
    >div{
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        > :nth-child(2) {
            gap: 4rem;
        }
    }
    
    .movieTitle {
        display: flex;
        flex-direction: row;
        gap: 4rem;
    }

    textarea {
        height: 100%;
        min-height: 14rem;
    }

    h1 {        
        color: ${({theme}) => theme.colors.fcTitle};
    }
    
    h2 {
        color: ${({theme}) => theme.colors.fcParagraph};
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.6rem;
    }

    .tags {
        display: flex;
        gap: 2.4rem;
        padding: 1.6rem;
        background-color: ${({theme}) => theme.colors.black};
        border-radius: .8rem;
        margin-top: -1.6rem;

        button {
            background: none;
            padding: 0;
        }

        p {
            padding: 1.6rem;
            font-size: 1.6rem;
            color: ${({theme}) => theme.colors.white};
        }

        .addTag {
            border: 2px dashed ${({theme}) => theme.colors.fcSubtitle};
            border-radius: 1rem;
            display: flex;
            background: none;
            width: 18rem;
            padding: 1.6rem;

            > div {
                padding: 0;
                background: none;
                position: relative;

                button {
                    position: absolute;
                    right: 0;
                    background: none;
                    width: fit-content;
                    svg {
                        font-size: 2.4rem;
                        color: ${({theme}) => theme.colors.pink};
                    }
                }
            }
            input {
                width: 11rem;
                font-family: 'Roboto';        
                font-weight: 400;
                font-size: 1.6rem;
                padding: 0;
        
                &::placeholder{
                    color: ${({theme}) => theme.colors.fcSubtitle};
                }
            }
        }

    }

    .buttonsEditions {
        display: flex;
        gap: 4rem;

        button:nth-child(1) {
            background: ${({theme}) => theme.colors.black};
            color: ${({theme}) => theme.colors.pink};
        }
    }
`