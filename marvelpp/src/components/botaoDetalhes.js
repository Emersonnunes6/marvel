import Button from '@material-ui/core/Button';

const BotaoDetalhes = (props) => {
    return (
        <Button 
            style={{
                marginTop: '2vh',
                width: '50vw'
            }}
            variant="contained" 
            color="primary" 
            disableElevation
            onClick={props.onClickComics}
        >
            See comics
        </Button>
    )
}

export default BotaoDetalhes