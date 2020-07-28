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

// import { createMuiTheme } from '@material-ui/core/styles';
// import deepOrange from '@material-ui/core/colors/deepOrange';
// import amber from '@material-ui/core/colors/amber'


// const theme = createMuiTheme({
//   palette: {
//     primary: deepOrange,
//     secondary: amber,
//   },
// });


const listSelect ={
  home:false,
  history:false,
  favorite:false,
  offer:false,
  top:false
}



export const mainListItems = (
  <div>
    <ListItem button selected={listSelect.home}>
      <ListItemIcon>
        <HomeIcon color={listSelect.home?'error':'action'}/>
      </ListItemIcon>
      <ListItemText primary="Inicio"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HistoryIcon color={listSelect.history?'error':'action'}/>
      </ListItemIcon>
      <ListItemText primary="Historial" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FavoriteIcon color={listSelect.favorite?'error':'action'} />
      </ListItemIcon>
      <ListItemText primary="Favoritos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalOfferIcon color={listSelect.offer?'error':'action'}/>
      </ListItemIcon>
      <ListItemText primary="Ofertas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WhatshotIcon color={listSelect.top?'error':'action'}/>
      </ListItemIcon>
      <ListItemText primary="Top" />
    </ListItem>
  </div>
);

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