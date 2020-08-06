import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import fondo from '../images/fondo.jpeg'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    paddingTop:'9%',
    paddingBottom:'9%',
    paddingLeft:'5px',
    paddingRight:'5px',
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius:'15px',
    display:'flex',
    alignItems:'center'
  },
  overlay:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.0)',
    borderRadius:'15px'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
      paddingRight: 0,
    }
  },  
  searchSpace:{
    display:'flex',
    margin:'0 auto',
    width:'100vh',
    borderRadius:'50px',
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();


  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${fondo})` }}>
      <div className={classes.overlay} />
      <Grid container>
      <Paper component="form" className={classes.searchSpace}>
        <InputBase
          className={classes.input}
          placeholder="Buscar Pizzas"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};