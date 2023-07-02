import styled from "styled-components";

export const HeaderContainer = styled.div`
background-color: rgba(200,212,77,255);
height: 8vh;
display: flex;
justify-content: space-between;
align-items: center; 
padding: 2rem;
cursor: pointer;

img {
    height: 8vh;
}
`
export const LogoCarrinho = styled.img`
border: 1px solid lightgray;
border-radius: 1.5rem;
margin: 0.5rem 0 0.5rem 0;
cursor: pointer;
`

export const Login = styled.h3`
    display: flex;
    gap: 1rem;

img {
    height: 5vh;
    cursor: pointer;
    &:hover{transform: scale(1.1)};
}
`