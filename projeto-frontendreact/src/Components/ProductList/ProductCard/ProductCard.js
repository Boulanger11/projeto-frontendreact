import { Product, ProductImg, ProductInfo, ProductBtn } from "./ProductCardStyle"

export const ProductCard = ({name, value, imageUrl}) => {
    
    return (
        <>
            <Product>
                <ProductImg src={imageUrl}
                /> 
                <ProductInfo>
                    <p>{name} </p>
                    <p>{value} </p>
                    <ProductBtn>Adicionar ao Carrinho</ProductBtn>
                </ProductInfo>
            </Product>
           
        </>
    )
}