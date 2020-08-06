// Se importan todas las clases de la libreria material-ui y React, para poder renderizar el componente
import React,{ useState, useEffect} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Badge from '@material-ui/core/Badge';
import AppBar from '../components/AppBar';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import {db} from '../firebase'
import ims from '../images/pizza.jpg';
import Footer from '../components/Footer';

/*
SE crea una variable use Styles para guardar los estilos de los componentes,
su función es identica a CSS , diferencian la sintaxis ejemplo bakgroun-color bakcgroundColor
*/
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'//define la visibildad dentro del componente
  },
  content: {
    flexGrow: 1,
    height:'100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,//el tamaño que ocupa AppBar
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
   paddingTop:'50%'// 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  favorite:{
    marginLeft:'auto'
  },
  padre:{
    height:'100%'
  },
  Cart:{
    display:'flex',
    alignItems:'center'
  },
  GroupB:{
    width:'auto'
  },
  ButtonM:{
    padding:'3.5px',

  }
}));

//Otra variable de estilos
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});



/**
 * Grid es un metodo de 12 rejillas
 */

//Es una funcion que se utiliza para crear el header o cabecera de Un cuadro de dialogo 
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);
const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);



export default function Home() {
  /**
   * Es una propiedad de react que permanece activa en espera de un cambio.
   * epera una catualización, de la BD, para renderizar mas objetos
   */
  useEffect(()=>{
    getItems();
  },[]);

  const [pizzas, setPizzas] = useState([]);//Un comportamiento de react para actualizar variables
  /**
   * pizzas se ocupa para guardar todos los registros de la colleccion pizzas de firebase
   */
  
  const classes = useStyles();//define classes como varieble para utilizar los estilos creados
  
  /**
   * Es un arreglo donde se especifica que ventana esta activa de acuerdo a la vista que se este renderizando
   */
  const listSelect ={
    home:false,
    history:false,
    favorite:true,//Activo
    offer:false,
    top:false,
    count:1,
  }
  /**
   * Obtine todos los elementos de la collección pizzas de firebase 
   * lo guarda en una variable docs por cada elemento que encuentre, y al final
   * lo asigna a la variable Pizzas con el metodo setPizzas de useState()
   */
  const getItems= async ()=>{
    db.collection('pizzas').onSnapshot((querySnap)=>{
      const docs =[];
      querySnap.forEach((doc)=>{
        docs.push({...doc.data(), id:doc.id})
      });
      setPizzas(docs);
    });
  }
  
  return (
    /**
     * se inicializan los componentes, siempre deven estar en un contenedor padre
     * AppBar es un componente creado por nosotros y solo se importa
     * Mapea el arreglo que contiene todos los registros y cada map renderiza un item
     */
    <div className={classes.root}>
      <CssBaseline />
      <AppBar items={listSelect}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} >
              {pizzas.map((card) => (
                <Grid item key={card.id} xs ={12} sm={12} md={8} lg={6}>
                  <Card className={classes.card}>
                    <Prev props={card}></Prev>
                    <CardActions disableSpacing>
                      <CustomizedDialogs props={card}></CustomizedDialogs>
                      <IconButton>
                        <FavoriteIcon color="secondary"></FavoriteIcon>
                      </IconButton>
                      <Card className={classes.favorite}></Card>
                      <AddLess prop={card} ></AddLess>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            </Container>
          </Container>
          <Footer></Footer>
      </main>
    </div>
  );
}


/**
 * 
 * @param {*} props
 * Esta función crea otro componente, y este componente se manda a llamar como una etiqueta
 * Crea la estructura del item de un registro  
 */
function Prev(props) {

  const detalles=props.props;
  const classes = useStyles();

  return(
    <div className={classes.padre}>
      <CardMedia
        className={classes.cardMedia}
        image={ims}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h2">
          <p>{detalles.nombre}</p>
        </Typography>
        <Typography>
          {detalles.descripcion}
        </Typography>
      </CardContent>
    </div>
  );  
}

/**
 * 
 * @param {*} props
 * Crea otro componente, para la barra inferior del item, agrega los botones
 * para agregar o quitar un numero al badge del carrito de compras del item de un registro 
 */
function AddLess(props) {
  const classes = useStyles();
  const [count, setCount] = React.useState(0);//Contador
  return(
    <div>
      <Grid>
        <Grid container justify="center" spacing={0} className={classes.Cart}>
          <ButtonGroup className={classes.GroupB}>
            <Button
              onClick={() => {
                setCount(Math.max(count - 1, 0));//restar 1 al contador hasta llegar a 0
              }}
              className={classes.ButtonM}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              onClick={() => {
              setCount(count + 1);//sumar 1 al contador
              }}
              className={classes.ButtonM}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <IconButton color="inherit">
            <Badge  badgeContent={count} color="secondary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}


/**
 * 
 * @param {*} e
 * Es un cuadro de dialogo personalizado para que cuando se haga click en el boton de detalles se abra
 * y muestre mas informacion del producto {Esta en fase ,a un no estan definidos todos los detalles a mostrar} 
 */
function CustomizedDialogs(e) {
  const detalles=e.props;//recibe los parametros en la variable
  const [open, setOpen] = React.useState(false);//variable para saber si esta ceerada o no la ventana
  const handleClickOpen = () => {
    setOpen(true);//cambiar el valor de open
  };
  const handleClose = () => {
    setOpen(false);//cambial el valor de open
  };
  const classes=useStyles();

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Ver
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {detalles.nombre}
        </DialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={12}>
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  image={ims}
                  title="Image title"
                />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom variant='h4' component='h5'> 
              Ingredientes
              </Typography>
              <Typography gutterBottom > 
              {detalles.ingredientes/**usar la propiedad ingredientes del item */}
              </Typography>
            </Grid>  
          </Grid>
        </DialogContent>
        <DialogActions disableSpacing>
          <Grid container style={{textAlign:'center'}}>
            <Grid item xs={12}>
            <FavoriteIcon fontSize="large" color='secondary'></FavoriteIcon>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              {detalles.ranking/**usar la propiedad ranking del item */}
            </Typography>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}