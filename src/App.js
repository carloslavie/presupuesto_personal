import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Balance from './components/Balance';
import ListadoOperaciones from './components/ListadoOperaciones';

import {BrowserRouter as Router  } from 'react-router-dom';
import OperacionesState  from './context/operaciones/operacionesState';




function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  const [ nuevoBalance, setnuevoBalance ] = useState();
  const [ nuevoOperaciones, setnuevoOperaciones ] = useState([]);

  //Funcion para traer balance del componente balance
  const traerBalance = bal =>{
    setnuevoBalance(bal)
  }
  //Funcion para traer operaciones del componente ListadoOperaciones
  const traerOperaciones = oper =>{
      setnuevoOperaciones(oper)
  }

  return (
    <Fragment>
      <OperacionesState>
        <Router>
          <Header 
              titulo = 'Control de Presupuesto'
          />
              <div className="contenedorppal">
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
    </Fragment>
  );
}

export default App;
