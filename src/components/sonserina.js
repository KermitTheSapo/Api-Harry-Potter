import React, {useState, useEffect} from "react";
import axios from "axios"
import * as S from "./styles/main.js"

export default function Sonserina(){
    const [info, setInfo] = useState([])

    useEffect(() => {
        axios.get("https://hp-api.onrender.com/api/characters/house/Slytherin")
        .then(res => {
            setInfo(res.data)
        })
        .catch(error => {
            console.log("error", error)
        })
    }, [info])

    return(
        <div>
            <S.GlobalStyle/>
            <S.H1>Sonserina</S.H1>
            {info.map(item => (
                <S.Div>
                    <S.Ul>
                        <S.Li>Nome: {item.name}</S.Li>
                        <S.Li>Especie: {item.species}</S.Li>
                        <S.Li>Gênero: {item.gender}</S.Li>
                        <S.Li>Data de nascimento: {item.dateOfBirth === "" ? "Não existente" : item.dateOfBirth.replace(/-/g, " ").split(" ").join("/")}</S.Li>
                        <S.Li>Feiticeiro: {item.wizard === true ? "Sim" : "Não"}</S.Li>
                        <S.Li>Ancestrais: {item.ancestry === "" ? "Sem informação" : item.ancestry}</S.Li>
                        <S.Li>Cor dos olhos: {item.eyeColour === "" ? "Sem informação" : item.eyeColour}</S.Li>
                        <S.Li>Cor do cabelo: {item.hairColour === "" ? "Sem informação" : item.hairColour}</S.Li>
                        <S.Li>Patrono: {item.patronus === "" ? "Não tem" : item.patronus}</S.Li>
                        <S.Li>Nome do ator: {item.actor}</S.Li>
                        <S.Li>Esta vivo? {item.alive === true ? "Sim" : "não"}</S.Li>
                        <S.Li>Estudante de Hogwarts? {item.hogwartsStudent === true ? "Sim" : "Não"}</S.Li>
                    </S.Ul>
                    <figure>
                        <S.Poster src={item.image.length > 5 ? item.image : "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png"} alt="a" />
                    </figure>
                </S.Div>
            ))}
        </div>
    )
}