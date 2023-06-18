import styled from "styled-components";

export const Couteiner = styled.div `
    display: flex;
    flex-direction: column;
    width: 60%;

`
export const FirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  
`
export const ProductContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1rem;
`
export const Product = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 15rem;
    height: 20rem;
`
export const ProductImg = styled.div `
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
export const Ordenation = styled.div`
    display: flex;
`