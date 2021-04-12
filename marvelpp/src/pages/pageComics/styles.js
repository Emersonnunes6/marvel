import styled from 'styled-components'

export const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    height: 100%;
    width: 100%;
h3{
    color: white;
}
` 

export const DivComic = styled.div`
    background-color: #5b5b58;
    height: 10vh;
    width: 70vw;
p{
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    margin-left: 1vh;
}
` 

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 50px;
    height: 10%;
    width: 100%;
button {
    margin-left: 50px;
    height: 30%;
}
` 