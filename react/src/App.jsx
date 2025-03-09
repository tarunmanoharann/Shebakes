import Navbar from "./components/Navbar"
import PromoBar from "./components/Promobar"
import ProductList from "./components/ProductList"
import DefaultProducts from "./components/DefaultProducts"
import Reviews from "./components/Reviews"
import Footer from "./components/footer"


function App() {
  
  return (
    <div className="App">
    <header>
      <PromoBar />
      <Navbar />
    </header>
    <main>
        <DefaultProducts />
        <ProductList />
        <Reviews/>
        <Footer/>
      </main>

  </div>
  )
}

export default App
