import React from 'react'
import { useHistory } from 'react-router'
import Botao from '../../components/botaoConfirma'
import InputNome from '../../components/inputNome'
import useValorInput from '../../customHooks/useInput'
import { onClickPersonagem } from '../../Router/cordinator'
import { DivPrincipal, ImgLogo } from './styles'

const HomePage = () => {

  const history = useHistory()

  const [inputPersonagem, onChangeInput] = useValorInput()
    
    return (
        <DivPrincipal>
            <ImgLogo src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png"></ImgLogo>
            <h3 style={{color: 'white' }} >Name of the character:</h3>
            <InputNome 
              inputPersonagem={inputPersonagem}
              onChangeInput={onChangeInput}
            />
            <Botao onClickPersonagem={() => onClickPersonagem(history, inputPersonagem)}/>
        </DivPrincipal>
    )
}

export default HomePage