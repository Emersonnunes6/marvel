import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import CardComic from "../../components/cardComic"
import GlobalStateContext from "../../globalState/globalStateContext"
import { DivPrincipal } from "./styles"

const PageComics = () => {

    const params = useParams()

    const { states, requests } = useContext(GlobalStateContext)

    useEffect(() => {
        requests.getComics(params.idPersonagem)
    })


    return (
        <DivPrincipal>
            <h3>Comics list:</h3>
            {states.comics.map((comic) => {
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