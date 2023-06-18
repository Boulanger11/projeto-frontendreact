import styled from "styled-components";

export const Product = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 15rem;
    height: 20rem;
`
export const ProductImg = styled.img `
    border: 1px solid black;
    height: 13rem;
    display: flex;
    justify-content: center;
    align-items: center;
   
`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    padding: 0.5rem;

`

export const ProductBtn = styled.button`
    align-self: center;
    cursor: pointer;

`
