import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {DivPrincipal} from './styles'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function CardComic(props) {
  const classes = useStyles();

  return (
    <DivPrincipal>
    <Card 
        style={{
            marginTop: '2vh'
        }}
        onClick={props.onClickComics} 
        className={classes.root}
        key={props.key}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="comic"
          height="400"
          image={props.imagem}
          title="comic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.titulo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </DivPrincipal>
  );
}

export default CardComic