import React from "react"
import styled from "styled-components"
import {SlHome} from "react-icons/sl"
import {AiOutlineSearch, AiOutlinePlus, AiFillStar} from "react-icons/ai"
import {RiMovie2Line} from "react-icons/ri"
import {CgScreen} from "react-icons/cg"

import "../css/header.css"

export default function Header()
{
    return (
        <Nav>
            <Logo src="./images/logo.svg"/>
            <NavMenu>
                <a>
                    <SlHome className="nav--icon"/>
                    <span>HOME</span>
                </a>

                <a>
                    <AiOutlineSearch className="nav--icon" />
                    <span>SEARCH</span>
                </a>

                <a>
                    <AiOutlinePlus className="nav--icon" />
                    <span>WATCHLIST</span>
                </a>

                <a>
                    <AiFillStar className="nav--icon" />
                    <span>ORIGINALS</span>
                </a>

                <a>
                    <RiMovie2Line className="nav--icon" />
                    <span>MOVIES</span>
                </a>

                <a>
                    <CgScreen className="nav--icon" />
                    <span>SERIES</span>    
                </a>

                

            </NavMenu>

            <UserImg src="./images/user.jpg"/>
        </Nav>
    )

}

const Nav = styled.div`
    height: 70px;
    background-color: #090b13;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: white;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;   
`

const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-grow: 1;
    
    align-items: center;
    justify-content: safe;

    width: 45%;
    margin-left: 20px;

    a {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        margin: 0 1%;
    }

    a::after {
        content: " ";
        height: 2px;
        width: 0;
        background-color: snow;
        position: absolute;
        bottom: -3px;
        left:0;
        transition: 500ms;
    }

    a:hover {
        &:after {
            width: 100%;
        }
    }

`

const UserImg = styled.img`
    width: 39px;
    aspect-ratio: 1;
    border-radius: 100%;
    cursor: pointer;
`