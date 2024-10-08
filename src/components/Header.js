import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a href='/'>
                <img src='/images/logo.svg' />
            </a>
            <Menu>
                {cars?.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>

            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={() => setIsBurgerOpen(true)} />
            </RightMenu>
            <BurgerNav show={isBurgerOpen}>
                <CloseWrapper>
                    <CustomClose onClick={() => setIsBurgerOpen(false)} />
                </CloseWrapper>
                {cars?.map((car, index) => (
                    <li><a key={index} href='#'>{car}</a></li>
                ))}
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`

    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    text-align: start;
    flex-direction: column;
    transition: all 0.3s;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        
        a{
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`

    display: flex;
    justify-content: flex-end;

`