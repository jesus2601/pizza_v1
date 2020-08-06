import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../components/AppBar';


//Lista de iconos en el menu
const listSelect ={
  home:false,
  history:false,
  favorite:false,
  offer:true,//activo
  top:false,
  count:0
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));


//VIsta de ofertas

export default function Ofertas() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar items={listSelect}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {/*Epacio Para los item de Ofertas*/}
      </main>
    </div>
  );
}