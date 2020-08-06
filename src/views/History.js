import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import AppBar from '../components/AppBar';
import productos from '../productos.json';


//Variable para la activar icono en el menu lateral
const listSelect ={
  home:false,
  history:true,//activo
  favorite:false,
  offer:false,
  top:false
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,//Tamaño del appBar
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display:'flex',
    justifyContent:'center'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign:'center'
  },
  favorite:{
    marginLeft:'auto'
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


const cards = productos;//productos del Achivo Json para pruebas

//Funcion principal
export default function Historiall() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar items={listSelect}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container alignContent='center' justify='center'>
              {cards.map((card) => (
                <CardItem key={card} params={card}/>
              ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

function CardItem(params) {//Un item por cada elemeto del array
  const classes = useStyles();
  const detalles = params.params;
  return(
   <Grid container sm={12} md={6} lg={6} alignContent='center' justify='center'>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} onClick={()=>{console.log(detalles.imagen);}}>
              <img className={classes.img} alt="complex" src={detalles.imagen} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Jul 30,2020
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Detalles de la compra
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Pizza Mexicana (2) - 
                  Paquete (1) - 
                  Papas 3 (1) - 
                  Refresco cola (1) - 
                  Nugets (10)                   Pizza Mexicana (2) - 
                  Paquete (1) - 
                  Papas 3 (1) - 
                  Refresco cola (1) - 
                  Nugets (10)
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Eliminar
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$200.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}