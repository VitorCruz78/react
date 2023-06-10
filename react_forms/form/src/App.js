import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <MyForm user={{ name: 'Vitor', email: 'vitin15012006@gmail.com' }} />
    </div>
  );
}

export default App;
