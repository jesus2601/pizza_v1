// Se importan todas las clases de la libreria material-ui y React, para poder renderizar el componente
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {IconButton} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Avatar from '@material-ui/core/Avatar';

//Se crea una variable para guardar un thema, colores anaranjado
const theme = createMuiTheme({
  palette: {
        primary: orange,
        secondary: {
          main: '#e65100',
        },
  },
});

//variable de estilos
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  container:{
      textAlign:"center"
  },
  avatar:{
    width:'100px',
    height:'100px',
    margin:'0 auto'
}
}));

//Variable para mapear los datos de los desarrolladores, un array
//cada elemento agregado se debe mapear en el item
const tiers = [
  {
    nombre: 'Aldo',
    subheader: 'Analista de datos',
    edad: '18',
    description: ['Bachillerato', 'Tecnico en programación', 'Atención a clientes', 'Soporte'],
    im:'https://image.freepik.com/foto-gratis/sorprendido-palabras-e-impresionado-apuesto-hombre-negocios-caucasico-traje-clasico-mostrando-tarjeta-credito-digamos-wow-pie-asombrado_1258-8848.jpg'
  },
  {
    nombre: 'Jesus',
    subheader: 'Diseñador y programador',
    edad: '19',
    description: ['Bachillerato', 'Tecnico en programación', 'Atención a clientes', 'Soporte'],
    im:'https://image.freepik.com/foto-gratis/pirata-informatico-encapuchado-que-roba-informacion-computadora-portatil_155003-1918.jpg'
  },
  {
    nombre: 'Brayan',
    subheader: 'Redes Sociales',
    edad: '19',
    description: ['Bachillerato', 'Tecnico en programación', 'Atención a clientes', 'Soporte'],
    im:'https://image.freepik.com/foto-gratis/retrato-hombre-alegre-haciendo-pagos-linea-internet-telefono-movil-tarjeta-credito-aislado-sobre-gris-oscuro_171337-598.jpg'
  },
];

export default function Pricing() {
  const classes = useStyles();//iniciar estilos

  return (
     <ThemeProvider  theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Pizzeria
          </Typography>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            <Link to="/Login">Iniciar Sesion</Link>
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Nosotros
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Somos una empresa dedicada a llevar felicidad y calidad hasta sus ogares, siendo una empresa comprometida en asegurar la atencion a sus clientes.
        </Typography>
        <Typography variant="h4" align="center" color="textSecondary" component="h1">
          Creemos que en tiempos dificiles, las oportunidades florecen.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.nombre} xs={12} sm={tier.nombre === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.nombre}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.nombre === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                <Container className={classes.container}>
                <Avatar alt="Remy Sharp" src={tier.im} className={classes.avatar} />
                </Container>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.edad}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                       años
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions disableSpacing>
                    <Container className={classes.container}>
                        <IconButton>
                        <FacebookIcon></FacebookIcon>
                        </IconButton>
                        <IconButton>
                            <TwitterIcon></TwitterIcon>
                        </IconButton>
                        <IconButton>
                            <InstagramIcon></InstagramIcon>
                        </IconButton>
                    </Container>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
          <Footer></Footer>
      </Container>
      {/* End footer */}
    </React.Fragment>
    </ThemeProvider> 
  );
}