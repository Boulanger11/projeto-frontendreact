import { Product, ProductImg, ProductInfo, ProductBtn } from "./ProductCardStyle"

export const ProductCard = ({name, value, imageUrl, addToCart}) => {
    
    const handleAddCart = () => {
        const product = {
            name,
            value,
            imageUrl,
            quantity: 1,
          };
          addToCart(product);
        };

    return (
        <>
            <Product>
                <ProductImg src={imageUrl} alt={name}
                /> 
                <ProductInfo>
                    <p>{name} </p>
                    <p>R$ {value} </p>
                    <ProductBtn onClick={handleAddCart}>Adicionar ao Carrinho</ProductBtn>
                </ProductInfo>
            </Product>
           
        </>
    )
}