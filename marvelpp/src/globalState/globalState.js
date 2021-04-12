import React, { useState } from 'react'
import GlobalStateContext from './globalStateContext'
import MD5 from 'md5'
import axios from 'axios'

const GlobalState = (props) => {
    
    const timeStamp = Number(new Date())
    const publicKey = "8bfad0945e9ae0c47c24a3ce1e11a3e6"
    const privateKey = "8e8ead9ee58fe76c2326abfb7f93a4a40e7a3be3"
    const hash = MD5(`${timeStamp}${privateKey}${publicKey}`)

    const [character, setCharacter] = useState([])
    const [comics, setComics] = useState([])

    const getCharacter = (nomePersonagem) => {
        axios.get(`http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=${nomePersonagem}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=100`)
            .then((res) => {
                setCharacter(res.data.data.results)
            }).catch((err) => {
                console.log(err)
            })
    }

    const getComics = (idPersonagem) => {
        axios.get(`http://gateway.marvel.com:80/v1/public/characters/${idPersonagem}/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=100`)
            .then((res) => {
                setComics(res.data.data.results)
            }).catch((err) => {
                console.log(err)
            })
    }

    const keys = {timeStamp, publicKey, privateKey, hash}
    const requests = {getCharacter, getComics}
    const states = { character, comics }

    const data = { keys, requests, states }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState