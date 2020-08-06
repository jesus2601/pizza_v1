import React,{ useState } from 'react';
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

import ims from '../images/pizza.jpg';

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


const cards = [
  { id:1,
    nombre:'Mexicana extra queso doble'},
  {id:2,
    nombre:'Queso'}
];

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

  const [count, setCount] = useState(0);
  const classes = useStyles();
  const listSelect ={
    home:false,
    history:false,
    favorite:true,
    offer:false,
    top:false,
    count:1,
  }
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar items={listSelect}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} >
              {cards.map((card) => (
                <Grid item key={card.id} xs ={12} sm={12} md={8} lg={6}>
                  <Card className={classes.card}>
                    <Prev props={card}></Prev>
                    <CardActions disableSpacing>
                      <CustomizedDialogs props={card}></CustomizedDialogs>
                      <IconButton onClick={() => setCount(count + 1)}>
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
      </main>
    </div>
  );
}

function Prev(props) {
  const detalles=props.props;
  const hola=detalles.nombre;
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
          <p>{hola}</p>
        </Typography>
        <Typography>
          Pizza Mexicana para disfrutar con amigos.
        </Typography>
      </CardContent>
    </div>
  );  
}

function AddLess(props) {
  const prop=props;
  const classes = useStyles();
  const [count, setCount] = React.useState(0);
  return(
    <div>
      <Grid>
        <Grid container justify="center" spacing={0} className={classes.Cart}>
          <ButtonGroup className={classes.GroupB}>
            <Button
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
              className={classes.ButtonM}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              onClick={() => {
              setCount(count + 1);
              }}
              className={classes.ButtonM}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <IconButton color="inherit" onClick={()=>{console.log(prop.prop.nombre);}}>
            <Badge  badgeContent={count} color="secondary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

function CustomizedDialogs(e) {
  const detalles=e.props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
              Pastor, tocino, pimientos y cebolla.
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
              255
            </Typography>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}