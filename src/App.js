import Button from './component/Button'
import './style.css'
import './component/style.css'



function App() {
  return (
    <div className='App'>
    <h1>Button reusable component example</h1>
    <Button   cursor='not-allowed'  opacity=' 0.65'>button<span> 1️⃣ </span></Button>
    <Button cursor='pointer'>button<span> 2️⃣ </span></Button>
    </div>
  );
}

export default App;
