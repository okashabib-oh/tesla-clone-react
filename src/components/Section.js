import React from 'react'
import { Fade } from 'react-reveal'
import styled from 'styled-components'

function Section({ title, description, backgroundImage, leftBtnText, rightBtnText, id }) {
    return (
        <Wrap bgImage={backgroundImage} id={id}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(23, 26, 32, 0.8);
    border-radius: 100px;
    height: 40px;
    width: 256px;
    color: white;
    cursor: pointer;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    cursor: pointer;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`