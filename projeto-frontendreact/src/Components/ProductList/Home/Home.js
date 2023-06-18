import { Couteiner, FirstDiv, ProductContainer, Product, ProductImg, ProductInfo, ProductBtn, Ordenation } from "./HomeStyle"


export default function Filters() {
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
                <Product>
                    <ProductImg>ProductCard1</ProductImg>
                    <ProductInfo>
                        <p>Nome do Produto</p>
                        <p>Valor</p>
                        <ProductBtn>Adicionar ao Carrinho</ProductBtn>
                    </ProductInfo>
                </Product>
                <Product>
                    <p>ProductCard2</p>
                </Product>
                <Product>
                    <p>ProductCard3</p>
                </Product>
            </ProductContainer>
        </Couteiner>

    )
}