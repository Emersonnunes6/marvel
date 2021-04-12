import { useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import CardComic from "../../components/cardComic"
import GlobalStateContext from "../../globalState/globalStateContext"
import { onClickInicio } from "../../Router/cordinator"
import { DivPrincipal, Header } from "./styles"
import CircularProgress from '@material-ui/core/CircularProgress';

const PageComics = () => {
    const history = useHistory()

    const params = useParams()

    const { states, requests } = useContext(GlobalStateContext)

    useEffect(() => {
        requests.getComics(params.idPersonagem)
    })

    return (
        <DivPrincipal>
            <Header>
                <button onClick={() => onClickInicio(history)}>HOME</button>
               <h3>Comics list:</h3> 
            </Header>       
            {states.comics.length === 0 ? 
            <CircularProgress/> :          
            states.comics.map((comic) => {
                return (
                    <CardComic
                        key={comic.id}
                        titulo={comic.title}
                        imagem={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    />
                )
            })}
        </DivPrincipal>
    )
}

export default PageComics