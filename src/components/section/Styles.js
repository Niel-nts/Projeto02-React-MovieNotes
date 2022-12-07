import styled from "styled-components";

export const Container = styled.section`
    height: calc(100vh - 32rem);
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    overflow-y: auto;
        
    ::-webkit-scrollbar {
        width: .8rem;    
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: .8rem;
        background: ${({theme}) => theme.colors.pink};
    }

`