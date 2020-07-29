import React, {Component} from 'react';
import Routes from './Routes'
import './firebase'

//iniciar el componete routes donde se encuentran las vistas de a cuardo a sus rutas.

class App extends Component {
  render(){
    return(
      <Routes></Routes>
    );
  }

}

export default App;