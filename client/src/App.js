import './App.css';

import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});


function App() {
  return (
    <div className="App">
      <div>Hello World....</div>
    </div>
  );
}

export default App;
