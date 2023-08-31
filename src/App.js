
import './App.css';
import {Button,Avatar} from '@mui/material'

function App() {
  return (
    <div className="App">
      <h1>React MUI</h1>
      <button>Click Me</button>
     <Button>MUI</Button>
     <Button variant="contained">Hello world</Button>
     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </div>
  );
}

export default App;
