import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const fecha= new Date().getFullYear();

  return (
    <>
      <div className="App App-header">
        <Header
        //bollean number strins also functions 
        titulo="Este valor es un props desde app.js a header"
        />
        <h1>Hola mundo</h1>
        <p>Hola mundo se encuentra en app.js, donde se renderizan los demas components</p>

        <Footer fecha={fecha}/>
      </div>
    </>
  );
}

export default App;
