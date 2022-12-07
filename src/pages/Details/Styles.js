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
        #subHeader {
            margin-bottom: 4rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            > h1 {
                font-weight: 400;
                font-size: 3.2rem;
                line-height: 4.2rem;
                white-space: nowrap;
                
                color: ${({theme}) => theme.colors.white};
            }
            
            > button {
                width: 20.7rem;
                svg {
                font-size: 2.6rem;
                }
            }
        } 
        
        section {
            height: calc(100vh - 36rem);    
            padding-right: 1.6rem;

            .tags {
                display: flex;
                gap: .8rem;
            }
        }
    }

`

