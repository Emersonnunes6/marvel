import Button from '@material-ui/core/Button';

const Botao = (props) => {
    return (
        <Button 
            style={{
                marginTop: '2vh',
                width: '50vw'
            }}
            variant="contained" 
            color="primary" 
            disableElevation
            onClick={props.onClickPersonagem}
        >submit
        </Button>
    )
}

export default Botao