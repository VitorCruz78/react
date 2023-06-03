import './App.css';
import MyComponent from './components/MyComponents';

function App() {
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      {/* inline CSS */}
      <p style={{ color: 'red', padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline.</p>
      {/* Inline CSS dinâmico */}
      <p style={1 > 10 ? { color: "red" } : { color: "green" }}>Hello, World!</p>
    </div>
  );
}

export default App;
