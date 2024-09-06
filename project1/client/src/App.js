import Navbar from "./components/Navbar/Navbar";
import {Outlet} from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import { Helmet } from 'react-helmet';

function App() {
  return (
    
    <div className="App">
      <Helmet>
        <title>Dazzling demo</title>
      </Helmet>

        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  );
}

export default App;
