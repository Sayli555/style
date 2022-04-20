import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <Button type="primary">primary button</Button>
      <Button type="default">default button</Button>
      <Button type="dashed">dashed</Button>
      <div>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </div>
    </div>
   
  );
}

export default App;
