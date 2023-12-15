import ListArticles from './components/ListArticles';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import EditClient from './components/EditClient';
import AddClient from './components/AddClient';
import HOME from './Home';
import ListClients from './components/ListClients';
import { CartProvider } from "use-shopping-cart";
import Cart from "./components/clientSide/Cart"

import ListCards from './components/clientSide/ListCards';
import PdfCart from "./components/clientSide/PdfCart";
import Loginclient from './components/authentificationClient/loginClient';
//import LoginAdmin from './components/authentificationClient/loginAdmin';




import Signup from "./components/authentificationClient/Signup";



import Dashboard from './dachborde';

import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Home from './Home';
function App() {
  return(
    <CartProvider>
    <Router>
  
      <Routes>
        <Route path='/articles' element={<ListArticles />}/>
        <Route path='/AddArticle' element={<AddArticle/>}/>
        
         <Route path='/editArticle/:id' element={<EditArticle/>}/>
         <Route path='/Home' element={<Home />}/> 
         <Route path='/Clients' element={<ListClients />}/> 
         <Route path='/editClient/:id' element={<EditClient/>}/>
         <Route path='/pdfCart' element={<PdfCart/>}/>
         <Route path='/AddClient' element={<AddClient/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/' element={<ListCards/>}/>
         <Route path="/signup" exact element={<Signup/>}/>
          {/*<Route path='/dashboard' element={<Dashboard/>}/>*/}
         <Route path="/loginclient" exact element={<Loginclient/>}/>
         <Route path="/admin" element={<Dashboard/>}/>
         {/*<Route path="/admin" exact element={<LoginAdmin/>}/>*/}
        
          {/*<Route path="/signup" exact element={<Signup/>}/>*/}

        {/* <Route path='/' element={<ListArticles/>}/> */}
            
      </Routes>
    </Router>
    </CartProvider>

  );

}
export default App;
