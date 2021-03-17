import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Balance from './components/Balance';
import ListadoOperaciones from './components/ListadoOperaciones';

import {BrowserRouter as Router  } from 'react-router-dom';
import OperacionesState  from './context/operaciones/operacionesState';

//import AlertaState from './context/alertas/alertaState';


function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  const [ nuevoBalance, setnuevoBalance ] = useState();
  const [ nuevoOperaciones, setnuevoOperaciones ] = useState([]);

  //Funcion para traer balance de balance
  const traerBalance = bal =>{
    setnuevoBalance(bal)
  }
  //Funcion para traer operaciones de ListadoOperaciones
  const traerOperaciones = oper =>{
      setnuevoOperaciones(oper)
  }

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
                 nuevoBalance = {nuevoBalance}
              />
              <ListadoOperaciones
              traerOperaciones = {traerOperaciones}
              />
              <Balance
              traerBalance = {traerBalance}
              nuevoOperaciones = {nuevoOperaciones}

              />
            </div>
            {/* </Switch> */}
          </Router>
        </OperacionesState> 
    </Fragment>
  );
}

export default App;
