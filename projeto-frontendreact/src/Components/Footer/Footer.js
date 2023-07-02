import React from "react"
import { FooterConteiner, Eu } from "./FooterStyle"
import Facebook from "../assents/Footer/face.png"
import Instagram from "../assents/Footer/instagram.png"
import Twitter from "../assents/Footer/twitter.logo.png"
import GitHub from "../assents/Footer/GitHub.png"

export default function Footer() {

    return (
        <FooterConteiner>
            <Eu>
            <p>Conteúdo criado por Leonardo Boulanger</p>
            </Eu>
            <a href="https://github.com/Boulanger11">
            <img src={GitHub}></img>
            </a>
            <a href="https://www.facebook.com">
                <img src={Facebook}></img>
            </a>
            <a href="https://www.instagram.com">
            <img src={Instagram}></img>
            </a>
            <a href="https://www.twitter.com">
            <img src={Twitter}></img>
            </a>
        </FooterConteiner>

    )
}