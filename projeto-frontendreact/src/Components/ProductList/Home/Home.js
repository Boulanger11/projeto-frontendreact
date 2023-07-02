import { Couteiner, FirstDiv, ProductContainer, Ordenation } from "./HomeStyle"
import { ProductCard } from "../ProductCard/ProductCard"
import { useState } from "react"

export default function Home({ ProductList, addToCart, sortOrder, setSortOrder, searchName, minFilter, maxFilter }) {
    const [totalProducts, setTotalProducts] = useState(ProductList.length)


    const sortProducts = (products, order) => {
        if (order === "crescente") {
            return products.sort((a, b) => a.value - b.value);
        } else if (order === "decrescente") {
            return products.sort((a, b) => b.value - a.value);
        } else {
            return products;
        }
    }

    const filterProductsByName = (products, name) => {
        return products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    };

    const filterProductsByValue = (products, min, max) => {
        return products.filter(product => product.value >= min && product.value <= max);
    }

    const filterProducts = (products) => {
        let filteredProducts = products;

        if (searchName) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(searchName.toLowerCase())
            );
        }

        if (minFilter) {
            filteredProducts = filteredProducts.filter(product =>
                product.value >= +minFilter
            );
        }

        if (maxFilter) {
            filteredProducts = filteredProducts.filter(product =>
                product.value <= +maxFilter
            );
        }

        return filteredProducts;
    }

    const filteredProducts = filterProducts(ProductList)
    const sortedProductList = sortProducts(filteredProducts, sortOrder)

    return (
        <Couteiner>
            <FirstDiv>
                <div>Quantidade de produtos: {totalProducts} </div>
                <Ordenation>
                    <p>Ordenação:</p>
                    <select className="select-order" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                </Ordenation>
            </FirstDiv>
            <ProductContainer>
                {sortedProductList.map((product, index) => (
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