import { Product, ProductImg, ProductInfo, ProductBtn, ImageBtn } from "./ProductCardStyle"
import carrinho from "../../assents/Logo/carrinho2.png"

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
                    <h3>{name} </h3>
                    <p> R$ {value} </p>
                    <ProductBtn onClick={handleAddCart}>
                        <ImageBtn src={carrinho}>
                        </ImageBtn>
                    </ProductBtn>
                </ProductInfo>
            </Product>
           
        </>
    )
}