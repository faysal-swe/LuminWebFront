import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



function Product() {
  return (
    <div class="flex justify-center items-center h-screen">

  <div class="w-1/2 h-1/2 mb-80">

    <Carousel showThumbs={true} showIndicators={false} showStatus={false} infiniteLoop={true} autoPlay={false} interval={3000}>
        
        <div className="relative">
          <img src="Product1.jpg" alt="Product 1" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <Link to="/product-details" className="text-white bg-blue-500 px-4 py-2 rounded-md">Polyester Chips</Link>
          </div>
        </div>
        <div className="relative">
          <img src="Product1.jpg" alt="Product 1" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <Link to="/product-details1" className="text-white bg-blue-500 px-4 py-2 rounded-md">Product 1</Link>
          </div>
        </div>        
        <div className="relative">
          <img src="Product2.jpg" alt="Product 2" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <Link to="/product-details2" className="text-white bg-blue-500 px-4 py-2 rounded-md">Product 2</Link>
          </div>
        </div>        
        <div className="relative">
          <img src="Product3.jpg" alt="Product 3" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <Link to="/product-details3" className="text-white bg-blue-500 px-4 py-2 rounded-md">Product 3</Link>
          </div>
        </div>        
        <div className="relative">
          <img src="Product4.jpg" alt="Product 4" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <Link to="/product-details4" className="text-white bg-blue-500 px-4 py-2 rounded-md">Product 4</Link>
          </div>
        </div>        
        <div className="relative">
          <img src="Product5.jpg" alt="Product 5" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <Link to="/product-details5" className="text-white bg-blue-500 px-4 py-2 rounded-md">Product 5</Link>
          </div>
        </div>        
        <div className="relative">
          <img src="Product6.jpg" alt="Product 6" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <Link to="/product-details6" className="text-white bg-blue-500 px-4 py-2 rounded-md">Product 6</Link>
          </div>
        </div>        
        <div className="relative">
          <img src="Product7.jpg" alt="Product 7" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <Link to="/product-details7" className="text-white bg-blue-500 px-4 py-2 rounded-md">Product 7</Link>
          </div>
        </div>        
        <div className="relative">
          <img src="Product8.jpg" alt="Product 8" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <Link to="/product-details8" className="text-white bg-blue-500 px-4 py-2 rounded-md">Product 8</Link>
          </div>
        </div>        
        <div className="relative">
          <img src="Product9.jpg" alt="Product 9" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <Link to="/product-details9" className="text-white bg-blue-500 px-4 py-2 rounded-md">Product 9</Link>
          </div>
        </div>        
        <div className="relative">
          <img src="Product10.jpg" alt="Product 10" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <Link to="/product-details10" className="text-white bg-blue-500 px-4 py-2 rounded-md">Product 10</Link>
          </div>
        </div>        
        

      </Carousel>
    </div>


  </div>
);
}
  
  export default Product;