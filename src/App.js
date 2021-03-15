import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Balance from './components/Balance';
import ListadoOperaciones from './components/ListadoOperaciones';


import {BrowserRouter as Router, Route} from 'react-router-dom';
import OperacionesState  from './context/operacionesState';

//import AlertaState from './context/alertas/alertaState';


function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <Fragment>
      <OperacionesState>
        <Router>
          {/* <Switch> */}
            
            {/* <Route exact path="/nueva-categoria" component={Formulario}/> */}
            
            <Header 
                titulo = 'Control de Presupuesto'
            />

            <div className="container white">
              <Formulario
                  //guardarCategoria = {guardarCategoria}
              />
              <ListadoOperaciones
              //operaciones = {operaciones}
              />
              <Balance/>
            </div>
            {/* </Switch> */}
          </Router>
        </OperacionesState> 
    </Fragment>
  );
}

export default App;
