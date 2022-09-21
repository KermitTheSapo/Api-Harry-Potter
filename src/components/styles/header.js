import styled, {createGlobalStyle} from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export const LinkS = styled(Link)`
    text-decoration: none;
    color: black;
`
export const Ul = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
` 

export const Nav = styled.nav`
`

export const Header = styled.header`
`