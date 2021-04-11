import TextField from '@material-ui/core/TextField';

const InputNome = (props) => {
    return(
        <div>
            <TextField 
                style={{
                    marginTop: '1vh',
                    backgroundColor: 'white'
                }}
                    id="outlined-basic" 
                    placeholder="Example: Spider-Man" 
                    variant="outlined" 
                    value={props.inputPersonagem}
                    onChange={props.onChangeInput}
            />
        </div>
    )
}

export default InputNome