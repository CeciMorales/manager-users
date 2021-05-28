import { Button, Paper, Avatar, Tooltip, IconButton, Modal, TextField } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';
import './App.css';

function App() {
  return (
    <>
      <div className="app-header">        
        <h1>User Manager (4)</h1>
        <Button variant="contained" color="primary">Agregar</Button>
      </div>

      <div className="users-list">
        <Paper className="user-row" elevation={3}>
          <div className="left-side">
            <Avatar src="https://i.pinimg.com/originals/7e/67/eb/7e67eb044ae737a98b8779c6332dc179.jpg"></Avatar>
            <div className="user-name-container">
              <span className="user-name">Name</span>
              <span className="user-lastname"> Lastname</span>
              <span className="user-email"> (test@test.com)</span>
            </div>
          </div>
          <div className="right-side">
            <Tooltip title="desactivar">
              <IconButton>
                <Close></Close>
              </IconButton>
            </Tooltip>
            <Tooltip title="activar">
              <IconButton>
                <Done></Done>
              </IconButton>
            </Tooltip>
            <Tooltip title="eliminar">
              <IconButton>
                <Delete></Delete>
              </IconButton>
            </Tooltip>
          </div>
        </Paper>
        <Paper className="user-row" elevation={3}>
          <div className="left-side">
            <Avatar src="https://i.pinimg.com/564x/1e/0f/4d/1e0f4d865cafec1d8e5d49fc13cb78db.jpg"></Avatar>
            <div className="user-name-container">
              <span className="user-name">Name</span>
              <span className="user-lastname"> Lastname</span>
              <span className="user-email"> (test@test.com)</span>
            </div>
          </div>
          <div className="right-side">
            <Tooltip title="desactivar">
              <IconButton>
                <Close></Close>
              </IconButton>
            </Tooltip>
            <Tooltip title="activar">
              <IconButton>
                <Done></Done>
              </IconButton>
            </Tooltip>
            <Tooltip title="eliminar">
              <IconButton>
                <Delete></Delete>
              </IconButton>
            </Tooltip>
          </div>
        </Paper>
        <Paper className="user-row" elevation={3}>
          <div className="left-side">
            <Avatar src="https://i.pinimg.com/originals/7e/67/eb/7e67eb044ae737a98b8779c6332dc179.jpg"></Avatar>
            <div className="user-name-container">
              <span className="user-name">Name</span>
              <span className="user-lastname"> Lastname</span>
              <span className="user-email"> (test@test.com)</span>
            </div>
          </div>
          <div className="right-side">
            <Tooltip title="desactivar">
              <IconButton>
                <Close></Close>
              </IconButton>
            </Tooltip>
            <Tooltip title="activar">
              <IconButton>
                <Done></Done>
              </IconButton>
            </Tooltip>
            <Tooltip title="eliminar">
              <IconButton>
                <Delete></Delete>
              </IconButton>
            </Tooltip>
          </div>
        </Paper>
        <Paper className="user-row" elevation={3}>
          <div className="left-side">
            <Avatar src="https://i.pinimg.com/564x/1e/0f/4d/1e0f4d865cafec1d8e5d49fc13cb78db.jpg"></Avatar>
            <div className="user-name-container">
              <span className="user-name">Name</span>
              <span className="user-lastname"> Lastname</span>
              <span className="user-email"> (test@test.com)</span>
            </div>
          </div>
          <div className="right-side">
            <Tooltip title="desactivar">
              <IconButton>
                <Close></Close>
              </IconButton>
            </Tooltip>
            <Tooltip title="activar">
              <IconButton>
                <Done></Done>
              </IconButton>
            </Tooltip>
            <Tooltip title="eliminar">
              <IconButton>
                <Delete></Delete>
              </IconButton>
            </Tooltip>
          </div>
        </Paper>
      </div>

      <Modal
        open={false}>
          <div className="add-user-modal">
            <h1>Agregar Usuario</h1>
            <div>
              <TextField className="user-modal-input" variant="outlined" label="first name"></TextField>
              <TextField className="user-modal-input" variant="outlined" label="lastn name"></TextField>
              <TextField className="user-modal-input" variant="outlined" label="email"></TextField>
            </div>

            <div className="actions">
              <Button>Cerrar</Button>
            </div>
          </div>
      </Modal>
    </>
  );
}

export default App;
