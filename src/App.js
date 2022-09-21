import React from "react"
import Home from "./components/Home.js"
import Grifinoria from "./components/Gryffindor.js"
import Sonserina from "./components/sonserina.js"
import Cornival from "./components/cornival.js"
import Lufalufa from "./components/lufalufa.js"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as S from "./components/styles/header.js"

export default function App() {
  return (
    
      <BrowserRouter>
        <S.GlobalStyle/>
        <S.Header>
          <S.Nav>
            <S.Ul>
              <S.LinkS to="/">Home</S.LinkS>
              <S.LinkS to="/Grifinoria">Grifinória</S.LinkS>
              <S.LinkS to="/Sonserina" >Sonserina</S.LinkS>
              <S.LinkS to="/Corvinal" >Corvinal</S.LinkS>
              <S.LinkS to="/lufalufa" >Lufa-lufa</S.LinkS>
            </S.Ul>
          </S.Nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Grifinoria' element={<Grifinoria />} />
            <Route path='/Sonserina' element={<Sonserina />} />
            <Route path='/Corvinal' element={<Cornival />} />
            <Route path='/lufalufa' element={<Lufalufa />} />
          </Routes>
        </S.Header>
      </BrowserRouter>
  )
}