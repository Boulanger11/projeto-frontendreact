import { ConteinerCart, ImageH4, ProductImg2, ButtonRemover, Total } from "./CartStyle";
import Carrinho1 from "../../assents/Logo/carrinho do carrinho1.png"
import Carrinho from "../../assents/Logo/carrinho.png"
import Lixeira from "../../assents/Logo/lixeira.png"

export default function Cart({ cartItems, removeFromCart }) {
    
    const calculateTotal = () => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total += parseFloat(cartItems[i].value || 0)
        }
        return total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      }
      

    return (
        <div>
            <ImageH4>
                <img src={Carrinho} alt="Carrinho"></img>
                <img src={Carrinho1} alt="Carrinho1"></img>
            </ImageH4>
            <ConteinerCart>

                {cartItems.map((item, index) => (
                    <div key={index}>
                        <ProductImg2 src={item.imageUrl} alt={item.imagem}/>
                        <p>{item.name}</p>
                        <p>Valor: {item.value}</p>
                        <ButtonRemover onClick={() => removeFromCart(item.name)}>
                        <img src={Lixeira} width="25px" alt="Remover"/>
                        </ButtonRemover>
                    </div>
                ))}

            </ConteinerCart >
        </div>

    );
};
