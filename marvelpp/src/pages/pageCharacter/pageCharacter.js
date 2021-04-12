import { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import CardPersonagem from "../../components/cardPersonagem";
import GlobalStateContext from "../../globalState/globalStateContext";
import { DivPrincipal } from "./styles";
import { onClickComics } from "../../Router/cordinator";

const PageCharacter = () => {   

    const params = useParams();
    
    const history = useHistory();

    const {states, requests} = useContext(GlobalStateContext)

    useEffect(() => {
        requests.getCharacter(params.inputValue)
    }, [params, requests])
    
    return (
        <div>
            {states.character.map((character) => {
        return (
            <DivPrincipal> 
                <CardPersonagem
                    key={character.id}
                    nome={character.name}
                    descricao={character.description}
                    imagem={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    onClickComics={() => onClickComics(character.id, history)}
                >
                </CardPersonagem>
            </DivPrincipal>
        )
    })}
        </div>
    )
}

export default PageCharacter;
