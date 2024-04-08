import ProductRangeSlider from './ProductRangeSlider';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const OurProductDetails = () => {
    const navItems = [
        { title: 'See details', path: '/products' },
      ];
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 items-center justify-center max-w-7xl m-auto">
                <div data-aos="zoom-in" className="">
                    <h1 style={{ color: '#BED62F' }} className='text-5xl md:text-7xl text-center font-extrabold'>Our <br />Product <br /> Details</h1>
                    {navItems.map((item) => (
        <Button
          key={item.title}
          color="inherit"
          component={Link}
          to={item.path}
        >
          {item.title}
        </Button>
      ))}
                </div>
                <div className="">
                    <ProductRangeSlider />
                </div>
            </div>
        </div>
    )
}

export default OurProductDetails