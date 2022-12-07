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
    
    > div { 
        > a Button {
            margin-bottom: 2.4rem;
        }
        Section {   
            gap: 4rem;

            .title {
                display: flex;
                align-items: center;        
                
                svg {
                    transform: scale(1.8);
                    margin: 0;
                    margin-right: 2rem;
                }
                
                h1 {
                    font-weight: 500;
                    font-size: 3.6rem;
                    line-height: 4.7rem;
                    margin-right: 2rem;
        
                    color: ${({theme}) => theme.colors.fcTitle};
                }
            }

            .infoMovieDescription {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: .8rem;                
        
                img {
                    border-radius: 50%;
                    width: 1.6rem;
                    border: .2rem solid ${({theme}) => theme.colors.border};
                }
        
                span {
                    font-weight: 400;
                    font-size: 1.6rem;
                    line-height: 1.9rem;
                    
                    color: ${({theme}) => theme.colors.fcTitle};
                }
            }

            > p {
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 2.1rem;
                text-align: justify;   
                margin-right: 1.2rem;
                color: ${({theme}) => theme.colors.fcTitle}; 
            }

            .tags {
                display: flex;
                gap: .8rem; 
                
                > p {
                    padding: .8rem 1.6rem; 
                }
            }    
        } 
    }
`

