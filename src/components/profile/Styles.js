import styled from "styled-components";

export const ProfileStyle = styled.div`
    display: flex;
    align-items: center;
    gap: .9rem;  
    margin-left: 2rem;
    
    > img {
        height: 6.4rem;
        width: 6.4rem;
        border-radius: 50%;
        border: 2px solid ${({theme}) => theme.colors.border};
    }

    > div {
        display: flex;
        flex-direction: column;
        
        > a strong {
            white-space: nowrap;
            align-self: end;
            font-weight: 700;
            font-size: 1.4rem;
            color: ${({theme}) => theme.colors.fcTitle};

        }

        > span {
            font-weight: 400;
            font-size: 1.4rem;
            align-self: end;
            color: ${({theme}) => theme.colors.fcSubtitle};
        }
    }
`