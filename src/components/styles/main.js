import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 100px;
`

export const Poster = styled.img`
    width: 25vw;
`

export const Ul = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 15px;
`

export const Li = styled.li`
    font-size: 1.5rem;
`

export const H1 = styled.h1`
    text-align: center;
`