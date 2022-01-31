
import './App.css';
import { Message } from './components/Message';
const myName = "Anna"
function App() {
  const handleMessageClick=()=>{
    console.log('test function')
  }
  return (
    <div className="App">
      <header className="App-header">
        
        < Message text = {
          myName
        }
        func = {
          handleMessageClick
        }
        />
      </header>
    </div>
  );
}

export default App;
