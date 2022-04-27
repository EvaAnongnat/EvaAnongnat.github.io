import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    height: 64px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1500px) /2);
    margin-left: 2rem;
    z-index: 10;
`

export const NavLink = styled(Link)`
    font-weight: 600;
    color: #F85F6A;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        //font-weight: 600;
        color: #fa0214;
    }

    &:active {
        color: #fb2838;
    } 
`

export const Bars = styled(FaBars)`
    display: none;
    color: #F85F6A;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
` 

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #fff;
    padding: 10px 22px;
    color: #F85F6A;
    border: 1px solid #F85F6A;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #F85F6A;
        color: #fff;
    }
`