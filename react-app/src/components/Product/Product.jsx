import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function Product1() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', font: 'bold', fontWeight: '1000', margin: '25px' }}>Our Poducts</h1>
      <hr style={{ border: 'none', borderBottom: '10px solid #CADA2A', marginBottom: '10px'}} />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '100px', padding: '25px', backgroundSize: 'cover',backgroundPosition: 'center'}}>
        
        
        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <img src="Product1.PNG" alt="Product8" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        

        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <img src="Product2.PNG" alt="Product8" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <img src="Product3.PNG" alt="Product8" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <img src="Product4.PNG" alt="Product8" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <img src="Product5.PNG" alt="Product8" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <img src="Product6.PNG" alt="Product8" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <img src="Product7.PNG" alt="Product8" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <img src="Product8.PNG" alt="Product8" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <img src="Product9.PNG" alt="Product8" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <img src="Product10.PNG" alt="Product8" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <img src="Product11.PNG" alt="Product8" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        {/* Repeat this for the remaining 6 photos */}
      </div>

      <hr style={{ border: 'none', borderBottom: '10px solid #CADA2A', marginTop: '10px' }} />


    </div>
  );
}

export default Product1;
