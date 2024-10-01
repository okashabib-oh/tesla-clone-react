import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>

            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                id="modelS"
            /><Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                id="model3"
            /><Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                id="modelX"
            /><Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                id="modelY"
            /><Section
                title="Lowest Cost Solar Panels in America"
                description="Money back guarantee"
                backgroundImage="solar-panel.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            /><Section
                title="Solar for New roofs"
                description="Solar Roof costs less than a new solar panels"
                backgroundImage="solar-roof.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            /><Section
                title="Accessories"
                description=""
                backgroundImage="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`