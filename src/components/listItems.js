import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HistoryIcon from '@material-ui/icons/History';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import MessageIcon from '@material-ui/icons/Message';
import HomeIcon from '@material-ui/icons/Home';
import { List } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import {orange, grey} from '@material-ui/core/colors/';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary:  {
      main: '#e65100',
    },
    neutral:grey[800]
  },
});



export default function MainListItems(props) {
  const { listSelect } = props;

  return(
    <ThemeProvider theme={theme}>
      <List>
        <Link style={{color:theme.palette.neutral, textDecoration:'none'}} to="/Inicio">
          <ListItem button selected={listSelect.home} >
            <ListItemIcon>
              <HomeIcon color={listSelect.home?"secondary":'primary'}/>
            </ListItemIcon>
            <ListItemText primary="Inicio"/>
          </ListItem>
        </Link>
      </List>
      <List>
        <Link style={{color:theme.palette.neutral, textDecoration:'none'}} to="/Favoritos">
          <ListItem button selected={listSelect.favorite}>
            <ListItemIcon>
              <FavoriteIcon color={listSelect.favorite?"secondary":'primary'}/>
            </ListItemIcon>
            <ListItemText primary="Favoritos"/>
          </ListItem>
        </Link>
      </List>
      <List>
        <Link style={{color:theme.palette.neutral, textDecoration:'none'}} to="/Top">
          <ListItem button selected={listSelect.top} >
            <ListItemIcon>
              <WhatshotIcon color={listSelect.top?"secondary":'primary'}/>
            </ListItemIcon>
            <ListItemText primary="Top"/>
          </ListItem>
        </Link>
      </List>
      <List>
        <Link style={{color:theme.palette.neutral, textDecoration:'none'}} to="/Ofertas">
          <ListItem button selected={listSelect.offer} >
            <ListItemIcon>
              <LocalOfferIcon color={listSelect.offer?"secondary":'primary'}/>
            </ListItemIcon>
            <ListItemText primary="Ofertas"/>
          </ListItem>
        </Link>
      </List>
      <List>
        <Link style={{color:theme.palette.neutral, textDecoration:'none'}} to="/Historial">
          <ListItem button selected={listSelect.history} >
            <ListItemIcon>
              <HistoryIcon color={listSelect.history?"secondary":'primary'}/>
            </ListItemIcon>
            <ListItemText primary="Historial"/>
          </ListItem>
        </Link>
      </List>
  </ThemeProvider>
  )
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Soporte</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ContactSupportIcon />
      </ListItemIcon>
      <ListItemText primary="Preguntas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MessageIcon />
      </ListItemIcon>
      <ListItemText primary="Contacto" />
    </ListItem>
  </div>
);