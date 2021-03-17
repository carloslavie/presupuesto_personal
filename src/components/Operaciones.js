import React, { Fragment, useState, useContext, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import operacionesContext from '../context/operaciones/operacionesContext';


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Swal from 'sweetalert2';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const Operaciones = ({operation}) => {

    const { concepto, monto, fecha, tipo} = operation;
    const [ operacion, setOperacion ] = useState({
      concepto:"",
      monto:0
    })

    const operacionContext = useContext(operacionesContext)
    const {operacionActual, obtenerOperaciones, actualizarOperaciones, eliminarOperacion, operacionSeleccionada} = operacionContext;


    const classes = useStyles();  
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);


    useEffect(() => {
      setOperacion(operacionSeleccionada)
      obtenerOperaciones();
      
  },[operacionSeleccionada])

    const actualizarEdicion = e=>{
      setOperacion({
        ...operacion,
        [e.target.name] : e.target.value,
      })
    }

    const handleOpen = () => {
      setOpen(true);
      operacionActual(operation)
      
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit =  e =>{
      e.preventDefault();
      actualizarOperaciones(operacion);
      setOpen(false)
    }

    //Eliminar operacion
    const operacionEliminar = id => {
      Swal.fire({
          title: 'Esta seguro que quiere eliminar esta operación?',   
          icon: 'warning',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si'
        }).then((result) => {
          if (result.isConfirmed) {
              eliminarOperacion(id);
            Swal.fire(
              'Eliminada!',
              'La operación fue eliminada.',
              'success'
            )}
        })
    }

    //Modal para editar operacion
    const body = (
        <div style={modalStyle} className={classes.paper}>
          <div className="contenedor-form">
                <h3>Editar Operación</h3>
                <form 
                    onSubmit={handleSubmit}
                    className="form"
                >
                  <div>
                    <label>Concepto</label>
                      <input 
                        type = "text"
                        name = "concepto"
                        className = "u-full-width"
                        placeholder = "Ej. Transporte"
                        onChange = {actualizarEdicion}
                      />
                  </div>
                  <div>
                    <label>Monto</label>
                      <input 
                        type = "text"
                        name = "monto"
                        className = "u-full-width"
                        placeholder = "Ej. 300"
                        onChange = {actualizarEdicion}
                      />
                  </div>
                  <div className="col s12 right">
                    <input
                        type="submit"
                        className="btn waves-effect waves-light btn-small btn-block #0277bd light-blue darken-3 accent-4 "
                        value="Guardar Cambios"/>
                  </div>
                </form>
            </div>
        </div>
    );

    return ( 
        <Fragment>
        <tbody>
          <tr>
            <td> {concepto} </td>
            <td> {monto} </td>
            <td> {fecha} </td>
            <td> {tipo} </td>
            <td> 
                <IconButton aria-label="edit" onClick={handleOpen}>
                  <EditIcon />
                </IconButton> 
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
              </Modal>
            </td>
            <td> 
                <IconButton aria-label="delete" 
                    onClick={() => operacionEliminar(operation.id)}>
                    <DeleteIcon/>
                </IconButton>
            </td>
            
          </tr>                    
        </tbody>     
      </Fragment>
     );
}
 
export default Operaciones;

