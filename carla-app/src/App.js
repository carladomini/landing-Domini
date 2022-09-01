import './App.css';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Itemlistcontainer from './components/Itemlistcontainer';
import NavBar from './components/NavBar';
import Productos from './components/Productos';
import Quienessomos from './components/Quienessomos';
let imagen = "fondo.png"

function App() {
  return (
    <div className='container-fluid fondo_rosa' >
     <NavBar/>
     <Itemlistcontainer greeting="Bienvenidas" />
     <div className="text-center">
          <img src={imagen} alt="Luna Lingerie" className="img-fluid"/>   
        </div> 
     <Productos/>
     <Contacto/>
     <Quienessomos/>
     <Footer/>

    </div>
  );
}

export default App;
