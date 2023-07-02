import styled from "styled-components";

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    border: 0.5px solid black;
    border-radius: 1rem;
    width: 15rem;
    height: 28rem;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
 
`
export const ProductImg = styled.img`
    border: 1px solid lightyellow;
    border-radius: 1rem;
    height: 16rem;
    width: 13.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{transform: scale(1.1)};

`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.2rem;
    padding: 0.8rem;
    margin-top: 1rem;

h3 {
    font-family: Garamond;
    font-size: 1.7rem;
}

p {
    font-weight: 800;
    color: green;
    font-size: 1.6rem;
    font-family: Garamond;
}
    
`

export const ProductBtn = styled.button`
    align-self: center;
    cursor: pointer;
    width: 6rem;
    border: 1px ridge black;
    background-image: linear-gradient(to right, rgba(100,157,22,255)
, rgba(243,121,1,255), rgba(210,15,10,255), rgba(60,40,42,255)) ;

`
export const ImageBtn = styled.img`
    height: 2rem;
`