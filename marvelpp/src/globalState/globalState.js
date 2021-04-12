import React, { useState } from 'react'
import GlobalStateContext from './globalStateContext'
import MD5 from 'md5'
import axios from 'axios'

const GlobalState = (props) => {
    
    const timeStamp = Number(new Date())
    const publicKey = "ee2106418a7c0f12d38199c3662cbb43"
    const privateKey = "625398de8529fdfabbd26ec46617bc777f053e3d"
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