import { ConteinerCard, H1, QntProduct } from "./CartStyle";

export default function Cart() {
    return (
        <ConteinerCard>
            <H1>Cart</H1>
            <QntProduct>
                <p>x0</p>
                <p>Nome do Produto</p>
                <button>Remover</button>
            </QntProduct>
            <p>Valor Total:0</p>
        </ConteinerCard>

    )
}