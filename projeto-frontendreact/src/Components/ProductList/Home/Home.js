import { Couteiner, FirstDiv, ProductContainer, Ordenation } from "./HomeStyle"
import { ProductCard } from "../ProductCard/ProductCard"

export default function Home({ ProductList }) {
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
            <ProductCard
                name={ProductList[0].name}
                value={ProductList[0].value}
                imageUrl={ProductList[0].imageUrl}
            />
            <ProductCard
                name={ProductList[1].name}
                value={ProductList[1].value}
                imageUrl={ProductList[1].imageUrl}
            />
            <ProductCard
                name={ProductList[2].name}
                value={ProductList[2].value}
                imageUrl={ProductList[2].imageUrl}
            />
            
            </ProductContainer>
        </Couteiner>

    )
}