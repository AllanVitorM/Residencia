import styled from "styled-components";
import { breakpoints } from '../../breakpoints';


export const BarLateral = styled.div `
    width: 100%;
    height: 100%;
    background-color: #4ADD8C;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${breakpoints.md} {
        img{
            width: 80%;
        }
    }

    @media ${breakpoints.bg} {
        img{
            width: 100%;
        }
    }


`
export const Menu = styled.div `
    width: 15%;
    height: 100vh;
    background-color: #F5F0F5;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
       position: absolute;
        width: 10%;
        top: 6%;
    }

    hr {
        width: 90%;
    }

`

