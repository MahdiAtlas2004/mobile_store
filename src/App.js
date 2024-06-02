import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Atlas Mobile Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App