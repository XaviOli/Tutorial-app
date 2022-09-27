import styled from 'styled-components'

const Title = styled.h1`
    color: #DDDDDD;
    font-size: 1.5rem;
    text-align: center;
`

const Fons = styled.div`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
    background-color: #383838;
    height: 200vh;
`

const ButtonHome = styled.div`
    background-color: #066163;
    border-radius: 2rem;
    position: absolute;
    padding: 1rem;
    top: 50vh;
    text-align: center;
    font-size: 2rem;
    display: flex;
    align-items: center;
    &:hover {
        color: white;
        background-color: #D2001A;
    }
`
const Background = styled.div`
    background-image: url("${(props) => props.image}");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
`
const Paragraph = styled.p`
    border: 2px solid black;
    border-radius: 2rem;
    text-align: center;
    width: 90%;
    height: auto;
    padding: 1rem;
    margin: auto;
    margin-top: 1.5rem;
    background: ${props => props.active ? "pink" : "rgba(255, 255, 255, 0.7)"} 
    `
    
const ButtonsDiv = styled.div`
    button {
        width: 45%;
        padding: 1rem;
        margin-top: 3rem;
        margin-right: 1rem;
        cursor: pointer; 
        text-align: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: bold;
        border-radius: 10px black solid;
    }
`

export { Background, Paragraph, ButtonsDiv, Title, ButtonHome, Fons };