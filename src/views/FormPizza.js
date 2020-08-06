import React,{useState, useEffect} from 'react';
//importar firebase
import {db} from '../firebase';
import { makeStyles,fade } from '@material-ui/core/styles';
import AddPizza from '../components/AddPizza';
import { Grid, ThemeProvider } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff9800',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#b22a00',
        main: '#ff3d00',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ff6333',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      tonalOffset: 0.2,
    },
  });

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        paddingTop:'25px',
      },
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
    appBarSpacer: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
        },
    },
  }));


export default function  FormPizza(){
    useEffect(()=>{
        getItems();
      },[]);
      const [pizzas, setPizzas] = useState([]);

    //Inicializar los estilos
    const classes = useStyles();
    const addPizza= async (Pizza) =>{
        await db.collection('pizzas').doc().set(Pizza);
        console.log("Guardado"+Pizza);
    };

    const getItems= async ()=>{
        db.collection('pizzas').onSnapshot((querySnap)=>{
          const docs =[];
          querySnap.forEach((doc)=>{
            docs.push({...doc.data(), id:doc.id})
          });
          setPizzas(docs);
        });
      }

    return(
    <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <AppBar position="absolute">
                <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    Administrador
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                </Toolbar>
            </AppBar>
            <main className={classes.content} color="primary">
                <div className={classes.appBarSpacer}></div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <AddPizza addPizza={addPizza}></AddPizza>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Tabla pizzas={pizzas}></Tabla>
                    </Grid>
                </Grid>
            </main>
        </div>
    </ThemeProvider>    
    );

};


const useStyles2 = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Tabla(props) {
  const classes = useStyles2();
  const rows = props.pizzas;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center">Detalles</TableCell>
            <TableCell align="center">Ingredientes</TableCell>
            <TableCell align="center">Tamaño</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="center">${row.precio}</TableCell>
              <TableCell align="center">{row.detalles}</TableCell>
              <TableCell align="center">{row.ingredientes}</TableCell>
              <TableCell align="center">{row.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}