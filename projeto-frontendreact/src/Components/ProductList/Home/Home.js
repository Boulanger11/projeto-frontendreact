import { Couteiner, FirstDiv, ProductContainer, Ordenation } from "./HomeStyle"
import { ProductCard } from "../ProductCard/ProductCard"
import { useState } from "react"

export default function Home({ ProductList, addToCart }) {
    

    return (
        <Couteiner>
            <FirstDiv>
                <div>Quantidade de produtos:</div>
                <Ordenation>
                    <p>Ordenação:</p>
                    <select>
                        <option>Crescente</option>
                        <option>Descrecente</option>
                    </select>
                </Ordenation>
            </FirstDiv>
            <ProductContainer>
                {ProductList.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        value={product.value}
                        imageUrl={product.imageUrl}
                        addToCart={() => addToCart(product)}
                    />
                ))}
            </ProductContainer>
        </Couteiner>

    )
}