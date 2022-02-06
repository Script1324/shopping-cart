import ReactDom from "react-dom";
import Banner from "./Components/Banner"
import Product from "./Components/Product";
import TagLines from "./Components/TagLines";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";
import { useProvider } from "./Components/StateProvider";
import ProductCardDetaills from "./Components/ProductCardDetails";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Categories from "./Components/Categories";

function App() {
  
    const{modal} = useProvider();
  
  return (

    <div className="App">

      {ReactDom.createPortal(
        modal ?  <Modal/> : null,document.getElementById("modal")

       )}     

    <Router>
      <Routes>

        <Route path="/" element={<>

          <Banner/>
          <TagLines/>  
          <Product/>
          <Footer/>
          
        </>} />

        <Route path="productDetail/:id" element={<ProductCardDetaills/>}/>
        <Route path="categories" element={<Categories/>}/>             

        </Routes>
     </Router>
    </div>
  );
}

export default App;
