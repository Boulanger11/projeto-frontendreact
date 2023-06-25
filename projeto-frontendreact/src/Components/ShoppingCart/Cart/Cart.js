import { ConteinerCart, H1 } from "./CartStyle";

export default function Cart({ cartItems, removeFromCart }) {
    return (
        <div>
            <h2>Carrinho de Compras</h2>
            <ConteinerCart>
                {cartItems.map((item, index) => (
                    <div key={index}>
                        <p>Nome: {item.name}</p>
                        <p>Valor: R$ {item.value}</p>
                        <button onClick={() => removeFromCart(item.name)}>Remover</button>
                    </div>

                ))}
            </ConteinerCart >
        </div>

    );
};