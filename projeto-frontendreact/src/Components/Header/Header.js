import React from "react"
import { HeaderContainer, LogoCarrinho, Login } from "./HeaderStyle"
import Logo from '../assents/Logo/logo carrinho 2.jpg'
import Natjuice from "../assents/Logo/NATJUICE.png"
import Carrinho from "../assents/Logo/carrinho2.png"
import Login2 from "../assents/Logo/login.png"

export default function Header() {

    return (
        <HeaderContainer>
            <LogoCarrinho src={Logo}>
            </LogoCarrinho>
            <img src={Natjuice}></img>
            <Login>
                <img src={Login2}/>
                <img src={Carrinho}/>
            </Login>
        </HeaderContainer>

    )
}