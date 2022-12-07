import styled from "styled-components";
import backgroundImg from '../../assets/background.jpg'

export const Container = styled.div`
    width: clamp(38rem, 45vw, 63.7rem);
    display: flex;
    align-items: center;
    
    Section {
        width: 34rem;
        height: fit-content;
        margin: 0 auto;
        gap: 0;

        h1 {            
            font-weight: 700;
            font-size: 4.8rem;
            line-height: 6.3rem;
            
            color: ${({theme}) => theme.colors.pink};
        }
        
        span {            
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            margin-bottom: 4.8rem;

            color: ${({theme}) => theme.colors.signSpan};
        }

        h2 {
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 4.8rem;

            color: ${({theme}) => theme.colors.fcTitle};
        }  
        
        div {
            margin-bottom: .8rem;
        }
        
        div:last-of-type {
            margin-bottom: 2.4rem;
        }
        
        > button:first-of-type {
            margin: 0 auto 4.2rem;
        }

        a {
            margin: 0 auto;
        }
    }

`

export const BackgroundImg = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

`