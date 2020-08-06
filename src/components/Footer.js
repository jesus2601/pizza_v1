import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Links from '@material-ui/core/Link';
import { Grid, IconButton, Divider } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';


//Aqui va la información del Copyrigth de la empresa
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Links color="inherit" href="#">
        Pizzería.com
      </Links>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


//Variable de estilos
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    textAlign:'center',
    color:"white",
    backgroundColor:"#ff9800",
  },
  countain:{
      width:"100%",
      textAlign:"left"
  },
  link:{
      textDecoration:'none',
      color:"white"
  }
}));

export default function Footer() {
  const classes = useStyles();//iniciar estilos

  return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Grid container alignItems="center" spacing={8}>
              <Grid item xs={6}>
                  <div className={classes.countain}>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                        Links
                    </Typography>
                    <Link to="/Inicio" className={classes.link}>
                        <Typography variant='body1'>
                            Inicio
                        </Typography>
                    </Link>
                    <Link to="/Favoritos" className={classes.link}>
                        <Typography variant='body1'>
                            Favoritos
                        </Typography>
                    </Link>
                    <Link to="/Ofertas" className={classes.link}>
                        <Typography variant='body1'>
                            Ofertas
                        </Typography>
                    </Link>
                    <Link to="/Historial" className={classes.link}>
                        <Typography variant='body1'>
                            Historial
                        </Typography>
                    </Link>
                    <Link to="/Top" className={classes.link}>
                        <Typography variant='body1'>
                            Top
                        </Typography>
                    </Link>
                </div>
              </Grid>
              <Divider orientation='vertical' absolute></Divider>
              <Grid item xs={6}>
              <div className={classes.countain}>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                        Staff
                    </Typography>
                    <Link to="/Contacto" className={classes.link}>
                        <Typography variant='body1'>
                            Contacto
                        </Typography>
                    </Link>
                    <Link to="/Contactanos" className={classes.link}>
                        <Typography variant='body1'>
                            Preguntas
                        </Typography>
                    </Link>
                    <Link to="#faq" className={classes.link}>
                        <Typography variant='body1'>
                            FAQ
                        </Typography>
                    </Link>
                    <br></br>
                    <br></br>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Container>
                    <a href="https://www.facebook.com/PIZZA-XVI-644515206166010/?modal=admin_todo_tour">
                    <IconButton>
                        <FacebookIcon/>
                    </IconButton>
                    </a>
                    <a href="https://twitter.com/PizzaXvi">
                    <IconButton>
                        <TwitterIcon/>
                    </IconButton>
                    </a>
                    <a href="https://www.instagram.com/pizza_xvi/">
                    <IconButton>
                        <InstagramIcon/>
                    </IconButton>
                    </a>
                </Container>
              </Grid>
          </Grid>
          <Copyright />
        </Container>
      </footer>
  );
}