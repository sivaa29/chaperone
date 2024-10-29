import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './ProductList.css';

const ProductList = (props) => {
  const { productList } = props;
  const navigate = useNavigate();
  const goToThankYou = () => {
    navigate('/ThankYou');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleViewMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
    <div className='products-container'>
      {currentProducts.map((eachProduct) => (
        <ul key={eachProduct.id} className='product-list-container'>
          <li className='plant-container'>
            <img src={eachProduct.imgUrl} alt='product-image' className='image' />
            <button className='view-button' onClick={goToThankYou}>View Product</button>
          </li>
          <li className='plant-details-container'>
            <h1 className='heading'>{eachProduct.name}</h1>
            <p className='text'>{eachProduct.text}</p>
            <p className='text'>Rating: {eachProduct.rating}</p>
            <p className='price'><span>{eachProduct.originalPrice}</span> {eachProduct.price}</p>
          </li>
          <li className='button-container'>
            <button className='cart-button' onClick={() => openModal(eachProduct)}>Add to Cart</button>
            <button className='rent-button'>Buy on Rent</button>
          </li>
        </ul>
      ))}

    
      
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel='Cart Details' ariaHideApp={false}>
        {selectedProduct && (
          <div className='cart-details-container'>
            <img src={selectedProduct.imgUrl} alt='selected-product' />
            <h1 className='heading'>{selectedProduct.name}</h1>
            <p className='text'>{selectedProduct.text}</p>
            <p className='text'>Rating: {selectedProduct.rating}</p>
            <p className='price'><span>{selectedProduct.originalPrice}</span> {selectedProduct.price}</p>
            <div>
              <button className='cart-button'>Add Item</button>
              <button onClick={closeModal} className='cart-button'>Close</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
    <div className='view-more-button'>
            <button 
                className='cart-button' 
                onClick={handleViewMore}
                disabled={indexOfLastProduct >= productList.length}
            >
                View More
            </button>
        </div>
    </>
  )
};

export default ProductList;