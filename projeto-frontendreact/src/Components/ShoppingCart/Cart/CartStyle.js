import styled from "styled-components";

export const ImageH4 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 1rem 0 1rem;
    margin-right: 10px;

img {
    height: 4vh;
    
}

`

export const ConteinerCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid gray;
    border-radius: 2rem;
    padding: 1rem;
    margin: 0.5rem 1rem 0 0;
    background-color: lightgray;
p {
    font-size: 13px;
}
`
export const QntProduct = styled.div`
    display: flex;
    gap: rem;   
`

export const ProductImg2 = styled.img`
    height: 7vh;
    border-radius: 0.5rem;
`

export const ButtonRemover = styled.button`
    cursor: pointer;
    background-color: #de2f45;
    border: none;
    border-radius: 6px;
    padding: 4px;
    margin: 0.4rem;
`

/* export const Total = styled.div`
   font-size: 15px;
   font-weight: 800;
   margin-top: 1rem;
` */