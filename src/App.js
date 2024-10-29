import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import ProductList from './Components/ProductList/ProductList';
import ThankYou from './Components/ThankYou/ThankYou';
import Footer from './Components/Footer/Footer';

import './App.css';

const productList = [
  {
      id:1,
      name: 'Monstera',
      text: 'Indoor Plant, Low Maintainence',
      price: '₹299',
      originalPrice: "₹359",
      rating: 4.9,
      imgUrl: 'https://res.cloudinary.com/dfpz92ddp/image/upload/v1729349186/daa994fdb511faa82ea79a5ef58fbb1a_1_vcimrs.png'
  },

  {
      id:2,
      name: 'Monstera',
      text: 'Indoor Plant, Low Maintainence',
      price: '₹299',
      originalPrice: "₹359",
      rating: 4.9,
      imgUrl: 'https://res.cloudinary.com/dfpz92ddp/image/upload/v1729349186/7973d62829a030074ad8b6ad34_1_uya7fi.png'
  },

  {
      id:3,
      name: 'Monstera',
      text: 'Indoor Plant, Low Maintainence',
      price: '₹299',
      originalPrice: "₹359",
      rating: 4.9,
      imgUrl: 'https://res.cloudinary.com/dfpz92ddp/image/upload/v1729349186/e1ce63ff429a0c018fd6e2e5dd614458_3_dtl5nb.png'
  },

  {
      id:4,
      name: 'Monstera',
      text: 'Indoor Plant, Low Maintainence',
      price: '₹299',
      originalPrice: "₹359",
      rating: 4.9,
      imgUrl: 'https://res.cloudinary.com/dfpz92ddp/image/upload/v1729349186/daa994fdb511faa82ea79a5ef58fbb1a_2_rw3tzk.png'
  },

  {
      id:5,
      name: 'Monstera',
      text: 'Indoor Plant, Low Maintainence',
      price: '₹299',
      originalPrice: "₹359",
      rating: 4.9,
      imgUrl: 'https://res.cloudinary.com/dfpz92ddp/image/upload/v1729349187/e1ce63ff429a0c018fd6e2e5dd614458_2_sgvjrt.png'
  },

  {
      id:6,
      name: 'Monstera',
      text: 'Indoor Plant, Low Maintainence',
      price: '₹299',
      originalPrice: "₹359",
      rating: 4.9,
      imgUrl: 'https://res.cloudinary.com/dfpz92ddp/image/upload/v1729349187/daa994fdb511faa82ea79a5ef58fbb1a_sw8wyx.png'
  },

  {
      id:7,
      name: 'Monstera',
      text: 'Indoor Plant, Low Maintainence',
      price: '₹299',
      originalPrice: "₹359",
      rating: 4.9,
      imgUrl: 'https://res.cloudinary.com/dfpz92ddp/image/upload/v1729349187/7973d62829a030074ad8b6ad34_bhz3ra.png'
  },

  {
      id:8,
      name: 'Monstera',
      text: 'Indoor Plant, Low Maintainence',
      price: '₹299',
      originalPrice: "₹359",
      rating: 4.9,
      imgUrl: 'https://res.cloudinary.com/dfpz92ddp/image/upload/v1729349188/e1ce63ff429a0c018fd6e2e5dd614458_b1shqi.png'
  },

  {
      id:9,
      name: 'Monstera',
      text: 'Indoor Plant, Low Maintainence',
      price: '₹299',
      originalPrice: "₹359",
      rating: 4.9,
      imgUrl: 'https://res.cloudinary.com/dfpz92ddp/image/upload/v1729349188/e1ce63ff429a0c018fd6e2e5dd614458_1_ucuhvy.png'
  },


]

const App=()=> (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/plants' element={<ProductList productList={productList} />} />
          <Route path='/ThankYou' element={<ThankYou />} />
        </Routes>
        <Footer />
      </Router>
      
)

export default App;