import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Login from './components/Login';
import Balance from './components/Balance';
import ListadoOperaciones from './components/ListadoOperaciones';

import {BrowserRouter as Router  } from 'react-router-dom';
import OperacionesState  from './context/operaciones/operacionesState';
import AuthState  from './context/auth/authState';

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
      <AuthState>
      <OperacionesState>
        <Router>
              
            <Header 
                titulo = 'Control de Presupuesto'
            />

            <div className="container white">
              <Login/>
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
            
          </Router>
        </OperacionesState> 
        </AuthState>
    </Fragment>
  );
}

export default App;
